import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';

import { Pages } from './src/collections/Pages';
import { Users } from './src/collections/Users';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const baseURL =
  process.env.PAYLOAD_PUBLIC_SERVER_URL ??
  (process.env.NEXT_PUBLIC_APP_URL ? process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, '') : 'http://localhost:3000');
const defaultServerURL = `${baseURL}/app`;

export default buildConfig({
  editor: lexicalEditor(),
  admin: {
    user: Users.slug
  },
  routes: {
    admin: '/app',
    api: '/app/api',
    graphQL: '/app/graphql'
  },
  collections: [Users, Pages],
  serverURL: defaultServerURL,
  db: sqliteAdapter({
    client: {
      filename: path.resolve(dirname, 'payload.db')
    }
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts')
  }
});
