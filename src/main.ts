import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const isSwaggerGeneration = process.argv.includes('--generate-swagger');
  const isDevelopment = process.env.NODE_ENV === 'development';

  try {
    const app = await NestFactory.create(AppModule);

    // Configurar helmet adequadamente para production
    if (!isDevelopment) {
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

    // Swagger/OpenAPI configuração apenas para desenvolvimento
    if (isDevelopment || isSwaggerGeneration) {
      const config = new DocumentBuilder()
        .setTitle('Pizza Express API')
        .setDescription(
          'API completa para gerenciamento de pizzarias com autenticação JWT, gestão de pedidos, clientes e entregadores.',
        )
        .setVersion('1.0.0')
        .addBearerAuth(
          {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            name: 'JWT',
            description: 'Token JWT para autenticação',
            in: 'header',
          },
          'JWT-auth',
        )
        .addTag('Autenticação', 'Endpoints para login e autenticação')
        .addTag('Clientes', 'Gerenciamento de clientes')
        .addTag('Pizzas', 'Catálogo de pizzas')
        .addTag('Pedidos', 'Gestão de pedidos')
        .addTag('Entregadores', 'Gerenciamento de entregadores e entregas')
        .build();

      const documentFactory = () => SwaggerModule.createDocument(app, config);

      if (isSwaggerGeneration) {
        const document = documentFactory();

        if (!fs.existsSync('swagger')) {
          fs.mkdirSync('swagger', { recursive: true });
        }

        fs.writeFileSync(
          path.join('swagger', 'swagger.json'),
          JSON.stringify(document, null, 2),
        );

        console.log('✅ Documentação OpenAPI gerada com sucesso!');
        process.exit(0);
      }

      // Setup do Swagger apenas em desenvolvimento
      SwaggerModule.setup('docs', app, documentFactory, {
        swaggerOptions: {
          persistAuthorization: true,
          docExpansion: 'list',
          filter: true,
          displayRequestDuration: true,
          tryItOutEnabled: true,
        },
        customSiteTitle: 'Pizza Express API - Documentação',
        customfavIcon: '/favicon.ico',
        customCss: '.swagger-ui .topbar { display: none }',
        jsonDocumentUrl: 'docs/json',
        yamlDocumentUrl: 'docs/yaml',
      });

      console.log('📚 Documentação Swagger disponível em: /docs');
    }

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
    if (isSwaggerGeneration) {
      console.error('❌ Erro na geração da documentação OpenAPI');
      process.exit(1);
    }
    throw error;
  }
}

void bootstrap();
