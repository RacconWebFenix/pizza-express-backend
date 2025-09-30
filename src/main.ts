import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { CustomLoggerService } from './common/logger/logger.service';
import { APP_CONSTANTS } from './common/constants/app.constants';

async function bootstrap() {
  const isDevelopment = process.env.NODE_ENV !== 'production';

  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

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
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    );
    const allowedOrigins = [
      process.env.FRONTEND_URL, // Sua URL de produção (Vercel)
      process.env.FRONTEND_URL_DEV, // Sua URL de desenvolvimento (localhost:3000)
    ].filter(Boolean); // Este filtro remove valores vazios ou nulos

    const corsOptions: CorsOptions = {
      origin: (origin, callback) => {
        // Permite requisições sem 'origin' (ex: de apps mobile ou Insomnia)
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true,
    };

    app.enableCors(corsOptions);

    const port = process.env.PORT
      ? parseInt(process.env.PORT, 10)
      : APP_CONSTANTS.DEFAULT_PORT;

    const logger = app.get(CustomLoggerService);

    await app.listen(port, '0.0.0.0');

    logger.log(`Application running on port ${port}`, 'Application');
    logger.log(
      `Environment: ${isDevelopment ? 'development' : 'production'}`,
      'Application',
    );
  } catch (error) {
    // Fallback to console.error since logger might not be available
    console.error('❌ Application startup error:', error);
    throw error;
  }
}

// O `void` é usado para indicar que não estamos aguardando a promessa aqui,
// o que é comum para o ponto de entrada da aplicação.
void bootstrap();
