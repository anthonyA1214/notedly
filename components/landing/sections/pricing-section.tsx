import PricingCard from "@/components/landing/pricing-card";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center py-20 gap-12"
    >
      <div className="flex flex-col gap-6 items-center text-center">
        {/* Section Badge */}
        <div className="flex items-center bg-[#A590DB]/10 w-fit py-1.5 px-3 rounded-2xl">
          <span className="text-base text-[#A590DB]">Pricing</span>
        </div>

        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
          Simple, Transparent Pricing
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
          Choose the perfect plan for your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-14 md:gap-16">
        <PricingCard
          title="Free"
          subtitle="Perfect for personal use"
          price="$0"
          priceSuffix="/ forever"
          buttonLabel="Get Started"
          features={[
            "Unlimited notes",
            "Up to 3 notebooks",
            "Basic search",
            "Mobile & desktop apps",
            "Cloud sync",
          ]}
        />

        <PricingCard
          title="Pro"
          subtitle="For power users and professionals"
          price="$9"
          priceSuffix="/ per month"
          buttonLabel="Start Free Trial"
          highlighted
          features={[
            "Everything in Free",
            "Unlimited notebooks",
            "Advanced search & filters",
            "Team collaboration (up to 5)",
            "Priority support",
            "Version history",
            "Custom tags & templates",
          ]}
        />

        <PricingCard
          title="Team"
          subtitle="Built for teams that work together"
          price="$29"
          priceSuffix="/ per month"
          buttonLabel="Contact Sales"
          features={[
            "Everything in Pro",
            "Unlimited team members",
            "Shared team workspaces",
            "Advanced permissions",
            "Admin dashboard",
            "API access",
            "Dedicated support",
          ]}
        />
      </div>
    </section>
  );
}
