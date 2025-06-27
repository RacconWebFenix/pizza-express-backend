"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const helmet_1 = require("helmet");
async function bootstrap() {
    const isDevelopment = process.env.NODE_ENV !== 'production';
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        console.log(`🔧 NODE_ENV: ${process.env.NODE_ENV || 'undefined'}`);
        console.log(`🔧 isDevelopment: ${isDevelopment}`);
        if (!isDevelopment) {
            app.use((0, helmet_1.default)({
                contentSecurityPolicy: {
                    directives: {
                        defaultSrc: [`'self'`],
                        styleSrc: [`'self'`, `'unsafe-inline'`],
                        imgSrc: [`'self'`, 'data:'],
                        scriptSrc: [`'self'`, `'unsafe-inline'`],
                    },
                },
            }));
        }
        else {
            app.use((0, helmet_1.default)({
                contentSecurityPolicy: false,
                crossOriginEmbedderPolicy: false,
            }));
        }
        app.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
            transform: true,
            forbidNonWhitelisted: true,
            transformOptions: { enableImplicitConversion: true },
        }));
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
        console.log(`🌍 Ambiente: ${isDevelopment ? 'desenvolvimento' : 'produção'}`);
    }
    catch (error) {
        console.error('❌ Erro durante inicialização da aplicação:', error);
        throw error;
    }
}
void bootstrap();
//# sourceMappingURL=main.js.map