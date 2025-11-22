import { categoryIconsMap } from "@/lib/data/categoryIcons"
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

interface NoteCardProps {
    id: string,
    title: string,
    content: string,
    category: string,
    onEdit?: () => void,
    onDelete?: () => void
}

export default function NoteCard({ title, content, category, onEdit, onDelete }: NoteCardProps) {
    const Icon = categoryIconsMap[category];

    return (
        <div className="flex flex-col gap-6 w-full p-4 rounded-2xl border shadow-sm hover:shadow-md group">
            <div className="flex justify-between">
                <div className="flex gap-x-2 items-center">
                    <div className="rounded-xl bg-[#A590DB]/10 p-3 flex items-center justify-center text-lg">
                        {Icon && <Icon className="w-[1em] h-[1em] text-[#A590DB]" />}
                    </div>
    
                    <h3 className="font-semibold">{title}</h3>
                </div>

                <div className="flex gap-0.5 md:gap-2 md:opacity-0 md:group-hover:opacity-100">
                    <Button 
                        className="bg-transparent text-black/50 hover:bg-black/5 active:bg-black/10"
                        onClick={onEdit}
                    >
                        <Pencil />
                    </Button>
                    <Button 
                        className="bg-transparent text-red-500/50 hover:bg-red-500/10 active:bg-red-500/20"
                        onClick={onDelete}
                    >
                        <Trash2 />
                    </Button>
                </div>
            </div>

            <p className="text-sm opacity-50 whitespace-pre-wrap">{content}</p>
        </div>
    )
}