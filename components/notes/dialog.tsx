"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditNoteDialogProps, DeleteNoteDialogProps } from "@/lib/types/notes";
import { EditPageDialogProps, DeletePageDialogProps } from "@/lib/types/pages";
import CreateNewNoteForm from "@/components/notes/forms/create-new-note-form";
import EditNoteForm from "@/components/notes/forms/edit-note-form";
import DeleteNoteForm from "@/components/notes/forms/delete-note-form";
import CreateNewPageForm from "@/components/notes/forms/create-new-page-form";
import EditPageForm from "@/components/notes/forms/edit-page-form";
import DeletePageForm from "@/components/notes/forms/delete-page-form";
import { usePathname } from "next/navigation";
import { useState } from "react";

function useSlug() {
  const pathname = usePathname();
  return pathname.split("/").pop() ?? "";
}

// NOTES
export function CreateNewNoteDialog({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create New Note</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new note.
          </DialogDescription>
        </DialogHeader>
        <CreateNewNoteForm slug={useSlug()} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}

export function EditNoteDialog({ open, setOpen, note }: EditNoteDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Note</DialogTitle>
          <DialogDescription>
            Fill in the details below to edit the note.
          </DialogDescription>
        </DialogHeader>
        <EditNoteForm
          slug={useSlug()}
          note={note}
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}

export function DeleteNoteDialog({
  open,
  setOpen,
  note,
}: DeleteNoteDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Delete Note</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this note? This action cannot be
            undone. This will delete the note titled &quot;{note?.title}&quot;.
          </DialogDescription>
        </DialogHeader>

        <DeleteNoteForm
          slug={useSlug()}
          note={note}
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}

// PAGES
export function CreateNewPageDialog({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-full">
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create New Page</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new page.
          </DialogDescription>
        </DialogHeader>
        <CreateNewPageForm />
      </DialogContent>
    </Dialog>
  );
}

export function EditPageDialog({ open, setOpen, item }: EditPageDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Page</DialogTitle>
          <DialogDescription>
            Fill in the details below to edit the page.
          </DialogDescription>
        </DialogHeader>

        <EditPageForm
          slug={useSlug()}
          item={item}
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}

export function DeletePageDialog({
  open,
  setOpen,
  item,
}: DeletePageDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Delete Note</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this page? This action cannot be
            undone. This will delete the page titled &quot;{item?.title}&quot;.
          </DialogDescription>
        </DialogHeader>

        <DeletePageForm
          slug={useSlug()}
          item={item}
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
