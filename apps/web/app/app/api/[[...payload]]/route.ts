import { restHandlers } from '@app/cms/next';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export const OPTIONS = restHandlers.OPTIONS;
export const GET = restHandlers.GET;
export const HEAD = restHandlers.GET;
export const POST = restHandlers.POST;
export const PUT = restHandlers.PUT;
export const PATCH = restHandlers.PATCH;
export const DELETE = restHandlers.DELETE;
