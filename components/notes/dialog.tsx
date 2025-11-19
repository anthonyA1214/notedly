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

export function CreateNewNoteDialog({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Create New Note</DialogTitle>
                    <DialogDescription>
                        Fill in the details below to create a new note.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="note-title">Title</Label>
                        <Input id="note-title" name="note-title" placeholder="Enter note title" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="note-category">Category</Label>
                        <NoteCategorySelect />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="note-content">Content</Label>
                        <Input id="note-content" name="note-content" placeholder="Enter note content" />
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
                        Create Note
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export function EditNoteDialog({
    children
}: Readonly<{children: React.ReactNode}>) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Edit Note</DialogTitle>
                    <DialogDescription>
                        Fill in the details below to edit the note.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="note-title">Title</Label>
                        <Input id="note-title" name="note-title" placeholder="Enter note title" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="note-category">Category</Label>
                        <NoteCategorySelect />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="note-content">Content</Label>
                        <Input id="note-content" name="note-content" placeholder="Enter note content" />
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
                        Edit Note
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

// CREATE NEW

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