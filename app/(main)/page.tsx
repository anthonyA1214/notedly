import HeroSection from '@/components/landing/herosection';
import StatsCard from '@/components/landing/statscard';
import FeaturesSection from '@/components/landing/featuressection';
import HowItWorksSection from '@/components/landing/howitworkssection';

export default function Page() {
    return (
        <div className="flex flex-col gap-12 max-w-356 mx-auto py-4 px-6">
            <HeroSection />    

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                <StatsCard stat="50K+" label="Active Users"/>
                <StatsCard stat="1M+" label="Note Created"/>
                <StatsCard stat="99.9%" label="Uptime"/>
                <StatsCard stat="4.9/5" label="User Rating"/>
            </div> 

            <FeaturesSection />
            <HowItWorksSection />
        </div>
    )
}