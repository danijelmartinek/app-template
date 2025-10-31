# Turborepo Application Template

This repository is a multi-app monorepo powered by [Turborepo](https://turbo.build) featuring:

- **Next.js 16** frontend with the App Router
- **Payload CMS 3** backed by SQLite and mounted inside the Next.js app
- **Tailwind CSS 4 (alpha)** configured as a shared preset
- **Shadcn-inspired UI** library distributed from `packages/ui`

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

   - Next.js runs on [http://localhost:3000](http://localhost:3000)
   - Payload CMS (REST, GraphQL, and the admin UI) is exposed from the same server under the `/app` base path

## Workspace Structure

- `apps/web` – Next.js application with Tailwind CSS 4, shared UI components, and the embedded Payload CMS routes.
- `packages/cms` – Reusable Payload CMS configuration, utilities, and route handlers.
- `packages/ui` – Shared component library following shadcn conventions.
- `packages/tailwind-config` – Tailwind CSS preset consumed by all workspaces.
- `packages/tsconfig` – TypeScript configuration presets.
- `docs/` – Architectural documentation.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Run the Next.js development server with embedded Payload CMS. |
| `pnpm build` | Build every workspace respecting the dependency graph. |
| `pnpm lint` | Run linting across applications and packages. |
| `pnpm start` | Start the production server. |
| `pnpm clean` | Clear build artefacts and caches. |

## Tailwind CSS 4 Notes

Tailwind CSS 4 is currently in alpha. The shared preset in `packages/tailwind-config` centralises theme tokens and animations. Each app extends the preset to include the relevant content globs to keep generated CSS minimal.

## Payload CMS

Payload CMS is configured with a SQLite database stored alongside the config in `packages/cms/payload.db` for local development. For production deployments switch the adapter in `packages/cms/payload.config.ts` to a production-ready database (e.g. Postgres) and update environment variables accordingly.

The admin UI, REST API, and GraphQL endpoint are all available from the Next.js server:

- Admin UI: `http://localhost:3000/app`
- REST API: `http://localhost:3000/app/api`
- GraphQL endpoint: `http://localhost:3000/app/graphql`
