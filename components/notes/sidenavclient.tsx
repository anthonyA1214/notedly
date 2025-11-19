"use client";

import { categoryIconsMap } from "@/lib/data/categoryIcons";
import { useState } from "react";
import Link from 'next/link';
import { ItemsActionDropdown } from "@/components/notes/itemsactiondropdown";
import {
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import { SideNavItem } from "@/lib/types/navigation";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SideNavClientProps {
    items: SideNavItem[];
}

export default function SideNavClient({ items }: SideNavClientProps) {
    const [activeItemId, setActiveItemId] = useState<string | null>(null);
    const pathname = usePathname();

    return (
        <>
            {items.map((item) => {
                const Icon = categoryIconsMap[item.iconName];
                const href = `/notes/${item.slug}`;
                const isActive = pathname === href;
                return (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild className={cn(
                            "py-5",
                            isActive ? "bg-white hover:bg-white active:bg-white shadow-md"
                            : "hover:bg-[#E6E8EB]"
                        )}>
                            <Link href={href} className={cn(
                                "flex items-center justify-between group",
                                isActive ? "bg-white hover:bg-white active:bg-white shadow-md" 
                                : "hover:bg-[#E6E8EB]"
                            )}>
                                <div className="flex items-center gap-3 text-lg">
                                    {Icon && <Icon className="w-4 h-4 text-[#A590DB]" />}
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
                                    className={activeItemId === item.id ? "opacity-100 text-[#A590DB]" : "opacity-0 group-hover:opacity-100"}
                                />                       
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                )
            })}
        </>
    )
}