import { Global, Module } from '@nestjs/common';
import { BcryptAdapter } from './adapters/bcrypt.adapter';
import { CustomLoggerService } from './logger/logger.service';

@Global()
@Module({
  providers: [
    {
      provide: 'HASHER',
      useClass: BcryptAdapter,
    },
    CustomLoggerService,
  ],
  exports: ['HASHER', CustomLoggerService],
})
export class CommonModule {}
