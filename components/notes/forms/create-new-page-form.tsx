"use client";

import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { NoteCategorySelect } from "@/components/notes/select";
import { createPage, type createState } from "@/lib/actions/pages";
import { useActionState } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function CreateNewPageForm() {
  const initialState: createState = {
    errors: null,
    status: null,
  };

  const [state, formAction, isPending] = useActionState(
    createPage,
    initialState,
  );

  return (
    <form action={formAction}>
      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="title">Page Title</Label>
          <Input id="title" name="title" placeholder="Enter page title" />
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
          {isPending ? (
            <>
              <Spinner /> Creating...
            </>
          ) : (
            "Create Page"
          )}
        </Button>
      </DialogFooter>
    </form>
  );
}
