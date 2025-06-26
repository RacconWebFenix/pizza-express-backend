/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Configurar o Helmet com exceção para o Swagger
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
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

  const config = new DocumentBuilder()
    .setTitle('Pizza Express API')
    .setDescription(
      'Documentação completa da API Pizza Express com autenticação JWT.',
    )
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'JWT',
    )
    .addTag('Auth', 'Endpoints relacionados à autenticação')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Configuração mais simples do Swagger com opções diretas
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      docExpansion: 'list',
      filter: true,
      displayRequestDuration: true,
    },
  });
  // Middleware específico para a rota de documentação
  app.use('/docs', (req: any, res: any, next: any) => {
    // Remover headers restritivos de segurança que podem bloquear recursos do Swagger
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    res.removeHeader('Content-Security-Policy');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    res.removeHeader('X-Content-Security-Policy');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    res.setHeader('Access-Control-Allow-Origin', '*');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    res.setHeader('X-Content-Type-Options', 'nosniff');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    next();
  });

  // Habilita CORS para qualquer origem
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    exposedHeaders: ['Authorization'],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3005);
}
void bootstrap();
