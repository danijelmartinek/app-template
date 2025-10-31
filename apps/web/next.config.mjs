import path from 'node:path';
import { fileURLToPath } from 'node:url';

import withPayload from '@payloadcms/next/withPayload';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = withPayload(
  {
    typedRoutes: true,
    transpilePackages: ['@app/cms'],
    turbopack: {},
    env: {
      PAYLOAD_CONFIG_PATH: path.resolve(dirname, '../../packages/cms/payload.config.ts')
    }
  },
  {
    devBundleServerPackages: false
  }
);

export default nextConfig;
