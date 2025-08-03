import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma.module';
import { CommonModule } from '../common/common.module';
import { BcryptAdapter } from '../common/adapters/bcrypt.adapter';

@Module({
  imports: [PrismaModule, CommonModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'HASHER',
      useClass: BcryptAdapter,
    },
  ],
})
export class UsersModule {}
