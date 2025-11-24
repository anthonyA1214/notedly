import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Spinner } from "@/components/ui/spinner";
import { FileQuestion, SearchX, StickyNote } from "lucide-react";

export function EmptyPageState() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <div className="rounded-xl bg-[#A590DB]/10 p-4 flex items-center justify-center">
            <FileQuestion className="text-[#A590DB]" size={32} />
          </div>
        </EmptyMedia>
        <EmptyTitle>No pages yet</EmptyTitle>
        <EmptyDescription>
          You haven’t created any pages yet. Start by creating a new page to add
          notes to.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}

export function EmptyPageNotFound() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <div className="rounded-xl bg-[#F87171]/10 p-4 flex items-center justify-center">
            <SearchX className="text-[#F87171]" size={32} />
          </div>
        </EmptyMedia>
        <EmptyTitle>Page not found</EmptyTitle>
        <EmptyDescription>
          This page doesn&apos;t exist. Double-check the URL or pick a different
          one.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}

export function EmptyNotesState() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <div className="rounded-xl bg-[#A590DB]/10 p-4 flex items-center justify-center">
            <StickyNote className="text-[#A590DB]" size={32} />
          </div>
        </EmptyMedia>
        <EmptyTitle>No notes yet</EmptyTitle>
        <EmptyDescription>
          This page has no notes so far. Start adding one!
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}

export function EmptyPageItemsListState() {
  return (
    <Empty>
      <EmptyContent>
        <EmptyMedia>
          <Spinner className="w-8 h-8 text-[#A590DB]" />
        </EmptyMedia>
      </EmptyContent>
    </Empty>
  );
}
