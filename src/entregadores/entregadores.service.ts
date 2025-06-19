import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateEntregadoreDto } from './dto/create-entregadore.dto';
import { UpdateEntregadoreDto } from './dto/update-entregadore.dto';

@Injectable()
export class EntregadoresService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEntregadoreDto: CreateEntregadoreDto) {
    return this.prisma.entregador.create({ data: createEntregadoreDto });
  }

  findAll() {
    return this.prisma.entregador.findMany();
  }

  findOne(id: number) {
    return this.prisma.entregador.findUnique({ where: { id } });
  }

  update(id: number, updateEntregadoreDto: UpdateEntregadoreDto) {
    return this.prisma.entregador.update({
      where: { id },
      data: updateEntregadoreDto,
    });
  }

  remove(id: number) {
    return this.prisma.entregador.delete({ where: { id } });
  }
}
