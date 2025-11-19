import { Quote } from "@/lib/types/quote";

export default function QuoteCard({ quote }: { quote: Quote }) {
    return (
        <div 
        className="
        flex flex-col gap-4 bg-white rounded-lg p-6 shadow-md 
        w-full
        min-h-[120px] sm:min-h-[150px] md:min-h-[175px]
        max-h-[180px] md:max-h-[220px]"
        >
            <blockquote className="italic text-base sm:text-lg md:text-xl line-clamp-3">
                “{quote.content}”
            </blockquote>

            <p className="text-sm sm:text-base md:text-lg opacity-50 mt-auto">
                — {quote.author}
            </p>
        </div>
    )
}