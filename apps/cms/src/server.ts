import path from 'node:path';
import { fileURLToPath } from 'node:url';

import express from 'express';
import payload from 'payload';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export async function startServer() {
  const app = express();

  await payload.init({
    secret: process.env.PAYLOAD_SECRET || 'development-secret',
    express: app,
    onInit: () => {
      payload.logger.info('Payload CMS is ready.');
    }
  });

  app.use('/assets', express.static(path.resolve(dirname, '../media')));

  const port = Number(process.env.PORT) || 3001;
  app.listen(port, () => {
    payload.logger.info(`Payload server started at http://localhost:${port}`);
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  startServer();
}
