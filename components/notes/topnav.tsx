import NotesSheet from "@/components/notes/notessheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TopNav() {
    return (
        <>
            <header className="flex bg-[#F2F3F5]">
                <nav className="flex w-full justify-between md:justify-end p-4">
                    <NotesSheet />

                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </nav>
            </header>
        </>
    )
}