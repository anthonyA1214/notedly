"use server";

import prisma from '@/lib/prisma'
import { NoteFormSchema } from '@/lib/schemas/noteSchema'
import { $Enums } from '../generated/prisma/client';

export async function createNote(formData: FormData) {
    const parsed = NoteFormSchema.safeParse({
        slug: formData.get("slug"),
        title: formData.get("title"),
        content: formData.get("content"),
        category: formData.get("category"),
    });

    if (!parsed.success) {
        return {
            errors: parsed.error.flatten().fieldErrors,
            message: "Failed to create note.",
        }
    }

    const { slug, title, content, category } = parsed.data;
    
    const page = await prisma.page.findUnique({
        where: { slug },
        select: { id: true },
    })

    if (!page) {
        return {
            errors: { slug: ["Page not found."] },
            message: "Failed to create note.",
        }
    }

    await prisma.note.create({
        data: {
            title: title,
            category: category as $Enums.Category,
            content: content,
        }
    });
}