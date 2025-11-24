"use server";

import prisma from "@/lib/prisma";
import {
  CreateNewNoteFormSchema,
  EditNoteFormSchema,
  DeleteNoteFormSchema,
} from "@/lib/schemas/noteschema";
import { $Enums } from "../generated/prisma/client";
import z from "zod";
import { revalidatePath } from "next/cache";

export type createState = {
  errors?: {
    slug?: string[];
    title?: string[];
    content?: string[];
    category?: string[];
  } | null;
  status?: string | null;
};

export type editState = {
  errors?: {
    id?: string[];
    slug?: string[];
    title?: string[];
    content?: string[];
    category?: string[];
  } | null;
  status?: string | null;
};

export type deleteState = {
  errors?: {
    id?: string[];
    slug?: string[];
  } | null;
  status?: string | null;
};

export async function createNote(prevState: createState, formData: FormData) {
  const parsed = CreateNewNoteFormSchema.safeParse({
    slug: formData.get("slug"),
    title: formData.get("title"),
    content: formData.get("content"),
    category: formData.get("category"),
  });

  if (!parsed.success) {
    return {
      errors: z.flattenError(parsed.error).fieldErrors,
      status: "error",
    };
  }

  const { slug, title, content, category } = parsed.data;

  try {
    const page = await prisma.page.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!page) {
      return {
        errors: { slug: ["Page not found."] },
        status: "error",
      };
    }

    await prisma.note.create({
      data: {
        title: title,
        category: category as $Enums.Category,
        content: content,
        pageId: page.id,
      },
    });

    revalidatePath(`/notes/${slug}`);

    return {
      errors: {},
      status: "success",
    };
  } catch (error) {
    console.log("Create note failed: ", error);

    return {
      errors: { slug: ["An unexpected error occurred."] },
      status: "error",
    };
  }
}

export async function editNote(prevState: editState, formData: FormData) {
  const parsed = EditNoteFormSchema.safeParse({
    id: formData.get("id"),
    slug: formData.get("slug"),
    title: formData.get("title"),
    content: formData.get("content"),
    category: formData.get("category"),
  });

  if (!parsed.success) {
    return {
      errors: z.flattenError(parsed.error).fieldErrors,
      status: "error",
    };
  }

  const { id, slug, title, content, category } = parsed.data;

  try {
    await prisma.note.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        content: content,
        category: category as $Enums.Category,
      },
    });

    revalidatePath(`/notes/${slug}`);

    return {
      errors: {},
      status: "success",
    };
  } catch (error) {
    console.log("Edit note failed: ", error);

    return {
      errors: { slug: ["An unexpected error occurred."] },
      status: "error",
    };
  }
}

export async function deleteNote(prevState: deleteState, formData: FormData) {
  const parsed = DeleteNoteFormSchema.safeParse({
    id: formData.get("id"),
    slug: formData.get("slug"),
  });

  if (!parsed.success) {
    return {
      errors: z.flattenError(parsed.error).fieldErrors,
      status: "error",
    };
  }

  const { id, slug } = parsed.data;

  try {
    await prisma.note.delete({
      where: {
        id: id,
      },
    });

    revalidatePath(`/notes/${slug}`);

    return {
      errors: {},
      status: "success",
    };
  } catch (error) {
    console.log("Delete note failed: ", error);

    return {
      errors: { slug: ["An unexpected error occurred."] },
      status: "error",
    };
  }
}
