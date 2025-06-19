import { Module } from '@nestjs/common';
import { EntregadoresService } from './entregadores.service';
import { EntregadoresController } from './entregadores.controller';
import { PrismaModule } from '../prisma.module';
import { EntregadoresLocationGateway } from './entregadores-location.gateway';

@Module({
  imports: [PrismaModule],
  controllers: [EntregadoresController],
  providers: [EntregadoresService, EntregadoresLocationGateway],
})
export class EntregadoresModule {}
