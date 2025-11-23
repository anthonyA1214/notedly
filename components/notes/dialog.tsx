"use client";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { NoteCategorySelect } from "@/components/notes/select";
import { 
    EditNoteDialogProps, 
    DeleteNoteDialogProps,
} from "@/lib/types/notes";
import {
    EditPageDialogProps,
    DeletePageDialogProps,
} from "@/lib/types/pages";
import CreateNewNoteForm from "@/components/notes/forms/createnewnoteform";
import EditNoteForm from "@/components/notes/forms/editnoteform";
import DeleteNoteForm from "@/components/notes/forms/deletenoteform";
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
                <CreateNewNoteForm slug={useSlug()} onSuccess={() => setOpen(false) } />
            </DialogContent>
        </Dialog>
    )
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
                <EditNoteForm slug={useSlug()} note={note} onSuccess={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    )
}

export function DeleteNoteDialog({ open, setOpen, note }: DeleteNoteDialogProps) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild></DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Delete Note</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this note? This action cannot be undone. This will delete the note titled &quot;{note?.title}&quot;.
                    </DialogDescription>
                </DialogHeader>

                <DeleteNoteForm slug={useSlug()} note={note} onSuccess={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    )
}

// PAGES

export function CreateNewPageDialog({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <Dialog>
            <DialogTrigger asChild className="w-full">{children}</DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Create New Page</DialogTitle>
                    <DialogDescription>                      
                        Fill in the details below to create a new page. 
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="page-name">Page Name</Label>
                        <Input id="page-name" name="page-name" placeholder="Enter page title" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="page-category">Category</Label>
                        <NoteCategorySelect />
                    </div>
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button
                        type="submit"
                        className="bg-[#A590DB] hover:bg-[#9582C5] active:bg-[#8473AF]"
                    >
                        Create Page
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
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

                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="note-title">Title</Label>
                        <Input id="note-title" name="note-title" placeholder="Enter note title" defaultValue={item?.title} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="note-category">Category</Label>
                        <NoteCategorySelect defaultValue={item?.category} />
                    </div>
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button
                        type="submit"
                        className="bg-[#A590DB] hover:bg-[#9582C5] active:bg-[#8473AF]"
                    >
                        Edit Page
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export function DeletePageDialog({ open, setOpen, item }: DeletePageDialogProps) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild></DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Delete Note</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this page? This action cannot be undone. This will delete the page titled &quot;{item?.title}&quot;.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button
                        type="submit"
                        className="bg-red-500 hover:bg-red-600 active:bg-red-700"
                    >
                        Delete Page
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}