import { Heart } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

const productLinks = [
  "Features",
  "Pricing",
  "Security",
  "Roadmap",
  "Changelog",
];

const companyLinks = ["About Us", "Blog", "Careers", "Press Kit", "Contact"];

const resourcesLinks = [
  "Help Center",
  "Tutorials",
  "API Docs",
  "Community",
  "Status",
];

const legalLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
  "GDPR",
];

export default function Footer() {
  return (
    <footer className="py-16 text-white bg-[#101828]">
      <div className="mx-auto max-w-356">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
          {/* Logo, taglines and social */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Notedly Logo"
                width={48}
                height={48}
              />
              <h1 className="font-figtree font-medium text-lg">Notedly</h1>
            </div>

            <span className="text-sm text-muted-foreground">
              Your brain&apos;s best friend for capturing and organizing ideas.
            </span>

            <div className="flex items-center gap-3">
              {/* github */}
              <a href="https://github.com/anthonyA1214" target="_blank">
                <button className="p-2 bg-white/10 hover:bg-[#9582C5] rounded-2xl text-2xl transition duration-200">
                  <FaGithub className="w-[1em]" />
                </button>
              </a>
              {/* linkedin */}
              <a
                href="https://www.linkedin.com/in/anthony-amiluddin-351100273/"
                target="_blank"
              >
                <button className="p-2 bg-white/10 hover:bg-[#9582C5] rounded-2xl text-2xl transition duration-200">
                  <FaLinkedin className="w-[1em]" />
                </button>
              </a>
              {/* instagram */}
              <a href="https://www.instagram.com/itznthny/" target="_blank">
                <button className="p-2 bg-white/10 hover:bg-[#9582C5] rounded-2xl text-2xl transition duration-200">
                  <FaInstagram className="w-[1em]" />
                </button>
              </a>
            </div>
          </div>

          {/* products */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-xl">Product</h3>
            <ul className="flex flex-col text-sm text-muted-foreground gap-3">
              {productLinks.map((product, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#9582C5] active:text-[#8473AF] transition duration-200"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* company */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-xl">Company</h3>
            <ul className="flex flex-col text-sm text-muted-foreground gap-3">
              {companyLinks.map((company, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#9582C5] active:text-[#8473AF] transition duration-200"
                  >
                    {company}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* resources */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-xl">Resources</h3>
            <ul className="flex flex-col text-sm text-muted-foreground gap-3">
              {resourcesLinks.map((resource, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#9582C5] active:text-[#8473AF] transition duration-200"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* legal */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-xl">Legal</h3>
            <ul className="flex flex-col text-sm text-muted-foreground gap-3">
              {legalLinks.map((legal, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#9582C5] active:text-[#8473AF] transition duration-200"
                  >
                    {legal}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-muted-foreground" />

        <div className="text-center grid gap-1">
          <p className="text-sm text-muted-foreground">
            Everything on this landing page is for practice only. The working
            app is available on the other page.
          </p>

          <span className="flex items-center gap-2 justify-center">
            Made with <Heart className="inline-block w-4 h-4 text-red-500" /> by
            anthonyA1214
          </span>
          <span>
            &copy; 2025 <strong>anthonyA1214</strong> | All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
