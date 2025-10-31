import config from '../payload.config';

import { GRAPHQL_PLAYGROUND_GET, GRAPHQL_POST } from '@payloadcms/next/routes/graphql';
import { DELETE as REST_DELETE, GET as REST_GET, OPTIONS as REST_OPTIONS, PATCH as REST_PATCH, POST as REST_POST, PUT as REST_PUT } from '@payloadcms/next/routes/rest';

const configPromise = Promise.resolve(config);

export const restHandlers = {
  OPTIONS: REST_OPTIONS(configPromise),
  GET: REST_GET(configPromise),
  POST: REST_POST(configPromise),
  DELETE: REST_DELETE(configPromise),
  PATCH: REST_PATCH(configPromise),
  PUT: REST_PUT(configPromise)
};

export const graphqlHandlers = {
  GET: GRAPHQL_PLAYGROUND_GET(configPromise),
  POST: GRAPHQL_POST(configPromise)
};
