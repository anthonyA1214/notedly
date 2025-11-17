import type { Metadata } from "next";
import { montserrat } from "@/app/config/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "notes",
    description: "A simple note taking app built with Next.js",
};

export default function NotesLayout({
    children,
}: Readonly<{ children: React.ReactNode}> )  {
    return (
        <html lang="en">
            <body className={`${montserrat.className} antialiased bg-[#F2F3F5] min-h-screen`}>
                {children}
            </body>
        </html>
    )
}