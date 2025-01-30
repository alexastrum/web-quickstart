import { GenkitMetric } from "@genkit-ai/evaluator";
import genkitEval from "@genkit-ai/evaluator";
import { gemini15Flash, googleAI, textEmbedding004 } from "@genkit-ai/googleai";
import { genkit } from "genkit";
import { logger } from "genkit/logging";

// Set the desired log level
logger.setLogLevel("debug");

export const ai = genkit({
  plugins: [
    googleAI({ apiKey: import.meta.env.GOOGLE_GENAI_API_KEY }),
    genkitEval({
      judge: gemini15Flash,
      metrics: [
        GenkitMetric.ANSWER_RELEVANCY,
        GenkitMetric.MALICIOUSNESS,
        GenkitMetric.FAITHFULNESS,
      ],
      embedder: textEmbedding004,
    }),
  ],
  model: gemini15Flash,
});
