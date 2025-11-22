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
import { ScrollArea } from "@/components/ui/scroll-area"

export async function SideNav({ className }: { className?: string } ) {
    const items = await getPageItems();
    
    return (
        <Sidebar collapsible="offcanvas" className={`border-r ${className} p-0`}>
            <SidebarHeader className="py-6">
                <Link href="/" className="flex items-center gap-2">
                    <Image 
                        src="/logo.svg"
                        alt="Notedly Logo"
                        width={32}
                        height={32}
                    />
                    <h1 className="font-figtree font-extrabold text-lg">Notedly</h1>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>WORKSPACE</SidebarGroupLabel>
                    <SidebarGroupContent className="overflow-hidden">
                        <ScrollArea className="h-[calc(100vh-185px)] px-3">
                            <SidebarMenu className="space-y-1">
                                <PageItemsList items={items} /> 
                            </SidebarMenu>
                        </ScrollArea>                
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <CreateNewPageDialog>
                            <SidebarMenuButton asChild className="py-5 px-3">
                                <Button className="flex items-center justify-between bg-transparent">
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