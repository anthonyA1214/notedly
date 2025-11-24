import { NotesListSkeleton } from "@/components/notes/skeleton";

export default function Loading() {
  return (
    <div className="min-h-full w-full">
      <NotesListSkeleton />
    </div>
  );
}
