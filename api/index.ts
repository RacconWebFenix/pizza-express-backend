import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';
import { INestApplication } from '@nestjs/common';
import helmet from 'helmet';
import type { VercelRequest, VercelResponse } from '@vercel/node';

let app: INestApplication;

async function createNestApp(): Promise<INestApplication> {
  if (!app) {
    app = await NestFactory.create(AppModule);

    // Configurar helmet para production
    app.use(
      helmet({
        contentSecurityPolicy: {
          directives: {
            defaultSrc: [`'self'`],
            styleSrc: [`'self'`, `'unsafe-inline'`],
            imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
            scriptSrc: [`'self'`, `'unsafe-inline'`],
          },
        },
      }),
    );

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    );

    // CORS configuration
    app.enableCors({
      origin: process.env.FRONTEND_URL?.split(',') || '*',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
      exposedHeaders: ['Authorization'],
      credentials: true,
    });

    await app.init();
  }

  return app;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const nestApp = await createNestApp();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const server = nestApp.getHttpAdapter().getInstance();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return new Promise((resolve) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    server(req, res, () => {
      resolve(undefined);
    });
  });
}
