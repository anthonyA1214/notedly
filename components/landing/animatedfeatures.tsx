"use client";

import FeatureCard from "@/components/landing/featurecard";
import { Zap, Folder, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export default function AnimatedFeatures() {
    const features = [
        {
            icon: Zap,
            title: "Instant Capture",
            description: "Quickly jot down ideas with our lightning-fast note editor.",
        },
        {
            icon: Folder,
            title: "Powerful Organization",
            description: "Use smart tags, link notes, and search everything instantly.",
        },
        {
            icon: Cloud,
            title: "Cross-Device Sync",
            description: "Your notes stay synced across phone, tablet, and desktop.",
        },
    ];

    return (
        <section id="features" className="space-y-10 py-12">
            <h2 className="text-4xl font-extrabold opacity-90 text-center">
                Features That Make Ideas Stick
            </h2>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { staggerChildren: 0.25 },
                    },
                }}
                className="grid md:grid-cols-3 gap-4 md:gap-10"
            >
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        <FeatureCard {...f} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
