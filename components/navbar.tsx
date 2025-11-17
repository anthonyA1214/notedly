import Image from 'next/image';
import SignInButton from '@/components/signinbutton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

export default function NavBar() {
    return (
        <header className="flex justify-center bg-[#FFFFFF] shadow-md">
            <nav className="flex justify-between p-4 container">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Image 
                            src="/logo.svg"
                            alt="Notedly Logo"
                            width={40}
                            height={40}
                        />
                        <h1 className="font-figtree font-extrabold text-lg hidden md:block">Notedly</h1>
                    </Link>
                    
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="#" className="border-b-2 text-lg border-transparent hover:border-b-2 hover:border-[#9582C5]">
                            Features
                        </Link>
                        <Link href="#" className="border-b-2 text-lg border-transparent hover:border-b-2 hover:border-[#9582C5]">
                            About
                        </Link>
                    </div>          
                </div>
                
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost">
                        Try the app
                    </Button>
                    <SignInButton />
                </div>

                {/* Mobile Menu using ShadCN Sheet */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="md:hidden">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex flex-col gap-4">
                        <Link
                            href="#"
                            className="text-lg hover:text-[#9582C5]"
                        >
                            Features
                        </Link>
                        <Link
                            href="#"
                            className="text-lg hover:text-[#9582C5]"
                        >
                            About
                        </Link>
                        <Button variant="ghost">Try the app</Button>
                        <SignInButton />
                    </SheetContent>
                </Sheet>
            </nav>
        </header>  
    )
}