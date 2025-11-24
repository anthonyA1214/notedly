import HeroSection from "@/components/landing/sections/hero-section";
import StatsCard from "@/components/landing/stats-card";
import FeaturesSection from "@/components/landing/sections/features-section";
import HowItWorksSection from "@/components/landing/sections/how-it-works-section";
import TestimonialsSection from "@/components/landing/sections/testimonials-section";
import PricingSection from "@/components/landing/sections/pricing-section";
import CallToActionSection from "@/components/landing/sections/cta-section";
export default function Page() {
  return (
    <>
      <div className="flex flex-col max-w-356 mx-auto px-4 py-8 md:py-0">
        <HeroSection />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 py-20">
          <StatsCard stat="50K+" label="Active Users" />
          <StatsCard stat="1M+" label="Note Created" />
          <StatsCard stat="99.9%" label="Uptime" />
          <StatsCard stat="4.9/5" label="User Rating" />
        </div>

        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
      </div>
      <CallToActionSection />
    </>
  );
}
