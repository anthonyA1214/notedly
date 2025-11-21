import prisma from '@/lib/prisma'
import { ScrollArea } from "@/components/ui/scroll-area"
import NotesList from '@/components/notes/noteslist';

export default async function NotesPage({
    params
}: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const page = await prisma.page.findUnique({
        where: { slug },
        include: { notes: true }
    })

    if (!page) {
        return <div>not found</div>
    }
    
    return (
        <div className="flex flex-col h-full w-full items-center p-6 gap-8">
            <div className="flex w-full items-center justify-between">
                <h2 className="font-medium text-lg">{page.title}</h2>

                <span className="text-sm opacity-50">{page.notes.length} notes</span>
            </div>

            <div className="flex flex-col w-full overflow-hidden">
                <ScrollArea className="h-full w-full px-4">
                    <div className="flex flex-col gap-4 p-1">
                        {<NotesList notes={page.notes} />}
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}