import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ItemsActionDropdownProps {
    onOpenChange?: (isOpen: boolean) => void;
    onEdit?: () => void;
    onDelete?: () => void;
    className?: string;
}

export function ItemsActionDropdown({
    onOpenChange,
    onEdit,
    onDelete,
    className,
}: ItemsActionDropdownProps) {
    return (
        <DropdownMenu onOpenChange={onOpenChange}>
            <DropdownMenuTrigger asChild>
                <Button 
                    variant="ghost"
                    size="icon"
                    className={`transition-none ${className} 
                    hover:bg-transparent 
                    focus:outline-none focus:ring-0 
                    focus-visible:outline-none focus-visible:ring-0 hover:text-[#A590DB]`}
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
