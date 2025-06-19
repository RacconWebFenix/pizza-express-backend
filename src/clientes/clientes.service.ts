import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from '@prisma/client';

@Injectable()
export class ClientesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    return await this.prisma.cliente.create({
      data: {
        ...createClienteDto,
        password: createClienteDto.password, // Garante que o campo password é usado corretamente
      },
    });
  }

  async findAll(): Promise<Cliente[]> {
    return await this.prisma.cliente.findMany();
  }

  async findOne(id: number): Promise<Cliente | null> {
    return await this.prisma.cliente.findUnique({ where: { id } });
  }

  async update(
    id: number,
    updateClienteDto: UpdateClienteDto,
  ): Promise<Cliente> {
    return await this.prisma.cliente.update({
      where: { id },
      data: updateClienteDto,
    });
  }

  async remove(id: number): Promise<Cliente> {
    return await this.prisma.cliente.delete({ where: { id } });
  }

  async findByEmail(email: string): Promise<Cliente[]> {
    return await this.prisma.cliente.findMany({ where: { email } });
  }
}
