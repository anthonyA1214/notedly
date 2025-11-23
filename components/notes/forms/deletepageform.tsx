"use client";

import {
    DialogClose,
    DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { deletePage, type deleteState } from "@/lib/actions/pages";
import { useActionState, useEffect } from "react"
import { Spinner } from "@/components/ui/spinner"
import { DeletePageFormProps } from "@/lib/types/pages";

export default function DeletePageForm({ slug, item, onSuccess }: DeletePageFormProps) {
    const initialState: deleteState = {
        errors: null,
        status: null,
    }

    const [state, formAction, isPending] = useActionState(deletePage, initialState);

    useEffect(() => {
        if (state.status === "success") onSuccess();
    }, [state, onSuccess])

    return (
        <form action={formAction}>
            <Input type="hidden" name="slug" defaultValue={slug} />
            <Input type="hidden" name="id" defaultValue={item?.id} />

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
                    {isPending ? <><Spinner /> Deleting...</> : "Delete Page"}
                </Button>
            </DialogFooter>
        </form>
    )
}