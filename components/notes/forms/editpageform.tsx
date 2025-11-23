"use client";

import {
    DialogClose,
    DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { NoteCategorySelect } from "@/components/notes/select";
import { editPage, type editState } from "@/lib/actions/pages";
import { useActionState, useEffect } from "react"
import { Spinner } from "@/components/ui/spinner"
import { EditPageFormProps } from "@/lib/types/pages";

export default function EditPageForm({ slug, item, onSuccess }: EditPageFormProps) {
    const initialState: editState = {
        errors: null,
        status: null,
    }

    const [state, formAction, isPending] = useActionState(editPage, initialState);

    useEffect(() => {
        if (state.status === "success") onSuccess();
    }, [state, onSuccess]);

    return (
        <form action={formAction}>
            <div className="grid gap-4 py-4">
                <Input type="hidden" name="currentPageSlug" defaultValue={slug} />
                <Input type="hidden" name="id" defaultValue={item?.id} />

                <div className="grid gap-2">
                    <Label htmlFor="title">Page Title</Label>
                    <Input id="title" name="title" placeholder="Enter page title" defaultValue={item?.title} />
                    {state?.errors?.title && (
                        <p className="text-red-500 text-sm">{state.errors.title}</p>
                    )}
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <NoteCategorySelect name="category" defaultValue={item?.category} />
                    {state?.errors?.category && (
                        <p className="text-red-500 text-sm">{state.errors.category}</p>
                    )}
                </div>

                {state?.errors?.id && (
                    <p className="text-red-500 text-sm">{state.errors.id}</p>
                )}
            </div>

            <DialogFooter>
                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button
                    type="submit"
                    className="bg-[#A590DB] hover:bg-[#9582C5] active:bg-[#8473AF]"
                    disabled={isPending}
                >
                    {isPending ? <><Spinner /> Editing...</> : "Edit Page"}
                </Button>
            </DialogFooter>
        </form>
    )
}