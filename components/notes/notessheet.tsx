import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Menu } from 'lucide-react';
  import { Button } from '@/components/ui/button';

export default function NotesSheet() {
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" className="md:hidden">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    )
}