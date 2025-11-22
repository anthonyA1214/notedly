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
import { usePathname } from "next/navigation";
import { createNote } from "@/lib/actions/notes";

export default function CreateNewNoteForm() {
    const pathname = usePathname();
    const slug = pathname.split('/').pop();

    return (
        <form>
            
            {/* Hidden input to store the current page slug */}
            <Input type="hidden" name="page-slug" value={slug} />

            {/* input fields */}
            <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                    <Label htmlFor="note-title">Title</Label>
                    <Input id="note-title" name="note-title" placeholder="Enter note title" />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="note-category">Category</Label>
                    <NoteCategorySelect name="note-category" />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="note-content">Content</Label>
                    <Textarea className="max-h-40" id="note-content" name="note-content" placeholder="Enter note content" />
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
        </form>      
    )
}