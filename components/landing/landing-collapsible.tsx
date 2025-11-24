"use client";

import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Features", url: "#features" },
  { label: "How It Works", url: "#how-it-works" },
  { label: "Testimonials", url: "#testimonials" },
  { label: "Pricing", url: "#pricing" },
];

export default function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="flex items-center justify-center md:hidden"
    >
      <CollapsibleTrigger>
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.div
              key="x"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <X />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <Menu />
            </motion.div>
          )}
        </AnimatePresence>
      </CollapsibleTrigger>

      {/* Mobile Menu */}
      <CollapsibleContent className="absolute left-0 top-16 w-full bg-[#F2F3F5] h-screen shadow-md border-t">
        <div className="flex flex-col p-6 gap-4 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.url}
              onClick={() => setOpen(false)}
              className="hover:text-[#9582C5]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
