import { getRandomQuote } from "@/lib/services/quotes";
import QuoteCard from "@/components/notes/quote-card";

export default async function QuoteCardServer() {
  const quote = await getRandomQuote();
  return <QuoteCard quote={quote} />;
}
