import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  // Se NODE_ENV não estiver definido ou for diferente de 'production', considera desenvolvimento
  const isDevelopment = process.env.NODE_ENV !== 'production';

  try {
    const app = await NestFactory.create(AppModule);

    console.log(`🔧 NODE_ENV: ${process.env.NODE_ENV || 'undefined'}`);
    console.log(`🔧 isDevelopment: ${isDevelopment}`);

    // Configurar helmet adequadamente para production
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
        transform: true,
        forbidNonWhitelisted: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    );

    // CORS configuration
    app.enableCors({
      origin: isDevelopment
        ? ['http://localhost:3000', 'http://localhost:3005']
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
