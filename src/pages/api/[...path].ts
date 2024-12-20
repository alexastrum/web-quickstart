import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = ({ params, request }) => {
  return new Response(JSON.stringify({ path: params.path }));
};

export const POST: APIRoute = async ({ params, request }) => {
  return new Response(
    JSON.stringify({ data: await request.json(), path: params.path })
  );
};
