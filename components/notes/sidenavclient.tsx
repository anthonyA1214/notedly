"use client";

import { StickyNote, Check, Plus, Pencil, Megaphone, Hash } from "lucide-react"
import { useState } from "react";
import Link from 'next/link';
import { ItemsActionDropdown } from "@/components/notes/itemsactiondropdown";
import {
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import { SideNavItem } from "@/types/navigation";

interface SideNavClientProps {
    items: SideNavItem[];
}

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    StickyNote: StickyNote,
    Check: Check,
    Plus: Plus,
    Pencil: Pencil,
    Megaphone: Megaphone,
    Hash: Hash,
};

export default function SideNavClient({ items }: SideNavClientProps) {
    const [activeItemId, setActiveItemId] = useState<string | null>(null);

    return (
        <>
            {items.map((item) => {
                const Icon = iconMap[item.iconName];
                return (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild className="py-5">
                            <Link href={`/notes/${item.id}`} className="flex items-center justify-between group">
                                <div className={`flex items-center gap-3 text-lg ${activeItemId === item.id ? "opacity-100" : "opacity-50 group-hover:opacity-100"}`} >
                                    {Icon && <Icon className="w-4 h-4" />}
                                    <span className="font-medium truncate overflow-hidden whitespace-nowrap min-w-[150px] max-w-[150px]">
                                        {item.title}
                                    </span>
                                </div>

                                <ItemsActionDropdown 
                                    onOpenChange={(isOpen) => {
                                        if (isOpen) {
                                            setActiveItemId(item.id); // set active when opened
                                        } else {
                                            setActiveItemId(null);    // clear active when closed
                                        }
                                    }}               
                                    onRename={() => console.log(`Rename ${item.title}`)}
                                    onDelete={() => console.log(`Delete ${item.title}`)}
                                    className={activeItemId === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                                />                       
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                )
            })}
        </>
    )
}