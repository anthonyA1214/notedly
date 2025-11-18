import type { Metadata } from "next";
import { montserrat } from "@/app/config/fonts";
import "@/app/globals.css";
import { SideNav } from "@/components/notes/sidenav";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
    title: {
        default: "notedly.",
        template: "%s | notedly.",
    },
    description: "A simple note taking app built with Next.js",
};

export default function NotesLayout({
    children,
}: Readonly<{ children: React.ReactNode}> )  {
    return (
        <html lang="en">
            <body className={`${montserrat.className} antialiased bg-[#F2F3F5] min-h-screen`}>
                <SidebarProvider>
                    <SideNav />
                    <main>
                        {children}
                    </main>
                </SidebarProvider>
            </body>
        </html>
    )
}