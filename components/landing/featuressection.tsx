import FeatureCard from "@/components/landing/featurecard";
import { Cloud, FileText, Search, Shield, UsersRound, Zap } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description:
            "Capture thoughts instantly with our blazing-fast editor. No lag, no wait—just pure productivity.",
    },
    {
        icon: Search,
        title: "Powerful Search",
        description:
            "Find anything in milliseconds with advanced search. Filter by tags, dates, or keywords effortlessly.",
    },
    {
        icon: Cloud,
        title: "Cloud Sync",
        description:
            "Access your notes from any device. Everything stays in sync automatically, wherever you are.",
    },
    {
        icon: Shield,
        title: "End-to-End Encryption",
        description:
            "Your privacy is paramount. All notes are encrypted with bank-level security standards.",
    },
    {
        icon: FileText,
        title: "Rich Formatting",
        description:
            "Beautiful markdown support, code blocks, tables, and more. Express ideas your way.",
    },
    {
        icon: UsersRound,
        title: "Team Collaboration",
        description:
            "Share notebooks and collaborate in real-time with your team. Perfect for group projects.",
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="flex flex-col items-center justify-center min-h-screen scroll-mt-16 gap-12">
            <div className="flex flex-col gap-6 items-center text-center">
                {/* Section Badge */}
                <div className="flex items-center bg-[#A590DB]/10 w-fit py-1.5 px-3 rounded-2xl">
                    <span className="text-base text-[#A590DB]">Features</span>
                </div>

                <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                    Everything You Need to Stay Organized
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
                    Powerful features designed to help you capture, organize, and find your ideas effortlessly.
                </p>         
            </div>   

            {/* Features Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
                {features.map((feature, i) => (
                    <FeatureCard key={i} {...feature} />
                ))}
            </div>  
        </section>
    )
}