// src/enderecos/enderecos.module.ts
import { Module } from '@nestjs/common';
import { EnderecosController } from './enderecos.controller';
import { EnderecosService } from './enderecos.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [EnderecosController],
  providers: [EnderecosService, PrismaService],
  exports: [EnderecosService],
})
export class EnderecosModule {}
