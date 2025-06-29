import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  enableShutdownHooks(app: INestApplication) {
    (this as unknown as { $on(event: string, cb: () => void): void }).$on(
      'beforeExit',
      () => {
        void app.close();
      },
    );
  }
}
