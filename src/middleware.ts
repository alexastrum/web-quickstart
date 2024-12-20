import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = (context, next) => {
  // intercept data from a request
  // optionally, modify the properties in `locals`
  context.locals.foo = "Bar";

  // return a Response or the result of calling `next()`
  return next();
};
