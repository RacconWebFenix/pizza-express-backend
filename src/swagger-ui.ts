export const swaggerUiConfig = {
  customSiteTitle: 'Pizza Express API Documentation',
  explorer: true,
  swaggerOptions: {
    persistAuthorization: true,
    tryItOutEnabled: true,
    displayRequestDuration: true,
    filter: true,
    deepLinking: true,
    docExpansion: 'list',
    syntaxHighlight: {
      theme: 'monokai',
    },
    defaultModelsExpandDepth: 1,
    defaultModelExpandDepth: 1,
  },
  // Remova o customfavIcon que pode estar causando problemas
  // Usar CSS simplificado para evitar problemas
  customCss: '.swagger-ui .topbar { display: none }',
};
