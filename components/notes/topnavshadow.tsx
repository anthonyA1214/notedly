"use client";

import { useEffect } from "react";

export default function TopNavShadow() {
    useEffect(() => {
        const topNav = document.getElementById("top-nav");
        if (!topNav) return;

        const handleScroll = () => {
            if (window.scrollY > 0) {
                topNav.classList.add("shadow-md");
            } else {
                topNav.classList.remove("shadow-md");
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll(); // Initial check

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return null;
}