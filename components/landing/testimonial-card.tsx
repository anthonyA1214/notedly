import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
  avatar?: string;
}

export default function TestimonialCard({
  text,
  name,
  role,
  avatar,
}: TestimonialCardProps) {
  return (
    <div
      className="flex flex-col gap-4 p-6 sm:p-8 md:p-10 bg-white 
    rounded-2xl border hover:shadow-xl transition-shadow duration-200 max-w-full sm:max-w-md md:max-w-lg mx-auto"
    >
      {/* Quote icon */}
      <Quote className="text-[#A590DB]/25 w-8 h-8 sm:w-10 sm:h-10" />

      {/* Stars */}
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[1.2em]"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ))}
      </div>

      <p className="text-sm sm:text-base md:text-lg">{text}</p>

      <div className="flex items-center gap-3 sm:gap-4">
        <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <span className="text-sm sm:text-base font-medium">{name}</span>
          <span className="text-xs sm:text-sm text-muted-foreground">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}
