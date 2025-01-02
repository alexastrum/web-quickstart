import { z } from "@hono/zod-openapi";
import { createRoute } from "@hono/zod-openapi";
import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import type { APIContext, APIRoute } from "astro";

export const prerender = false;

const PATH_PREFIX = "/samples/api";

const ParamsSchema = z.object({
  id: z
    .string()
    .min(3)
    .openapi({
      param: {
        name: "id",
        in: "path",
      },
      example: "1212121",
    }),
});

const UserSchema = z
  .object({
    id: z.string().openapi({
      example: "123",
    }),
    name: z.string().openapi({
      example: "John Doe",
    }),
    age: z.number().openapi({
      example: 42,
    }),
  })
  .openapi("User");

const route = createRoute({
  method: "post",
  path: `${PATH_PREFIX}/users/{id}`,
  request: {
    params: ParamsSchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: UserSchema,
        },
      },
      description: "Retrieve the user",
    },
  },
});

// Map Astro's current APIContext to Hono's `context.env`
const app = new OpenAPIHono<{ Bindings: APIContext }>();

app.openapi(route, (c) => {
  const { id } = c.req.valid("param");
  return c.json({
    id,
    age: 20,
    name: "Ultra-man",
  });
});

// The OpenAPI documentation will be available at /doc
app.doc(`${PATH_PREFIX}/doc`, {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

app.get(`${PATH_PREFIX}`, swaggerUI({ url: `${PATH_PREFIX}/doc` }));

export const GET: APIRoute = (c) => app.fetch(c.request, c);
export const POST: APIRoute = (c) => app.fetch(c.request, c);
