import TestimonialCard from "@/components/landing/testimonial-card";

export const testimonials = [
  {
    text: "Notedly has completely transformed how I manage my research. The search feature is a game-changer!",
    name: "Sarah Chen",
    role: "PhD Student",
    avatar:
      "https://res.cloudinary.com/dwzkcr313/image/upload/v1763979713/samples/outdoor-woman.jpg",
  },
  {
    text: "As a writer, I need to capture ideas fast. Notedly is the fastest, cleanest notes app I've ever used.",
    name: "Marcus Rodriguez",
    role: "Content Creator",
    avatar:
      "https://res.cloudinary.com/dwzkcr313/image/upload/v1763979701/samples/animals/reindeer.jpg",
  },
  {
    text: "My team loves the collaboration features. We've ditched three other tools and consolidated everything here.",
    name: "Emily Thompson",
    role: "Product Manager",
    avatar:
      "https://res.cloudinary.com/dwzkcr313/image/upload/v1763979703/samples/bike.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center py-20 gap-12"
    >
      <div className="flex flex-col gap-6 items-center text-center">
        {/* Section Badge */}
        <div className="flex items-center bg-[#A590DB]/10 w-fit py-1.5 px-3 rounded-2xl">
          <span className="text-base text-[#A590DB]">Testimonials</span>
        </div>

        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
          Loved by Thousands of Users
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
          See what our community has to say about their Notedly experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard key={i} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
