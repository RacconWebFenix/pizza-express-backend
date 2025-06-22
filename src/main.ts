/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { swaggerUiConfig } from './swagger-ui';
import { setupSwaggerMiddlewares } from './swagger-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // Swagger config (ativado em todos os ambientes)
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
  SwaggerModule.setup('docs', app, document, {
    customCssUrl:
      'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.8/swagger-ui.css',
    customJs: [
      'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.8/swagger-ui-bundle.js',
      'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.8/swagger-ui-standalone-preset.js',
    ],
    ...swaggerUiConfig,
  });
  // Adiciona header CSP para Swagger funcionar em todos ambientes
  app.use('/docs', (req: any, res: any, next: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; connect-src 'self' *; img-src 'self' data:; font-src 'self' https://cdn.jsdelivr.net; object-src 'none';",
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    next();
  });

  // Configura middlewares personalizados para servir arquivos Swagger com MIME types corretos
  setupSwaggerMiddlewares(app);

  // Habilita CORS para qualquer origem (ajuste para produção se necessário)
  app.enableCors({
    origin: '*', // Permite qualquer origem
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3005);
}
void bootstrap();
