import { Figtree, Montserrat } from "next/font/google";

export const figtree = Figtree({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-figtree",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});
