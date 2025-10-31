# Turborepo Application Template

This repository is a multi-app monorepo powered by [Turborepo](https://turbo.build) featuring:

- **Next.js 14** frontend with the App Router
- **Payload CMS 3** with SQLite for content management
- **Tailwind CSS 4 (alpha)** configured as a shared preset
- **Shadcn-inspired UI** library distributed from `packages/ui`

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Copy environment variables for Payload CMS:

   ```bash
   cp apps/cms/.env.example apps/cms/.env
   ```

3. Run development servers in parallel:

   ```bash
   pnpm dev
   ```

   - Next.js runs on [http://localhost:3000](http://localhost:3000)
   - Payload CMS runs on [http://localhost:3001/admin](http://localhost:3001/admin)

## Workspace Structure

- `apps/web` – Next.js application with Tailwind CSS 4 and shared UI components.
- `apps/cms` – Payload CMS instance configured with SQLite and sample collections.
- `packages/ui` – Shared component library following shadcn conventions.
- `packages/tailwind-config` – Tailwind CSS preset consumed by all workspaces.
- `packages/tsconfig` – TypeScript configuration presets.
- `docs/` – Architectural documentation.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Run all development servers (Next.js + Payload CMS). |
| `pnpm build` | Build every workspace respecting the dependency graph. |
| `pnpm lint` | Run linting across applications and packages. |
| `pnpm start` | Start production servers. |
| `pnpm clean` | Clear build artefacts and caches. |

## Tailwind CSS 4 Notes

Tailwind CSS 4 is currently in alpha. The shared preset in `packages/tailwind-config` centralises theme tokens and animations. Each app extends the preset to include the relevant content globs to keep generated CSS minimal.

## Payload CMS

Payload CMS is configured with a SQLite database (`apps/cms/payload.db`) for local development. For production deployments switch the adapter in `apps/cms/payload.config.ts` to a production-ready database (e.g. Postgres) and update environment variables accordingly.
