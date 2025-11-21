import { Plus } from "lucide-react"
import Image from 'next/image';
import Link from 'next/link';
import { getPageItems } from "@/lib/services/sidenav";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import PageItemsList from "@/components/notes/pageitemslist";
import { CreateNewPageDialog } from "@/components/notes/dialog";
import { Button } from "@/components/ui/button";

export async function SideNav({ className }: { className?: string } ) {
    const items = await getPageItems();
    
    return (
        <Sidebar variant="inset" collapsible="none" className={`border-r ${className} px-0.5`}>
            <SidebarHeader className="py-6">
                <Link href="/" className="flex items-center gap-2">
                    <Image 
                        src="/logo.svg"
                        alt="Notedly Logo"
                        width={32}
                        height={32}
                    />
                    <h1 className="font-figtree font-extrabold text-lg hidden md:block">Notedly</h1>
                </Link>
            </SidebarHeader>
            <SidebarContent className="p-0">
                <SidebarGroup>
                    <SidebarGroupLabel>WORKSPACE</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1">
                            <PageItemsList items={items} />
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <CreateNewPageDialog>
                            <SidebarMenuButton asChild className="py-5 hover:bg-[#E6E8EB] active:bg-[#E6E8EB]">
                                <Button className="flex items-center justify-between bg-transparent hover:bg-[#E6E8EB] active:bg-[#E6E8EB]">
                                    <div className="flex items-center gap-3 text-lg text-black">
                                        <Plus className="w-4 h-4"/>
                                        <span className="font-medium truncate overflow-hidden whitespace-nowrap min-w-[150px] max-w-[150px]">
                                            New Page
                                        </span>
                                    </div>
                                </Button>
                            </SidebarMenuButton>
                        </CreateNewPageDialog>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}