"use client";

import {
    DialogClose,
    DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { NoteCategorySelect } from "@/components/notes/select";
import { EditNoteFormProps } from "@/lib/types/notes";
import { editNote, type editState } from "@/lib/actions/notes";
import { useActionState, useEffect } from "react"
import { Spinner } from "@/components/ui/spinner"

export default function EditNoteForm({ slug, note, onSuccess }: EditNoteFormProps) {
    const initialState: editState = {
        errors: null,
        status: null,
    }

    const [state, formAction, isPending] = useActionState(editNote, initialState);

    useEffect(() => {
        if (state.status === "success") onSuccess();
    }, [state, onSuccess])

    return (
        <form action={formAction}>
            {/* Hidden input to store the current page slug and current note */}
            <Input type="hidden" name="id"  defaultValue={note?.id} />
            <Input type="hidden" name="slug" defaultValue={slug} />

            {/* input fields */}
            <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" name="title" placeholder="Enter note title" defaultValue={note?.title} />
                    {state?.errors?.title && (
                        <p className="text-red-500 text-sm">{state.errors.title}</p>
                    )}
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <NoteCategorySelect name="category" defaultValue={note?.category} />
                    {state?.errors?.category && (
                        <p className="text-red-500 text-sm">{state.errors.category}</p>
                    )}
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea className="max-h-40" id="content" name="content" placeholder="Enter note content" defaultValue={note?.content ?? ""} />
                    {state?.errors?.content && (
                        <p className="text-red-500 text-sm">{state.errors.content}</p>
                    )}
                </div>

                {state?.errors?.slug && (
                    <p className="text-red-500 text-sm">{state.errors.slug}</p>
                )}

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
                    {isPending ? <><Spinner /> Editing...</> : "Edit Note"}
                </Button>
            </DialogFooter>
        </form>           
    )
}