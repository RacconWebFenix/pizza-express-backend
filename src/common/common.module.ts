import { Global, Module } from '@nestjs/common';
import { BcryptAdapter } from './adapters/bcrypt.adapter';

@Global()
@Module({
  providers: [
    {
      provide: 'HASHER',
      useClass: BcryptAdapter,
    },
  ],
  exports: ['HASHER'],
})
export class CommonModule {}
