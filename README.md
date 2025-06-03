# web-quickstart

Multi-agent infrastrucure quickstart for 2025 web apps.

## Core Concepts

This project serves as a multi-agent infrastructure quickstart, designed to accelerate the development of modern web applications incorporating generative AI features. It provides a curated stack and boilerplate for building applications that leverage language models and other AI capabilities.

The architecture integrates several key technologies:
- **Astro:** Used as the frontend framework for building content-rich websites with server-side components (islands) and static site generation capabilities. It also handles routing and API endpoints.
- **React:** Employed for creating dynamic UI components within Astro pages.
- **Hono:** Powers the backend API, offering a lightweight and fast routing solution, often used in conjunction with Astro's API routes. It facilitates features like Zod-based validation and OpenAPI spec generation.
- **Genkit:** Provides the framework for building and orchestrating AI flows. It allows developers to define, run, and monitor AI-powered features, integrating with models like Google's Gemini.
- **Tailwind CSS:** Used for styling the application with a utility-first CSS framework.

## Key Features

### Genkit Integration
Genkit is integrated to power AI flows within the application.
- **Setup:** Configuration can be found in `src/lib/genkit.ts`. This is where plugins (like Google AI) are initialized and flows can be defined.
- **Defining Flows:** Flows are JavaScript/TypeScript functions decorated with Genkit's `@flow` decorator. They can incorporate calls to language models, data processing steps, and other logic. (Example: A simple flow might take user input, call a language model, and return the generated text).
- **Using Flows:**
    - **From Astro Pages/Components:** Genkit flows can be invoked directly from server-side Astro code (e.g., within `.astro` files or server components).
    - **As API Endpoints:** Genkit flows can be exposed as API endpoints. The `startGenkit()` function in `src/actions/index.ts` (if present, or a similar setup) often handles this, making flows accessible via HTTP requests. Check `src/pages/api/` for examples of how Genkit flows might be exposed or called by Hono routes.
- **Evaluation:** Genkit includes tools for evaluating the performance and quality of your flows. Datasets for evaluation can be created (e.g., `data-samples/genkit/myFactsQaDatset.jsonl`) and evaluators can be run using the Genkit CLI.

### Astro Components
The project utilizes Astro for its component-based architecture, allowing for both static and dynamic content.
- **Location:** Custom components are primarily located in `src/components/`. This includes:
    - UI elements (e.g., `src/components/ui/button.tsx` based on shadcn).
    - Sample components (`src/components/samples/`) demonstrating different Astro features like client-side interactivity with React (`HelloButton.tsx`) or server-only rendering (`ServerComponent.astro`).
- **Usage:** Components are imported and used within Astro pages (`src/pages/`) or other components using standard Astro/JSX syntax. Astro's island architecture allows for selective client-side hydration of React components.

### Hono API
Hono is used for creating backend API routes, providing a fast and lightweight solution.
- **Location:** API routes are typically defined in `src/pages/api/`. Astro's file-based routing maps files in this directory to API endpoints.
- **Defining Routes:** Hono applications are instantiated, and routes (e.g., GET, POST) are defined using Hono's routing methods.
- **Validation & OpenAPI:** The `@hono/zod-openapi` library can be used to define request/response schemas with Zod and automatically generate OpenAPI (Swagger) documentation for your API. This is often set up in a central API file or per route. Check for a Swagger UI endpoint (e.g., `/api/swagger-ui`).

## Supported IDEs

- Project IDX
  - [ ] Open in IDX button
  - [ ] Terraform for Firebase / Google Cloud
- Cursor
- VS Code
- Zed

## Stack

- Astro 5 (server islands & actions, middleware, mdx)
- Tailwind CSS (including tailwindcss-typography, tailwindcss-animate, tailwindcss-motion)
- React
- shadcn UI, [Lucide icons](https://lucide.dev)
- Hono (Zod OpenAPI, Swagger UI)
- Genkit 1.x (Zod for schemas, [dotprompt](https://handlebarsjs.com/guide) for prompts)
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
- Zed with Google AI API key (for running Genkit flows that require it)

```bash
# Install dev tools
brew install --cask ghostty
brew install --cask zed

# Install node.js (Node 20.x LTS recommended)
brew install nvm
nvm install 20
nvm use 20
corepack enable
```

### Running

```bash
# Ensure you are using the correct Node.js version
nvm use 20 # Or your preferred method to activate Node 20.x

pnpm install
pnpm dev
```

### Testing

```bash
pnpm build
# Note: If your project includes Genkit flows that call external AI services (e.g., Google Gemini),
# ensure the necessary API keys (e.g., GEMINI_API_KEY) are set in your environment
# for the build process to complete successfully, especially during pre-rendering.

pnpm preview
```

### Deployment on Firebase

This section covers traditional Firebase Hosting. For deploying dynamic SSR applications, see Firebase App Hosting below.
See https://docs.astro.build/en/guides/deploy/google-firebase for deploying static sites to Firebase Hosting.

### Firebase App Hosting

Firebase App Hosting is designed for deploying modern web applications, including those built with Astro that require server-side rendering.

1.  **Prerequisites:**
    *   Ensure you have the Firebase CLI installed: `npm install -g firebase-tools`.
    *   Log in to Firebase: `firebase login`.
    *   Your Firebase project should be on the Blaze pricing plan.

2.  **Astro Configuration for SSR:**
    *   Ensure your `astro.config.mjs` is configured for server-side rendering with the Node.js adapter:
        ```javascript
        import { defineConfig } from 'astro/config';
        import node from '@astrojs/node';

        export default defineConfig({
          output: 'server',
          adapter: node({
            mode: 'standalone'
          }),
          // ... other configurations
        });
        ```
    *   Verify you have `@astrojs/node` installed as a dependency.

3.  **Initialize App Hosting:**
    *   In your project root, run: `firebase init apphosting`
    *   Follow the prompts. This will help you connect your GitHub repository and set up a backend resource in Firebase for App Hosting. It typically creates or updates `firebase.json` and may create other configuration files.

4.  **Build your application:**
    *   `pnpm build`
    *   As noted in the "Testing" section, ensure any necessary API keys (e.g., `GEMINI_API_KEY`) are available in your environment if your build process or server-side logic calls Genkit flows or other services requiring them. Firebase App Hosting provides mechanisms to securely store and access secrets like API keys.

5.  **Deploy:**
    *   Deploy your application using the Firebase CLI:
        ```bash
        firebase deploy --only apphosting
        ```
    *   If you have multiple App Hosting backends, you might need to specify the target: `firebase deploy --only apphosting:your-backend-id`.

6.  **Environment Variables & Secrets:**
    *   For API keys and other sensitive data, use Firebase App Hosting's integration with Cloud Secret Manager. Configure these in the Firebase console or via CLI options during setup/deployment. These will be securely available to your application at runtime.

For more detailed information, refer to the [official Firebase App Hosting documentation](https://firebase.google.com/docs/app-hosting).

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
