import { z } from "zod";
import { getCategoryValues } from "@/lib/data/categoryItems";

export const CreateNewPageFormSchema = z.object({
    title: z.string().min(1, "Title is required."),
    category: z.enum(getCategoryValues(), "Please select a valid category."),
})

export const EditPageFormSchema = CreateNewPageFormSchema.extend({
    id: z.string().min(1, "Id is required."),
    currentPageSlug: z.string().min(1, "Page slug is required."),
})

export const DeletePageFormSchema = z.object({
    id: z.string().min(1, "Id is required."),
    currentPageSlug: z.string().min(1, "Page slug is required."),
})
