import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { getCategoryItems } from "@/lib/data/categoryItems"

export function NoteCategorySelect({ defaultValue: value }: { defaultValue?: string }) {
    const items = getCategoryItems();
    const firstItem = items[0]?.value;

    return (
        <Select defaultValue={value ?? firstItem}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}