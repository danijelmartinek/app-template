import { graphqlHandlers } from '@app/cms/next';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export const GET = graphqlHandlers.GET;
export const POST = graphqlHandlers.POST;
