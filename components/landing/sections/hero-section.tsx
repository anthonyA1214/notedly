"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Zap } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SectionHero() {
  return (
    <section
      id=""
      className="flex flex-col items-center justify-center min-h-screen pt-16 md:pt-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 justify-center">
        <div className="flex flex-col gap-8">
          {/* Section Badge */}
          <div className="flex items-center text-sm gap-2 bg-[#A590DB]/10 text-[#A590DB] w-fit py-1.5 px-3 rounded-2xl">
            <Zap className="w-[1em]" />
            <span>Trusted by 50,000+ users worldwide</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold">
            Your Brain&apos;s
            <span className="block text-[#A590DB]">Best Friend</span>
          </h1>

          <p className="text-base md:text-lg max-w-xl">
            Capture ideas instantly, organize effortlessly, and find anything in
            seconds. Notedly transforms the way you think, work, and create.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
            <button
              className="flex items-center justify-center gap-2 bg-[#A590DB] hover:bg-[#9582C5] active:bg-[#8473AF] 
              text-white px-10 py-3 md:py-4 rounded-2xl text-base sm:text-lg
                hover:shadow-xl hover:scale-105 transition duration-200 font-medium"
            >
              Start Free Trial <ArrowRight className="w-[1em]" />
            </button>
            <button
              className="flex items-center justify-center gap-2 bg-transparent border-2 
              hover:border-[#9582C5] hover:text-[#9582C5] active:border-[#8473AF] active:text-[#8473AF]
              px-10 py-3 md:py-4 rounded-2xl text-base sm:text-lg font-medium transition duration-200"
            >
              Watch Demo
            </button>
          </div>

          <div className="flex flex-row items-center gap-4">
            {/* Avatars */}
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
              <Avatar>
                <AvatarImage
                  src="https://res.cloudinary.com/digauizkr/image/upload/v1763869159/IMG20241214131213_bdkpa8.jpg"
                  alt="@anthonyA1214"
                />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://res.cloudinary.com/digauizkr/image/upload/v1763869063/main-sample.png"
                  alt="@mainsample"
                />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://res.cloudinary.com/digauizkr/image/upload/v1763869056/samples/man-on-a-escalator.jpg"
                  alt="@manonaescalator"
                />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://res.cloudinary.com/digauizkr/image/upload/v1763869039/samples/animals/cat.jpg"
                  alt="@cat"
                />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex flex-col gap-1 text-sm">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-[1.2em]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                ))}
              </div>
              <span>4.9/5 from 2,500+ reviews</span>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="w-full relative">
          <motion.div
            className="absolute top-1/2 -left-5 md:-left-10 -translate-y-1/2"
            animate={{
              y: [0, -10, 0], // float up and down
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <div className="bg-white shadow-2xl px-6 py-4 rounded-2xl border flex items-center gap-4">
              <Check className="text-green-500 w-[1em]" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Note Saved</span>
                <span className="text-xs text-muted-foreground">
                  2 seconds ago
                </span>
              </div>
            </div>
          </motion.div>

          <div className="w-full flex justify-center md:justify-end">
            <Image
              src="/hero-desktop.png"
              alt="Hero"
              width={1440}
              height={1024}
              className="w-full max-w-md md:max-w-none object-cover shadow-2xl rounded-2xl border"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
