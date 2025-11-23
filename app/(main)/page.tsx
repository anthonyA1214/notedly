import SectionHero from '@/components/landing/sectionhero';
import AnimatedFeatures from '@/components/landing/animatedfeatures';
import AnimatedCallToAction from '@/components/landing/animatedcalltoaction';

export default function Page() {
    return (
        <div className="flex flex-col gap-y-14 md:gap-y-20 max-w-356 mx-auto py-4 px-6">
            <SectionHero />     
            <AnimatedFeatures />
            <AnimatedCallToAction />
        </div>
    )
}