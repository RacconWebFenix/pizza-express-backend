import { Module } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { PizzasController } from './pizzas.controller';
import { PrismaModule } from '../prisma.module';
import { UploadModule } from '../upload/upload.module';
import { CommonModule } from '../common/common.module';

/**
 * @deprecated This module is deprecated. Use the new catalog system with Categories and Products instead.
 */
@Module({
  imports: [PrismaModule, UploadModule, CommonModule],
  controllers: [PizzasController],
  providers: [PizzasService],
})
export class PizzasModule {}
