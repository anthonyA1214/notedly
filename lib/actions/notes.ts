"use server";

import prisma from '@/lib/prisma'
import { NoteFormSchema } from '@/lib/schemas/noteSchema'
import { $Enums } from '../generated/prisma/client';
import z from 'zod';
import { revalidatePath } from 'next/cache';

export type State = {
    errors?: {
        slug?: string[],
        title?: string[],
        content?: string[],
        category?: string[],
    } | null;
    status?: string | null;
}

export async function createNote(prevState: State, formData: FormData) {
    const parsed = NoteFormSchema.safeParse({
        slug: formData.get("slug"),
        title: formData.get("title"),
        content: formData.get("content"),
        category: formData.get("category"),
    });

    if (!parsed.success) {
        return {
            errors: z.flattenError(parsed.error).fieldErrors,
            status: "Failed to create note.",
        }
    }

    const { slug, title, content, category } = parsed.data;
    
    try {
        const page = await prisma.page.findUnique({
            where: { slug },
            select: { id: true },
        })
    
        if (!page) {
            return {
                errors: { slug: ["Page not found."] },
                status: "error",
            }
        }
    
        await prisma.note.create({
            data: {
                title: title,
                category: category as $Enums.Category,
                content: content,
                pageId: page.id
            }
        });
    
        revalidatePath(`/notes/${slug}`)

        return {
            errors: {},
            status: "success",
        };
    } catch (error) {
        console.log("Create note failed: ", error)

        return {
            errors: { slug: ["An unexpected error occurred."] },
            status: "error",
        };
    }
}