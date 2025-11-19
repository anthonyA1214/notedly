import "@/app/globals.css";
import { SideNav } from "@/components/notes/sidenav";
import { SidebarProvider } from "@/components/ui/sidebar";
import TopNav from "@/components/notes/topnav";
import Image from "next/image";
import { getRandomQuote } from "@/lib/services/quotes";
import { getGreeting } from "@/lib/services/greetings";
import QuoteCard from "@/components/notes/quotecard";
import { CreateNewNoteDialog } from "@/components/notes/dialog";

export default async function NotesLayout({
    children,
}: Readonly<{ children: React.ReactNode}> )  {
    const quote = await getRandomQuote();
    const greeting = getGreeting();

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

                        <aside className="order-1 md:order-2 flex flex-1 flex-col items-center p-6">
                            <div className="flex flex-col gap-12 w-full max-w-3xl">
                                {/* Image */}
                                <div className="flex justify-center">
                                    <Image
                                        src="/undraw_typing-code.svg"
                                        alt="Typing Code Illustration"
                                        width={550}   // konting bawas lang
                                        height={415}  // maintain aspect ratio
                                    />
                                </div>

                                {/* Text + Quote */}
                                <div className="flex flex-col w-full gap-8">
                                    <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl wrap-break-word">
                                        {greeting}
                                    </h1>

                                    <QuoteCard quote={quote} />
                                </div>
                            </div>
                        </aside>


                            {/* NOTES CONTENT */}
                            <main className="order-2 md:order-1 flex flex-1 md:max-w-xl shrink-0">
                                {children}
                            </main>
                        </div>            
                    </div>
                    <CreateNewNoteDialog />
                </SidebarProvider>
            </div>
        </>
    )
}