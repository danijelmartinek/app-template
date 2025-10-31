import Link from 'next/link';

import { Button } from '@app/ui';

import { fetchPages } from '@/lib/payload';

export default async function HomePage() {
  const pages = await fetchPages();

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-10 p-8 text-center">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-wide text-muted-foreground">Turborepo Starter</p>
        <h1 className="text-4xl font-bold sm:text-5xl">Next.js + Payload CMS</h1>
        <p className="text-lg text-muted-foreground">
          Ship modern applications faster with a shared component library, Tailwind CSS 4 design tokens, and fully
          integrated Payload CMS for content management.
        </p>
      </section>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Button asChild>
          <Link href="https://payloadcms.com" target="_blank" rel="noreferrer">
            Explore Payload CMS
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://turbo.build" target="_blank" rel="noreferrer">
            Learn about Turborepo
          </Link>
        </Button>
      </div>
      <section className="w-full space-y-4 rounded-lg border border-border bg-card p-6 text-left shadow-sm">
        <header>
          <h2 className="text-2xl font-semibold">Latest pages</h2>
          <p className="text-sm text-muted-foreground">
            Content is sourced directly from your Payload CMS instance.
          </p>
        </header>
        <ul className="space-y-2">
          {pages.length === 0 ? (
            <li className="text-sm text-muted-foreground">Create your first page in Payload to see it listed here.</li>
          ) : (
            pages.map((page) => (
              <li key={page.id} className="rounded-md border border-border bg-background px-4 py-3">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">Slug: {page.slug}</p>
                <p className="text-lg font-medium">{page.title}</p>
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
}
