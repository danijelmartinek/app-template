import Link from 'next/link';

import { Button } from '@app/ui';

export default function HomePage() {
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
    </main>
  );
}
