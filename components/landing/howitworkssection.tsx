const steps = [
    {
        number: "01",
        title: "Create Your Account",
        description:
            "Sign up in seconds and start with a clean slate. No credit card required for the free plan.",
    },
    {
        number: "02",
        title: "Capture Your Ideas",
        description:
            "Use our lightning-fast editor to jot down thoughts, tasks, and inspirations instantly.",
    },
    {
        number: "03",
        title: "Organize & Tag",
        description:
            "Create notebooks, add tags, and link related notes to build your knowledge base.",
    },
    {
        number: "04",
        title: "Find Anything Fast",
        description:
            "Use powerful search to instantly find any note, no matter when you created it.",
    },
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="flex flex-col items-center justify-center min-h-screen scroll-mt-16 gap-12">
            <div className="flex flex-col gap-6 items-center text-center">
                {/* Section Badge */}
                <div className="flex items-center bg-[#A590DB]/10 w-fit py-1.5 px-3 rounded-2xl">
                    <span className="text-base text-[#A590DB]">How It Works</span>
                </div>

                <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                    Get Started in Minutes
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
                    From idea to organized knowledge in four simple steps.
                </p>         
            </div>   

        </section>
    )
}