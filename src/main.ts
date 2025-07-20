import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // Se NODE_ENV não estiver definido ou for diferente de 'production', considera desenvolvimento
  const isDevelopment = process.env.NODE_ENV !== 'production';

  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // Servir arquivos estáticos
    app.useStaticAssets(join(__dirname, '..', 'uploads'), {
      prefix: '/uploads/',
    });

    if (!isDevelopment) {
      app.use(
        helmet({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: [`'self'`],
              styleSrc: [`'self'`, `'unsafe-inline'`],
              imgSrc: [`'self'`, 'data:'],
              scriptSrc: [`'self'`, `'unsafe-inline'`],
            },
          },
        }),
      );
    } else {
      app.use(
        helmet({
          contentSecurityPolicy: false,
          crossOriginEmbedderPolicy: false,
        }),
      );
    }

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true, // <-- ISTO RESOLVE O PROBLEMA
        transformOptions: {
          enableImplicitConversion: true, // Garante a conversão de string para número
        },
      }),
    );

    // CORS configuration
    app.enableCors({
      origin: isDevelopment
        ? 'http://localhost:3005'
        : process.env.FRONTEND_URL?.split(',') || '*',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
      exposedHeaders: ['Authorization'],
      credentials: true,
    });

    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3005;
    await app.listen(port, '0.0.0.0');

    console.log(`🚀 Aplicação rodando na porta ${port}`);
    console.log(
      `🌍 Ambiente: ${isDevelopment ? 'desenvolvimento' : 'produção'}`,
    );
  } catch (error) {
    console.error('❌ Erro durante inicialização da aplicação:', error);
    throw error;
  }
}

void bootstrap();
