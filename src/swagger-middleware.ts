import { INestApplication } from '@nestjs/common';
import * as path from 'path';
import { Request, Response } from 'express';

export function setupSwaggerMiddlewares(app: INestApplication): void {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  const expressApp: any = app.getHttpAdapter().getInstance();

  // Serve Swagger UI assets com tipos MIME corretos
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  expressApp.get('/docs/swagger-ui.css', (req: Request, res: Response) => {
    res.type('text/css');
    res.sendFile(
      path.join(__dirname, '../node_modules/swagger-ui-dist/swagger-ui.css'),
    );
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  expressApp.get(
    '/docs/swagger-ui-bundle.js',
    (req: Request, res: Response) => {
      res.type('application/javascript');
      res.sendFile(
        path.join(
          __dirname,
          '../node_modules/swagger-ui-dist/swagger-ui-bundle.js',
        ),
      );
    },
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  expressApp.get(
    '/docs/swagger-ui-standalone-preset.js',
    (req: Request, res: Response) => {
      res.type('application/javascript');
      res.sendFile(
        path.join(
          __dirname,
          '../node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js',
        ),
      );
    },
  );
}
