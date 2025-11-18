import "@/app/globals.css";
import TopNav from "@/components/landing/topnav";
import Footer from "@/components/landing/footer";

export default function MainLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <TopNav />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}
