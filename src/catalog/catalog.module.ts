import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ProductsService } from './products.service';
import { CategoriesController } from './categories.controller';
import { ProductsController } from './products.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CategoriesController, ProductsController],
  providers: [CategoriesService, ProductsService],
  exports: [CategoriesService, ProductsService],
})
export class CatalogModule {}