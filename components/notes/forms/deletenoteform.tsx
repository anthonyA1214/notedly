"use client";

import {
    DialogClose,
    DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { DeleteNoteFormProps } from "@/lib/types/notes";
import { deleteNote, type deleteState } from "@/lib/actions/notes";
import { useActionState, useEffect } from "react"
import { Spinner } from "@/components/ui/spinner"

export default function DeleteNoteForm({ slug, note, onSuccess }: DeleteNoteFormProps) {
    const initialState: deleteState = {
        errors: null,
        status: null,
    }

    const [state, formAction, isPending] = useActionState(deleteNote, initialState);

    useEffect(() => {
        if (state.status === "success") onSuccess();
    }, [state, onSuccess])

    return (
        <form action={formAction}>
            {/* Hidden input to store the current page slug and current note */}
            <Input type="hidden" name="id"  defaultValue={note?.id} />
            <Input type="hidden" name="slug" defaultValue={slug} />

            {state?.errors?.slug && (
                <p className="text-red-500 text-sm">{state.errors.slug}</p>
            )}

            {state?.errors?.id && (
                <p className="text-red-500 text-sm">{state.errors.id}</p>
            )}
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 active:bg-red-700"
                    disabled={isPending}
                >
                    {isPending ? <><Spinner /> Deleting...</> : "Delete Note"}
                </Button>
            </DialogFooter>
        </form>       
    )
}