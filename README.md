# web-quickstart

Multi-agent infrastrucure quickstart for 2025 web apps.

## Supported IDEs

- Project IDX
  - [ ] Open in IDX button
  - [ ] Terraform for Firebase / Google Cloud
- Cursor
- VS Code
- Zed

## Stack

- Astro 5 (server islands & actions, middleware, mdx)
- Tailwind, tailwindcss-typography, tailwindcss-animate, tailwindcss-motion
- React
- shadcn, [Lucide icons](https://lucide.dev)
- Hono (zod OpenAPI, Swagger UI)
- Genkit 1.0 (zod, [dotprompt](https://handlebarsjs.com/guide))
- [ ] Firebase AI Monitoring
- [ ] Drizzle with Postgres

TODO:

- [ ] framer motion
- [ ] MCP
- [ ] vertex-ai
- [ ] lite-llm
- [ ] posthog (for session recording)
- [ ] nanostores

Alternatives:

- https://opensaas.sh - excellent sull-stack SaaS starter, Prisma (instead of Drizzle), TailAdmin (instead of Shadcn), uses own `.wasp` language for configurations
- https://github.com/fogbender/b2b-saaskit - great opinated choices, not active in the last 6 months

### Libs that I'd like to use, but are not yet supported

#### tailwindcss-intersect

Uses `document.querySelectorAll` and `setAttribute`, making it incompatible with React.

Error: https://react.dev/link/hydration-mismatch

## Local Development

### Recommended environment

- MacOS on Apple Silicon
- Zed with Google AI API key

```bash
# Install dev tools
brew install --cask ghostty
brew install --cask zed

# Install node.js
brew install nvm
nvm install 22
corepack enable
```

### Running

```bash
nvm use 22
pnpm install
pnpm dev
```

### Testing

```bash
pnpm build
pnpm preview
```

### Deployment on Firebase

See https://docs.astro.build/en/guides/deploy/google-firebase

TODO:

- [ ] Firebase App Hosting support

### Deployment on Netlify

```bash
pnpm astro add netlify
```

Update `astro.config.mjs`:

```ts
import netlify from "@astrojs/netlify";

// ...

export default defineConfig({
  adapter: netlify(),
  // ...
});
```

Configure Netlify GitHub integration.
