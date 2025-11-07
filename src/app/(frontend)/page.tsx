import { headers as getHeaders } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'
import { ArrowRight, BookOpenText, LogIn } from 'lucide-react'
import { fileURLToPath } from 'url'

import { Button } from '@/components/ui/button'
import config from '@/payload.config'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="flex w-full max-w-3xl flex-col items-center gap-12 text-center">
      <div className="flex flex-col items-center gap-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Image
            alt="Payload Logo"
            height={48}
            src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
            width={48}
          />
        </div>
        <div className="space-y-2">
          {!user && <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Welcome to your new project.</h1>}
          {user && (
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Welcome back, {user.email}
            </h1>
          )}
          <p className="text-balance text-muted-foreground">
            You now have ShadCN UI ready to go. Explore the admin panel or dive into the docs to keep building.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="gap-2">
            <Link href={payloadConfig.routes.admin}>
              <LogIn className="h-4 w-4" /> Go to admin panel
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <a href="https://payloadcms.com/docs" rel="noopener noreferrer" target="_blank">
              <BookOpenText className="h-4 w-4" /> Documentation
            </a>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 rounded-lg border bg-card px-6 py-4 text-sm text-muted-foreground shadow-sm">
        <span>Update this page by editing</span>
        <a className="inline-flex items-center gap-1 font-mono text-primary" href={fileURL}>
          <code>app/(frontend)/page.tsx</code>
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </div>
  )
}
