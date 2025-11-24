"use client";

import { categoryIconsMap } from "@/lib/data/categoryIcons";
import { useState } from "react";
import Link from "next/link";
import { ItemsActionDropdown } from "@/components/notes/items-action-dropdown";
import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { PageItemsData, PageItemsListProps } from "@/lib/types/pages";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { EditPageDialog, DeletePageDialog } from "@/components/notes/dialog";

export default function PageItemsList({ items }: PageItemsListProps) {
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const pathname = usePathname();

  const [openEdit, setOpenEdit] = useState(false);
  const [selectedEditPageItem, setSelectedEditPageItem] =
    useState<PageItemsData | null>(null);

  const onEdit = (item: PageItemsData) => {
    setSelectedEditPageItem(item);
    setOpenEdit(true);
  };

  const [openDelete, setOpenDelete] = useState(false);
  const [selectedDeletePageItem, setSelectedDeletePageItem] =
    useState<PageItemsData | null>(null);

  const onDelete = (item: PageItemsData) => {
    setSelectedDeletePageItem(item);
    setOpenDelete(true);
  };

  return (
    <>
      {items.map((item) => {
        const Icon = categoryIconsMap[item.category];
        const href = `/notes/${item.slug}`;
        const isActive = pathname === href;
        return (
          <SidebarMenuItem
            key={item.id}
            onMouseEnter={() => setHoveredItemId(item.id)}
            onMouseLeave={() => setHoveredItemId(null)}
          >
            <SidebarMenuButton
              asChild
              className={cn(
                "py-5",
                isActive
                  ? "bg-white hover:bg-white active:bg-white shadow-md"
                  : "hover:bg-[#E6E8EB]"
              )}
            >
              <Link
                href={href}
                className={cn(
                  "flex items-center justify-between",
                  isActive
                    ? "bg-white hover:bg-white active:bg-white shadow-md"
                    : "hover:bg-[#E6E8EB]"
                )}
              >
                <div className="flex items-center gap-3 text-base">
                  {Icon && <Icon className="w-4 h-4 text-[#A590DB]" />}
                  <span className="font-medium truncate overflow-hidden whitespace-nowrap max-w-[125px]">
                    {item.title}
                  </span>
                </div>

                <ItemsActionDropdown
                  onOpenChange={(isOpen) => {
                    if (isOpen) {
                      setActiveItemId(item.id); // set active when opened
                    } else {
                      setActiveItemId(null); // clear active when closed
                    }
                  }}
                  onEdit={() => onEdit(item)}
                  onDelete={() => onDelete(item)}
                  isOpen={activeItemId === item.id}
                  className={cn(
                    "opacity-100 md:opacity-0",
                    (activeItemId === item.id || hoveredItemId === item.id) &&
                      "md:opacity-100"
                  )}
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}

      {selectedEditPageItem && (
        <EditPageDialog
          open={openEdit}
          setOpen={setOpenEdit}
          item={selectedEditPageItem}
        />
      )}

      {selectedDeletePageItem && (
        <DeletePageDialog
          open={openDelete}
          setOpen={setOpenDelete}
          item={selectedDeletePageItem}
        />
      )}
    </>
  );
}
