import axios from "axios";
import fallbackQuotes from "@/lib/data/fallbackQuotes.json";
import { Quote } from "@/lib/types/quote";

const QUOTABLE_API = "https://quotable-api.up.railway.app";

export async function getRandomQuote(): Promise<Quote> {
  try {
    const response = await axios.get(`${QUOTABLE_API}/random`);

    // Destructure to ensure only needed fields are returned
    const { content, author } = response.data;

    return { content, author };
  } catch (error) {
    console.warn(
      "Quotable API down or URL wrong, using fallback quote.",
      error,
    );

    // Return a random quote from the fallback data
    return fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
  }
}
