"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AnimatedCallToAction() {
    return (
        <motion.section
            id="cta"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="py-16 bg-[#F4F2FF] rounded-xl"
        >
            <div className="text-center max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold opacity-90 mb-4">
                    Ready to Get Notedly Organized?
                </h2>

                <p className="text-lg opacity-60 mb-8">
                    Start instantly capturing and organizing your thoughts.
                </p>

                <Link href="/notes">
                    <Button size="lg" className="bg-[#A590DB] text-xl shadow-xl">
                        Start Taking Notes Now
                    </Button>
                </Link>
            </div>
        </motion.section>
    );
}
