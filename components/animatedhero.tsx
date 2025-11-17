"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedHero() {
    return (
        <section id="hero" className="py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Hero Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center lg:text-left space-y-6"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold opacity-90 tracking-tighter">
                        Capture Every Thought. <span className="text-[#A590DB]">Instantly.</span>
                    </h1>

                    <p className="text-lg md:text-xl opacity-60 mx-auto">
                        Notedly is the clean, fast, and organized way to manage your most important ideas.
                    </p>

                    <Link href="/notes">
                        <Button size="lg" className="shadow-xl py-3 px-8 rounded-xl text-xl bg-[#A590DB] hover:bg-[#9582C5]">
                            Take Notes Now
                        </Button>
                    </Link>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full"
                >
                    <div className="bg-white h-full rounded-xl shadow-2xl overflow-hidden relative border border-gray-100">
                        <Image
                            src="/hero-desktop.png"
                            alt="Hero"
                            width={1440}
                            height={1024}
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}