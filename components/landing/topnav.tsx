import Image from 'next/image';
import SignInButton from '@/components/landing/signinbutton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import TopNavShadow from "@/components/topnavshadow";

const navItems = [
    { 
        label: "Features",
        url: "#"
    },
    { 
        label: "How It Works",
        url: "#"
    },
    { 
        label: "Testimonials",
        url: "#"
    },
    { 
        label: "Pricing",
        url: "#"
    },
]

export default function TopNav() {
    return (
        <>
            <header className="flex w-full bg-[#F2F3F5] fixed h-16 top-0 z-10 transition-shadow duration-200" id="top-nav">
                <nav className="flex justify-between p-4 container mx-auto">
                    <div className="flex items-center gap-10">
                        <Link href="/" className="flex items-center gap-2">
                            <Image 
                                src="/logo.svg"
                                alt="Notedly Logo"
                                width={32}
                                height={32}
                            />
                            <h1 className="font-figtree font-extrabold text-xl hidden md:block">Notedly</h1>
                        </Link>
                        
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <Link key={item.label} href={item.url} className="text-lg hover:text-[#9582C5] active:text-[#8473AF]">
                                    {item.label}
                                </Link>
                            ))}
                        </div>          
                    </div>
                    
                    <div className="hidden md:flex items-center gap-4">
                        <SignInButton />
                        <Link href="/notes">
                            <Button 
                                className="text-lg bg-[#A590DB] hover:bg-[#9582C5] active:bg-[#8473AF]"
                            >
                                Get Started Free
                            </Button>
                        </Link>               
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
                            <Link href="/notes">
                                <Button variant="ghost">
                                    Try the app
                                </Button>
                            </Link>         
                            <SignInButton />
                        </SheetContent>
                    </Sheet>
                </nav>
            </header>  
            <TopNavShadow />
        </>     
    )
}