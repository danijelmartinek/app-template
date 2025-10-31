import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { buildConfig } from 'payload';

import { Pages } from './src/collections/Pages';
import { Users } from './src/collections/Users';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default buildConfig({
  admin: {
    user: Users.slug
  },
  collections: [Users, Pages],
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL ?? 'http://localhost:3001',
  db: sqliteAdapter({
    client: {
      filename: path.resolve(dirname, 'payload.db')
    }
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts')
  }
});
