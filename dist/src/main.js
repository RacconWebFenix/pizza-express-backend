"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const helmet_1 = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, helmet_1.default)());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
        transformOptions: { enableImplicitConversion: true },
    }));
    if (process.env.NODE_ENV !== 'production') {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Pizza Express API')
            .setDescription('Documentação completa da API Pizza Express com autenticação JWT.')
            .setVersion('1.0')
            .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'JWT')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('docs', app, document, {
            customCssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.8/swagger-ui.css',
            customJs: [
                'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.8/swagger-ui-bundle.js',
                'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.8/swagger-ui-standalone-preset.js',
            ],
        });
        app.use('/docs', (req, res, next) => {
            res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; connect-src 'self' https://cdn.jsdelivr.net; img-src 'self' data:; font-src 'self' https://cdn.jsdelivr.net; object-src 'none';");
            next();
        });
    }
    app.enableCors({
        origin: true,
        credentials: true,
    });
    await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
//# sourceMappingURL=main.js.map