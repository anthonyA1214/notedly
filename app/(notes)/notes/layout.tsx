import "@/app/globals.css";
import { SideNav } from "@/components/notes/sidenav";
import { SidebarProvider } from "@/components/ui/sidebar";
import TopNav from "@/components/notes/topnav";
import Image from "next/image";

export default function NotesLayout({
    children,
}: Readonly<{ children: React.ReactNode}> )  {
    return (
        <>
            <div className="flex min-h-screen">
                <SidebarProvider>
                    
                    {/* SIDE NAVIGATION */}
                    <SideNav className="hidden md:flex" />
   
                    <div className="flex flex-1 flex-col">
                        {/* TOP NAVIGATION */}
                        <TopNav />

                        <div className="flex flex-col md:flex-row flex-1 gap-8">

                            {/* ILLUSTRATION AND QUOTES */}
                            <aside className="order-1 md:order-2 flex flex-1 flex-col items-center">
                                <div>
                                    <Image
                                        src="/undraw_typing-code.svg"
                                        alt="Typing Code Illustration"
                                        width={605} 
                                        height={456}
                                    />
                                </div>
                            </aside>

                            {/* NOTES CONTENT */}
                            <main className="order-2 md:order-1 flex flex-1 md:max-w-xl shrink-0">
                                {children}
                            </main>
                        </div>            
                    </div>

                </SidebarProvider>
            </div>
        </>
    )
}