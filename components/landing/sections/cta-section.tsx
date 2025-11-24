import { ArrowRight } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section
      id="features"
      className="flex justify-center items-center py-20 bg-[#A590DB]"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-center text-white max-w-2xl">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
            Ready to Transform Your Note-Taking?
          </h2>

          <p className="text-base sm:text-lg md:text-xl">
            Powerful features designed to help you capture, organize, and find
            your ideas effortlessly.
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <button
            className="flex items-center justify-center gap-2 text-[#A590DB] bg-white px-10 py-4 rounded-2xl text-lg
          hover:shadow-xl hover:scale-105 transition duration-200 font-medium"
          >
            Start Your Free Trial <ArrowRight className="w-[1em]" />
          </button>

          <button
            className="flex items-center justify-center gap-2 bg-transparent border-2 border-white 
          px-10 py-4 rounded-2xl text-lg hover:bg-white/10 font-medium transition duration-200"
          >
            Watch Demo
          </button>
        </div>

        <span className="text-sm">
          No credit card required • 14-day free trial • Cancel anytime
        </span>
      </div>
    </section>
  );
}
