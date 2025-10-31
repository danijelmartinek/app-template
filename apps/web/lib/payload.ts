import { getPayloadClient } from '@app/cms/payload';
import type { Page } from '@app/cms/types';

export async function fetchPages(limit = 5): Promise<Page[]> {
  const payload = await getPayloadClient();

  const { docs } = await payload.find<Page>({
    collection: 'pages',
    limit,
    sort: '-updatedAt'
  });

  return docs.map((doc) => ({
    id: doc.id,
    title: doc.title,
    slug: doc.slug,
    content: doc.content
  }));
}
