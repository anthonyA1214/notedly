import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ItemsActionDropdownProps {
    onOpenChange?: (isOpen: boolean) => void;
    onEdit?: () => void;
    onDelete?: () => void;
    className?: string;
    isOpen?: boolean;
}

export function ItemsActionDropdown({
    onOpenChange,
    onEdit,
    onDelete,
    className,
    isOpen,
}: ItemsActionDropdownProps) {
    return (
        <DropdownMenu onOpenChange={onOpenChange}>
            <DropdownMenuTrigger asChild>
                <Button 
                    variant="ghost"
                    size="icon"
                    className={cn(
                        "transition-none",
                        "hover:bg-transparent",
                        "focus:outline-none focus:ring-0",
                        "focus-visible:outline-none focus-visible:ring-0 hover:text-[#A590DB]",
                        isOpen && "text-[#A590DB]",
                        className
                    )}
                    onClick={(e) => e.stopPropagation() }
                >
                    <Ellipsis className="w-4 h-4"/>
                </Button>   
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="start">
                <DropdownMenuItem onClick={(e) => {
                    e.stopPropagation();
                    if (onEdit) onEdit();
                } }>
                    Edit Page
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(e) => {
                    e.stopPropagation();
                    if (onDelete) onDelete();
                } } 
                className="text-destructive">
                    Delete Page
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
