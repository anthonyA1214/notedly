import { Plus } from "lucide-react"
import Image from 'next/image';
import Link from 'next/link';
import { getSideNavItems } from "@/lib/services/sidenav";
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

import SideNavClient from "@/components/notes/sidenavclient";

// Menu items.dx* 
export async function SideNav({ className }: { className?: string } ) {
    const items = await getSideNavItems();
    
    return (
        <Sidebar variant="inset" collapsible="none" className={`border-r ${className}`}>
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
                            <SideNavClient items={items} />
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className="py-5">
                        <Link href="#" className="flex items-center justify-between group">
                            <div className="flex items-center gap-3 text-lg opacity-50 group-hover:opacity-100">
                                <Plus className="w-4 h-4"/>
                                <span className="font-medium truncate overflow-hidden whitespace-nowrap min-w-[150px] max-w-[150px]">
                                    New Page
                                </span>
                            </div>
                        </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}