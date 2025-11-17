import type { Metadata } from "next";
import { montserrat } from "@/app/config/fonts";
import "./globals.css";
import NavBar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Notedly",
  description: "A simple note taking app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-[#F2F3F5] min-h-screen`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
