import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateEnderecoDto } from '../users/dto/create-endereco.dto';
import { Endereco } from '@prisma/client';
import { UpdateEnderecoDto } from '../users/dto/update-endereco.dto';

@Injectable()
export class EnderecosService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: number): Promise<Endereco | null> {
    return this.prisma.endereco.findUnique({ where: { id } });
  }

  async create(dto: CreateEnderecoDto) {
    if (!dto.userId) throw new Error('Campo userId é obrigatório');
    const { userId, ...data } = dto;
    return this.prisma.endereco.create({
      data: {
        ...data,
        user: { connect: { id: userId } },
      },
    });
  }

  async update(id: number, dto: UpdateEnderecoDto) {
    const { ...data } = dto;
    return this.prisma.endereco.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.endereco.delete({ where: { id } });
  }
}
