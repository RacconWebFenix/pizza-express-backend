import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido, StatusPedido } from '@prisma/client';
import { UpdatePedidoStatusDto } from './dto/update-pedido-status.dto';

@Injectable()
export class PedidosService {
  constructor(private readonly prisma: PrismaService) {}

  // Mapeia as transições de status permitidas
  private readonly transicoesStatus: Record<StatusPedido, StatusPedido[]> = {
    PENDENTE: [StatusPedido.EM_PREPARO, StatusPedido.CANCELADO],
    EM_PREPARO: [StatusPedido.A_CAMINHO, StatusPedido.CANCELADO],
    A_CAMINHO: [StatusPedido.ENTREGUE],
    ENTREGUE: [],
    CANCELADO: [],
  };

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    // Buscar preços das pizzas para calcular total
    const pizzas = await this.prisma.pizza.findMany({
      where: { id: { in: createPedidoDto.pizzasIds } },
      select: { id: true, preco: true },
    });

    // Calcular total (assumindo quantidade 1 por pizza por enquanto)
    let total = 0;
    for (const pizza of pizzas) {
      total += pizza.preco;
    }

    // Criar pedido com total calculado
    const pedido = await this.prisma.pedido.create({
      data: {
        userId: createPedidoDto.clienteId,
        enderecoId: createPedidoDto.enderecoId,
        status: createPedidoDto.status || StatusPedido.PENDENTE,
        total: total,
        paymentIntentId: createPedidoDto.paymentIntentId,
        observacoes: createPedidoDto.observacoes,
        pizzas: {
          connect: createPedidoDto.pizzasIds.map((id: number) => ({ id })),
        },
        entregadorId: createPedidoDto.entregadorId,
      },
      include: {
        user: true,
        endereco: true,
        pizzas: true,
        entregador: true,
      },
    });

    return pedido;
  }

  findAll() {
    return this.prisma.pedido.findMany({
      include: {
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
          },
        },
        pizzas: {
          select: {
            id: true,
            nome: true,
            preco: true,
            descricao: true,
          },
        },
        entregador: {
          select: {
            id: true,
            nome: true,
            telefone: true,
          },
        },
        endereco: {
          select: {
            id: true,
            logradouro: true,
            numero: true,
            cidade: true,
            cep: true,
          },
        },
      },
      orderBy: { criadoEm: 'desc' },
    });
  }

  findByUserId(userId: number) {
    return this.prisma.pedido.findMany({
      where: { userId },
      include: {
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
          },
        },
        pizzas: {
          select: {
            id: true,
            nome: true,
            preco: true,
            descricao: true,
          },
        },
        entregador: {
          select: {
            id: true,
            nome: true,
            telefone: true,
          },
        },
        endereco: {
          select: {
            id: true,
            logradouro: true,
            numero: true,
            cidade: true,
            cep: true,
          },
        },
      },
      orderBy: { criadoEm: 'desc' },
    });
  }

  async findOne(id: number) {
    const pedido = await this.prisma.pedido.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
          },
        },
        pizzas: {
          select: {
            id: true,
            nome: true,
            preco: true,
            descricao: true,
          },
        },
        entregador: {
          select: {
            id: true,
            nome: true,
            telefone: true,
          },
        },
        endereco: {
          select: {
            id: true,
            logradouro: true,
            numero: true,
            cidade: true,
            cep: true,
          },
        },
      },
    });
    if (!pedido) {
      throw new NotFoundException(`Pedido com ID #${id} não encontrado.`);
    }
    return pedido;
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<Pedido> {
    await this.findOne(id); // Garante que o pedido existe
    const { clienteId, pizzasIds, status, entregadorId, latitude, longitude } =
      updatePedidoDto;
    return this.prisma.pedido.update({
      where: { id },
      data: {
        user: clienteId ? { connect: { id: clienteId } } : undefined,
        pizzas: pizzasIds
          ? { set: pizzasIds.map((pid) => ({ id: pid })) }
          : undefined,
        status,
        entregador: entregadorId
          ? { connect: { id: entregadorId } }
          : undefined,
        latitude,
        longitude,
      },
    });
  }

  async updateStatus(
    id: number,
    updatePedidoStatusDto: UpdatePedidoStatusDto,
  ): Promise<Pedido> {
    const pedidoAtual = await this.findOne(id);
    const novoStatus = updatePedidoStatusDto.status;

    const transicoesPermitidas = this.transicoesStatus[pedidoAtual.status];

    if (!transicoesPermitidas || !transicoesPermitidas.includes(novoStatus)) {
      throw new BadRequestException(
        `Transição de status de "${pedidoAtual.status}" para "${novoStatus}" não é permitida.`,
      );
    }

    return this.prisma.pedido.update({
      where: { id },
      data: {
        status: novoStatus,
      },
    });
  }

  async updatePedidoStatus(pedidoId: number, paymentIntentId: string) {
    const pedido = await this.prisma.pedido.update({
      where: { id: pedidoId },
      data: {
        status: 'EM_PREPARO',
        paymentIntentId: paymentIntentId,
      },
    });
    return pedido;
  }

  remove(id: number) {
    return this.prisma.pedido.delete({ where: { id } });
  }
}
