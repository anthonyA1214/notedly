import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  subtitle?: string;
  price: string;
  priceSuffix?: string;
  buttonLabel: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({
  title,
  subtitle,
  price,
  priceSuffix,
  buttonLabel,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col bg-white p-6 sm:p-8 md:p-10 rounded-2xl border",
        "hover:border-[#9582C5] transition duration-200 gap-6 md:gap-8 relative",
        highlighted && "border-[#9582C5] scale-105 shadow-xl"
      )}
    >
      {highlighted && (
        <div className="absolute top-0 text-white rounded-2xl bg-[#9582C5] left-1/2 -translate-1/2 px-4 py-1">
          Most Popular
        </div>
      )}

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>

      <div>
        <span className="text-4xl sm:text-5xl md:text-6xl font-bold">
          {price}
        </span>
        {priceSuffix && (
          <span className="text-muted-foreground text-sm sm:text-base">
            {priceSuffix}
          </span>
        )}
      </div>

      <button
        className={cn(
          "w-full py-3 md:py-4 text-sm sm:text-base rounded-2xl font-medium transition duration-200",
          highlighted
            ? "text-white bg-[#A590DB] hover:bg-[#9582C5] active:bg-[#8473AF] border-0"
            : "hover:border-[#9582C5] hover:text-[#9582C5] border-2"
        )}
      >
        {buttonLabel}
      </button>

      <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base">
        {features.map((feature, i) => (
          <li key={i} className="flex gap-2 text-muted-foreground">
            <Check className="w-[1em] text-[#A590DB]" /> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
