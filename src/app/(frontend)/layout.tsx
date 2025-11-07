import React from 'react'

import '@/styles/globals.css'

import { cn } from '@/lib/utils'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
        <main className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-16">
          {children}
        </main>
      </body>
    </html>
  )
}
