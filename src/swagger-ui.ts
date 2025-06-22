export const swaggerUiConfig = {
  customSiteTitle: 'Pizza Express API Documentation',
  swaggerOptions: {
    persistAuthorization: true,
    tryItOutEnabled: true,
    displayRequestDuration: true,
    filter: true,
    deepLinking: true,
  },
  customfavIcon: 'https://www.pizza-express-backend.vercel.app/favicon.ico',
  customCss: `
    .swagger-ui .topbar { display: none !important; }
    .swagger-ui .info { margin-top: 20px; }
    .swagger-ui .scheme-container { box-shadow: none; }
    .swagger-ui .auth-wrapper { display: flex; justify-content: flex-end; }
  `,
};
