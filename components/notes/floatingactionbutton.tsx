import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function FloatingActionButton() {
    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
            <Button
                size="icon"
                className="bg-[#A590DB] hover:bg-[#9582C5] active:bg-[#8473AF] shadow-lg rounded-full p-4 md:p-5 w-full h-full"
                aria-label="Add New Note"
            >
                <Plus className="w-6 h-6 text-white" />
            </Button>
        </div>
    )
}