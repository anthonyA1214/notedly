// import { Button } from "@/components/ui/button"
import {
    Empty,
    // EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"
import { Frown } from "lucide-react"
// import { CreateNewPageDialog } from "@/components/notes/dialog"

export function EmptyPageState() {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                <div className="rounded-xl bg-[#A590DB]/10 p-4 flex items-center justify-center">
                    <Frown className="text-[#A590DB]" />
                </div>
                </EmptyMedia>
                <EmptyTitle>No page selected yet</EmptyTitle>
                <EmptyDescription>
                    Please select a page from the sidebar or create a new one.
                </EmptyDescription>
                {/* <EmptyContent>
                    <CreateNewPageDialog>
                        <Button className="bg-[#A590DB] hover:bg-[#9582C5] active:bg-[#8473AF]">
                            Create New Page
                        </Button>
                    </CreateNewPageDialog>
                </EmptyContent> */}
            </EmptyHeader>
        </Empty>
    )
}