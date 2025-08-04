import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

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

    // Configure CORS to allow specific origins
    const allowedOrigins = [
      process.env.FRONTEND_URL,
      process.env.FRONTEND_URL_DEV || 'http://localhost:3000',
    ];
    app.enableCors({
      origin: (origin, callback) => {
        // allow requests with no origin (e.g. mobile apps, curl)
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error(`Origin ${origin} not allowed by CORS`));
        }
      },
      credentials: true,
    });

    // **AJUSTE/CONFIRMAÇÃO 1**: Utiliza a variável de ambiente PORT fornecida pela Render.
    // O fallback para 10000 é uma boa prática para alinhar com o padrão da Render.
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 10000;

    // **AJUSTE/CONFIRMAÇÃO 2**: Escuta em '0.0.0.0' para ser acessível externamente pelo proxy da Render.
    // Esta é a correção principal para o erro 502 Bad Gateway.
    await app.listen(port, '0.0.0.0');

    console.log(`🚀 Aplicação rodando na porta ${port}`);
    console.log(
      `🌍 Ambiente: ${isDevelopment ? 'desenvolvimento' : 'produção'}`,
    );
  } catch (error) {
    console.error('❌ Erro durante inicialização da aplicação:', error);
    // Lançar o erro garante que o processo falhe se a inicialização não ocorrer bem.
    throw error;
  }
}

// O `void` é usado para indicar que não estamos aguardando a promessa aqui,
// o que é comum para o ponto de entrada da aplicação.
void bootstrap();
