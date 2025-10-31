import type { Metadata } from 'next';

import { RootPage } from '@payloadcms/next/views/Root';
import { generatePageMetadata } from '@payloadcms/next/views/Root/metadata';

import { getPayloadClient } from '@app/cms/payload';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface AdminPageProps {
  params: { segments?: string[] };
  searchParams?: Record<string, string | string[]>;
}

export async function generateMetadata({ params, searchParams }: AdminPageProps): Promise<Metadata> {
  const payload = await getPayloadClient();
  const segments = params.segments ?? [];
  const query: Record<string, string | string[]> = searchParams ?? {};

  return generatePageMetadata({
    config: Promise.resolve(payload.config),
    params: Promise.resolve({ segments }),
    searchParams: Promise.resolve(query)
  });
}

export default async function PayloadAdminPage({ params, searchParams }: AdminPageProps) {
  const payload = await getPayloadClient();
  const segments = params.segments ?? [];
  const query: Record<string, string | string[]> = searchParams ?? {};

  return RootPage({
    config: Promise.resolve(payload.config),
    importMap: payload.importMap,
    params: Promise.resolve({ segments }),
    searchParams: Promise.resolve(query)
  });
}
