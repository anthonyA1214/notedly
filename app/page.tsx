import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Folder, Cloud } from 'lucide-react';
import FeatureCard from '@/components/featurecard';

export default function Page() {
    return (
        <main className="container max-w-7xl mx-auto">
            {/* Hero section */}
            <section className="flex flex-col py-20 text-center px-6 space-y-6">

                <h1 className="text-6xl font-extrabold opacity-90 mb-4 tracking-tighter leading-tight">
                    Capture Every Thought. Instantly.
                </h1>

                <p className="text-xl opacity-60 mb-10 max-w-3xl mx-auto">
                    Notedly is the clean, fast, and organized way to manage your most important ideas.
                </p>

                <Link href="/notes">
                    <Button size="lg" className="bg-[#A590DB] hover:bg-[#9582C5] active:bg-[#8473AF]">
                        Take Notes Now
                    </Button>
                </Link>

                <div className="w-full max-w-5xl mx-auto">
                    <div className="h-128 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden relative">
                        <Image
                            src="/hero-desktop.png"
                            alt="Hero Image"
                            height={1440}
                            width={1024}
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 space-y-10">
                <h2 className="text-4xl font-extrabold opacity-90 text-center">
                    Features That Make Ideas Stick
                </h2>

                <div className="grid md:grid-cols-3 gap-4 md:gap-10 justify-center">
                    {/* Feature Card 1: Instant Capture */}
                    <FeatureCard
                        icon={Zap}
                        title="Instant Capture"
                        description="Quickly jot down ideas with our lightning-fast note editor, designed for speed and simplicity."
                    />

                    {/* Feature Card 2: Powerful Organization */}
                    <FeatureCard
                        icon={Folder}
                        title="Powerful Organization"
                        description="Use smart tags, link related notes, and easily search your entire knowledge base."
                    />
                    

                    {/* Feature Card 3: Seamless Sync */}
                    <FeatureCard
                        icon={Cloud}
                        title="Cross-Device Sync"
                        description="Your notes are always with you. Access and edit from your phone, tablet, or desktop."
                    />
                </div>
            </section>

            {/* Call to Action Section */}
            <section id="cta" className="py-20 my-10 bg-[#F4F2FF] rounded-xl">
                <div className="text-center max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-extrabold opacity-90 mb-4">
                        Ready to Get Notedly Organized?
                    </h2>
                    <p className="text-lg opacity-60 mb-8">
                        Start instantly capturing and organizing your thoughts. No sign-up pressure—just start writing.
                    </p>
                    <Link href="/notes">
                        <Button size="lg" className="text-xl font-medium bg-[#A590DB] hover:bg-[#9582C5] active:bg-[#8473AF] shadow-xl">
                            Start Taking Notes Now
                        </Button>
                    </Link>
                </div>
            </section>
            
            {/* Footer - Minimalist */}
            <footer className="py-8 text-center text-sm opacity-50 border-t border-opacity-10 mt-10">
                &copy; {new Date().getFullYear()} Notedly, Inc. | Privacy Policy | Terms of Service
            </footer>
        </main>
    )
}