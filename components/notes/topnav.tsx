import { Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import TopNavShadow from "./topnavshadow";

export default function TopNav() {
    return (
        <>
            <header className="flex bg-[#F2F3F5] fixed md:sticky h-16 top-0 z-10 transition-shadow duration-200" id="top-nav">
                <nav className="flex w-full justify-between p-4 gap-4 items-center">
                    <SidebarTrigger className="md:hidden" />
                    <InputGroup className="max-w-sm">
                        <InputGroupInput placeholder="Search notes..." />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                    </InputGroup>         
                    
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </nav>
            </header>
            <TopNavShadow />
        </>
    )
}