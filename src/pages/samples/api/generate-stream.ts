// import the Genkit and Google AI plugin libraries
import { gemini15Flash, googleAI } from "@genkit-ai/googleai";
import type { APIRoute } from "astro";
import { genkit } from "genkit";

// do not prerender this page during build time
export const prerender = false;

// configure a Genkit instance
const ai = genkit({
  plugins: [googleAI({ apiKey: import.meta.env.GOOGLE_GENAI_API_KEY })],
  model: gemini15Flash, // set default model
});

export const GET: APIRoute = async ({ request }) => {
  // make a generation request
  const { stream } = await ai.generateStream("Hello, Gemini!");

  const readableStream = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        controller.enqueue(chunk.text);
      }
      controller.close();
    },
  });
  return new Response(readableStream);
};
