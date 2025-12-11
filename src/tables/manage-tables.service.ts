import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { TableStatus } from '@prisma/client';

@Injectable()
export class ManageTablesService {
  constructor(private prisma: PrismaService) {}

  async create(createTableDto: CreateTableDto) {
    // Verificar se o número da mesa já existe
    const existingTable = await this.prisma.table.findUnique({
      where: { number: createTableDto.number },
    });

    if (existingTable) {
      throw new ConflictException(`Table with number ${createTableDto.number} already exists`);
    }

    return this.prisma.table.create({
      data: createTableDto,
    });
  }

  async findAll() {
    return this.prisma.table.findMany({
      include: {
        sessions: {
          where: { closedAt: null }, // Apenas sessões ativas
          orderBy: { openedAt: 'desc' },
          take: 1,
        },
      },
      orderBy: { number: 'asc' },
    });
  }

  async findOne(id: string) {
    const table = await this.prisma.table.findUnique({
      where: { id },
      include: {
        sessions: {
          where: { closedAt: null }, // Apenas sessões ativas
          orderBy: { openedAt: 'desc' },
          take: 1,
        },
      },
    });

    if (!table) {
      throw new NotFoundException(`Table with ID ${id} not found`);
    }

    return table;
  }

  async update(id: string, updateTableDto: UpdateTableDto) {
    try {
      // Se estiver mudando o status, verificar se é válido
      if (updateTableDto.status) {
        const table = await this.findOne(id);

        // Não permitir mudança direta de status - deve ser feito através de sessões
        if (table.status !== updateTableDto.status) {
          throw new ConflictException('Table status should be managed through sessions');
        }
      }

      return await this.prisma.table.update({
        where: { id },
        data: updateTableDto,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Table with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: string) {
    try {
      // Verificar se há sessões ativas
      const activeSession = await this.prisma.tableSession.findFirst({
        where: {
          tableId: id,
          closedAt: null,
        },
      });

      if (activeSession) {
        throw new ConflictException('Cannot delete table with active session');
      }

      return await this.prisma.table.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Table with ID ${id} not found`);
      }
      throw error;
    }
  }

  async getAvailableTables() {
    return this.prisma.table.findMany({
      where: { status: TableStatus.AVAILABLE },
      orderBy: { number: 'asc' },
    });
  }
}