import "@/app/globals.css";
import { SideNav } from "@/components/notes/sidenav";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function NotesLayout({
    children,
}: Readonly<{ children: React.ReactNode}> )  {
    return (
        <>
            <SidebarProvider>
                <SideNav />
                <main>
                    {children}
                </main>
            </SidebarProvider>
        </>
    )
}