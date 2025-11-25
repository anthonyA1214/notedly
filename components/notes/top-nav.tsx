import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import TopNavShadow from "@/components/topnavshadow";
import NotesSearch from "@/components/notes/notes-search";
import { NotesSearchSkeleton } from "@/components/notes/skeleton";
import { Suspense } from "react";

export default function TopNav() {
  return (
    <>
      <header
        className="flex bg-[#F2F3F5] fixed w-full md:sticky h-16 top-0 z-10 transition-shadow duration-200"
        id="top-nav"
      >
        <nav className="flex w-full justify-between p-4 gap-4 items-center">
          <SidebarTrigger className="md:hidden" />
          <Suspense fallback={<NotesSearchSkeleton />}>
            <NotesSearch />
          </Suspense>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </nav>
      </header>
      <TopNavShadow />
    </>
  );
}
