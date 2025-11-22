import { Quote } from "@/lib/types/quote";

export default function QuoteCard({ quote }: { quote: Quote }) {
    return (
        <div 
        className="
        flex flex-col gap-3 md:gap-4 bg-white rounded-2xl p-4 md:p-6 shadow-md 
        w-full
        min-h-[100px] sm:min-h-[120px] md:min-h-[150px]"
        >
            <blockquote className="italic text-sm sm:text-base md:text-lg lg:text-xl">
                &quot;{quote.content}&quot;
            </blockquote>

            <p className="text-xs sm:text-sm md:text-base opacity-50 mt-auto">
                — {quote.author}
            </p>
        </div>
    )
}