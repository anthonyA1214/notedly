"use server";

import prisma from "@/lib/prisma";
import { $Enums } from "../generated/prisma/client";
import z from "zod";
import { revalidatePath } from "next/cache";
import {
  CreateNewPageFormSchema,
  EditPageFormSchema,
  DeletePageFormSchema,
} from "@/lib/schemas/pageschema";
import slugify from "slugify";
import { redirect } from "next/navigation";

export type createState = {
  errors?: {
    title?: string[];
    category?: string[];
  } | null;
  status?: string | null;
};

export type editState = {
  errors?: {
    id?: string[];
    title?: string[];
    category?: string[];
  } | null;
  status?: string | null;
};

export type deleteState = {
  errors?: {
    id?: string[];
  } | null;
  status?: string | null;
};

export async function createPage(prevState: createState, formData: FormData) {
  const parsed = CreateNewPageFormSchema.safeParse({
    title: formData.get("title"),
    category: formData.get("category"),
  });

  if (!parsed.success) {
    return {
      errors: z.flattenError(parsed.error).fieldErrors,
      status: "error",
    };
  }

  const { title, category } = parsed.data;
  const slug = slugify(title, { lower: true });

  try {
    const existing = await prisma.page.findUnique({
      where: { slug: slug },
    });

    if (existing) {
      return {
        errors: { title: ["A page with this title already exists."] },
        status: "error",
      };
    }

    await prisma.page.create({
      data: {
        title: title,
        slug: slug,
        category: category as $Enums.Category,
      },
    });
  } catch (error) {
    console.log("Create page failed: ", error);

    return {
      errors: { title: ["An unexpected error occurred."] },
      status: "error",
    };
  }

  revalidatePath("/notes");
  redirect(`/notes/${slug}`);
}

export async function editPage(prevState: editState, formData: FormData) {
  const parsed = EditPageFormSchema.safeParse({
    id: formData.get("id"),
    currentPageSlug: formData.get("currentPageSlug"),
    title: formData.get("title"),
    category: formData.get("category"),
  });

  if (!parsed.success) {
    return {
      errors: z.flattenError(parsed.error).fieldErrors,
      status: "error",
    };
  }

  const { id, title, currentPageSlug, category } = parsed.data;
  const newSlug = slugify(title, { lower: true });

  let currentPageId;

  try {
    const current = await prisma.page.findUnique({
      where: { slug: currentPageSlug },
      select: { id: true },
    });

    if (!current) {
      return {
        errors: { id: ["Page not found."] },
        status: "error",
      };
    }

    currentPageId = current?.id;

    // Check if another page already uses the new slug/page title
    const existing = await prisma.page.findUnique({
      where: { slug: newSlug },
    });

    if (existing && existing.id !== id) {
      return {
        errors: { title: ["A page with this title already exists."] },
        status: "error",
      };
    }

    await prisma.page.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        slug: newSlug,
        category: category as $Enums.Category,
      },
    });
  } catch (error) {
    console.log("Create page failed: ", error);

    return {
      errors: { title: ["An unexpected error occurred."] },
      status: "error",
    };
  }

  revalidatePath("/notes");

  if (currentPageId === id) {
    redirect(`/notes/${newSlug}`);
  }

  return {
    errors: {},
    status: "success",
  };
}

export async function deletePage(prevState: deleteState, formData: FormData) {
  const parsed = DeletePageFormSchema.safeParse({
    id: formData.get("id"),
    currentPageSlug: formData.get("slug"),
  });

  if (!parsed.success) {
    return {
      errors: z.flattenError(parsed.error).fieldErrors,
      status: "error",
    };
  }

  const { id, currentPageSlug } = parsed.data;
  let currentPageId;

  try {
    const current = await prisma.page.findUnique({
      where: { slug: currentPageSlug },
      select: { id: true },
    });

    currentPageId = current?.id;

    // First delete all notes that belong to the page, then delete the page itself.
    await prisma.note.deleteMany({
      where: {
        pageId: id,
      },
    });

    await prisma.page.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log("Delete page failed: ", error);

    return {
      errors: { id: ["An unexpected error occurred."] },
      status: "error",
    };
  }

  revalidatePath("/notes");

  if (currentPageId === id) {
    redirect(`/notes`);
  }

  return {
    errors: {},
    status: "success",
  };
}
