import Image from 'next/image';
import SignInButton from '@/components/landing/signinbutton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import TopNavShadow from "@/components/topnavshadow";
import LandingCollapsible from '@/components/landing/landingcollapsible';

const navItems = [
    { label: "Features", url: "#features" },
    { label: "How It Works", url: "#how-it-works" },
    { label: "Testimonials", url: "#testimonials" },
    { label: "Pricing", url: "#pricing" },
];

export default function TopNav() {
    return (
        <>
            <header className="flex w-full bg-[#F2F3F5] fixed h-16 top-0 z-10 transition-shadow duration-200" id="top-nav">
                <nav className="flex justify-between p-4 container mx-auto">
                    <div className="flex items-center gap-4 md:gap-10">
                        <LandingCollapsible />
                        <Link href="/#hero" className="flex items-center gap-2">
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
                    
                    <div className="flex items-center gap-4">
                        <SignInButton />
                        <Link href="/notes">
                            <Button 
                                className="text-sm md:text-lg bg-[#A590DB] hover:bg-[#9582C5] active:bg-[#8473AF]"
                            >
                                Get Started
                            </Button>
                        </Link>               
                    </div>
                </nav>
            </header>  
            <TopNavShadow />
        </>     
    )
}