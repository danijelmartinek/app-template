const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL ?? process.env.PAYLOAD_PUBLIC_SERVER_URL ?? 'http://localhost:3001';

type PayloadListResponse<T> = {
  docs: T[];
};

export type PagePayload = {
  id: string;
  title: string;
  slug: string;
  content?: unknown;
};

export async function fetchPages(limit = 5): Promise<PagePayload[]> {
  const response = await fetch(`${CMS_URL}/api/pages?limit=${limit}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(`Failed to load pages from Payload CMS: ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as PayloadListResponse<PagePayload>;

  return data.docs;
}
