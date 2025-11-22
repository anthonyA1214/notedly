import { z } from "zod";
import { getCategoryValues } from "../data/categoryItems";

export const NoteFormSchema = z.object({
    slug: z.string().min(1, "Page slug is required."),
    title: z.string().min(1, "Title is required."),
    content: z.string().nullable(),
    category: z.enum(getCategoryValues(), "Please select a valid category."),
})