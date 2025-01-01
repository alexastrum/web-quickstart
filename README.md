# web-quickstart

Multi-agent infrastrucure quickstart for 2025 web apps.

## Supported IDEs

- Project IDX
- Cursor
- VS Code

## Stack

- astro 5 (server islands, mdx)
- tailwind, tailwindcss-typography, tailwindcss-animate, tailwindcss-motion
- react
- shadcn, [lucide icons](https://lucide.dev)
- genkit 1.0 (zod, [dotprompt](https://handlebarsjs.com/guide))

- framer motion,
- MCP, vertex-ai + open-ai (lite-llm)
- hono (zod)
- drizzle,
- nanostores.

### Libs that I'd like to use, but are not yet supported

#### tailwindcss-intersect

Uses `document.querySelectorAll` and `setAttribute`, making it incompatible with React.

Error: https://react.dev/link/hydration-mismatch

## Local Development

```bash
pnpm install
pnpm dev
```
