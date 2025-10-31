# Architecture Overview

This document summarises the high-level architecture of the Turborepo workspace.

## Repository Layout

```text
apps/
  web/              # Next.js 14 application
  cms/              # Payload CMS application
packages/
  tailwind-config/  # Shared Tailwind CSS 4 preset used by applications and packages
  tsconfig/         # Shared TypeScript configuration presets
  ui/               # Shadcn-inspired component library
```

Supporting documentation lives inside the `docs/` directory to keep architectural decisions close to the codebase.

## Turborepo Pipeline

The root `package.json` configures workspace scripts that defer to [Turbo](https://turbo.build) tasks:

- `dev` runs all development servers in parallel.
- `build` orchestrates builds across applications and packages, respecting dependency graphs.
- `lint` executes static analysis in every workspace.
- `start` starts production servers.
- `clean` clears build artefacts.

All apps/packages should expose the same task names to benefit from caching and orchestration.

## Styling System

Tailwind CSS 4 is central to styling across the monorepo. The shared preset in `packages/tailwind-config` defines:

- Design tokens using CSS custom properties for colour, typography, and radii.
- Animation utilities reused across applications.

Applications (such as the Next.js frontend) extend the preset locally to include their own `content` globs so that Tailwind can tree-shake unused classes.

## UI Component Library

The `@app/ui` package hosts universal React components built on top of [shadcn/ui](https://ui.shadcn.com) conventions:

- Components consume the Tailwind design tokens and share styling helpers.
- Exports include a `cn` utility and foundational primitives such as `Button`.

This structure promotes reuse between the Next.js frontend and Payload CMS admin customisations.

## Headless CMS

Payload CMS runs from the `apps/cms` workspace. Its configuration wires up SQLite for a zero-config developer experience.

The CMS exposes a REST/GraphQL API that can be consumed by other apps. Shared TypeScript types can be extracted into new packages under `packages/` as the project grows.

## Deployment Considerations

- Next.js can be deployed to any platform that supports Node.js 18+ and the Next.js build output.
- Payload CMS also targets Node.js 18+. SQLite is ideal for local development; production deployments can switch to Postgres or another supported database by updating environment configuration.

## Future Enhancements

- Add CI pipelines to enforce linting, testing, and type-checking automatically.
- Extend the shared UI package with more primitives and domain-specific components.
- Introduce shared data-access utilities (e.g. API clients) under `packages/` as integration points expand.
