import { gemini20FlashExp, googleAI } from "@genkit-ai/googleai";
import { genkit } from "genkit";

export const ai = genkit({
  plugins: [googleAI({ apiKey: import.meta.env.GOOGLE_GENAI_API_KEY })],
  model: gemini20FlashExp,
});
