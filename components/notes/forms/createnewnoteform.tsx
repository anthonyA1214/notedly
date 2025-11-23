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
import { createNote, type createState } from "@/lib/actions/notes";
import { useActionState, useEffect } from "react"
import { Spinner } from "@/components/ui/spinner"

export default function CreateNewNoteForm({ slug, onSuccess }: { slug: string, onSuccess: () => void }) {
    const initialState: createState = {
        status: null,
        errors: null
    };

    const [state, formAction, isPending] = useActionState(createNote, initialState);

    useEffect(() => {
        if (state.status === "success") onSuccess();
    }, [onSuccess, state])

    return (
        <form action={formAction} >
            {/* Hidden input to store the current page slug */}
            <Input type="hidden" name="slug" defaultValue={slug} />

            {/* input fields */}
            <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" name="title" placeholder="Enter note title" />
                    {state?.errors?.title && (
                        <p className="text-red-500 text-sm">{state.errors.title}</p>
                    )}
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <NoteCategorySelect name="category" />
                    {state?.errors?.category && (
                        <p className="text-red-500 text-sm">{state.errors.category}</p>
                    )}
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea className="max-h-40" id="content" name="content" placeholder="Enter note content" />
                    {state?.errors?.content && (
                        <p className="text-red-500 text-sm">{state.errors.content}</p>
                    )}
                </div>

                {state?.errors?.slug && (
                    <p className="text-red-500 text-sm">{state.errors.slug}</p>
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
                    {isPending ? <><Spinner /> Creating...</> : "Create Note"}
                </Button>
            </DialogFooter>
        </form>      
    )
}