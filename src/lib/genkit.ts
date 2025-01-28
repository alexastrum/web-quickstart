import { gemini20FlashExp, googleAI } from "@genkit-ai/googleai";
import { genkit } from "genkit";
import { logger } from "genkit/logging";

// Set the desired log level
logger.setLogLevel("debug");

export const ai = genkit({
  plugins: [googleAI({ apiKey: import.meta.env.GOOGLE_GENAI_API_KEY })],
  model: gemini20FlashExp,
});
