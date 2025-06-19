// test/utils.ts
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

export async function waitForClienteApi(
  app: INestApplication,
  email: string,
  maxRetries = 20, // reduzido para 20 tentativas
  delayMs = 200, // reduzido para 200ms de delay
): Promise<void> {
  for (let i = 0; i < maxRetries; i++) {
    const res = await request(app.getHttpServer())
      .get('/clientes')
      .query({ email });

    console.log(
      `[waitForClienteApi] Tentativa ${i + 1}: status=${res.status}, body=`,
      res.body,
    );
    if (
      Array.isArray(res.body) &&
      res.body.some((c: { email: string }) => c.email === email)
    )
      return;
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
  throw new Error(
    `Cliente com email ${email} não encontrado via API após registro.`,
  );
}
