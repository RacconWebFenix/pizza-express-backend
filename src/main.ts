import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import * as fs from 'fs';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

async function bootstrap() {
  const isSwaggerGeneration = process.argv.includes('--generate-swagger');
  const isDevelopment = process.env.NODE_ENV === 'development';

  try {
    const app = await NestFactory.create(AppModule, { cors: true });

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

    if (isDevelopment || isSwaggerGeneration) {
      const config = new DocumentBuilder()
        .setTitle('Pizza Express API')
        .setDescription(
          'Documentação completa da API Pizza Express com autenticação JWT.',
        )
        .addBearerAuth(
          { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
          'JWT',
        )
        .addTag('Auth', 'Endpoints relacionados à autenticação')
        .build();

      const document = SwaggerModule.createDocument(app, config);

      if (isSwaggerGeneration) {
        if (!fs.existsSync('swagger')) {
          fs.mkdirSync('swagger', { recursive: true });
        }

        fs.writeFileSync(
          path.join('swagger', 'swagger.json'),
          JSON.stringify(document, null, 2),
        );

        console.log('✅ Documentação Swagger gerada com sucesso!');
        process.exit(0);
      }

      SwaggerModule.setup('docs', app, document, {
        swaggerOptions: {
          persistAuthorization: true,
          docExpansion: 'list',
          filter: true,
          displayRequestDuration: true,
        },
      });

      app.use('/docs', (req: Request, res: Response, next: NextFunction) => {
        res.removeHeader('Content-Security-Policy');
        res.removeHeader('X-Content-Security-Policy');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('Content-Type', 'application/json');
        next();
      });
    }

    app.enableCors({
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
      exposedHeaders: ['Authorization'],
      credentials: true,
    });

    await app.listen(process.env.PORT ?? 3005);
  } catch (error) {
    console.error('Erro durante inicialização da aplicação:', error);
    if (isSwaggerGeneration) {
      console.error('Erro na geração da documentação Swagger');
      process.exit(1);
    }
    throw error;
  }
}
void bootstrap();
