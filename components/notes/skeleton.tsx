import { Skeleton } from "@/components/ui/skeleton"

export function NotesListSkeleton() {
    return (
        <div className="flex flex-col h-full w-full items-center p-6 gap-8">
            {/* Header */}
            <div className="flex w-full items-center justify-between">
                <Skeleton className="h-6 w-40 bg-[#E1E3E7]" />
                <Skeleton className="h-4 w-20 bg-[#E1E3E7]" />
            </div>

            {/* Notes list container */}
            <div className="flex flex-col w-full overflow-hidden">
            <div className="h-full w-full px-4">
                <div className="flex flex-col gap-4 py-1">
                    {/* Repeat skeleton notecards */}
                    {Array.from({ length: 3 }).map((_, i) => (
                        <NoteCardSkeleton key={i} />
                    ))}
                </div>
            </div>
            </div>
        </div>
    )
}

function NoteCardSkeleton() {
    return (
        <div className="flex flex-col gap-6 w-full p-4 rounded-2xl border shadow-sm">
            <div className="flex justify-between">
                <div className="flex gap-x-2 items-center">
                    <Skeleton className="h-10 w-10 rounded-xl bg-[#E1E3E7]" />
                    <Skeleton className="h-5 w-32 bg-[#E1E3E7]" />
                </div>

                <div className="flex gap-0.5 md:gap-2">
                    <Skeleton className="h-8 w-8 rounded-md bg-[#E1E3E7]" />
                    <Skeleton className="h-8 w-8 rounded-md bg-[#E1E3E7]" />
                </div>
            </div>

            <Skeleton className="h-16 w-full bg-[#E1E3E7]" />
        </div>
    );
}
