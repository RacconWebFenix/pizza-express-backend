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
    const { clienteId, pizzasIds, status, entregadorId, enderecoId } =
      createPedidoDto;
    return this.prisma.pedido.create({
      data: {
        user: { connect: { id: clienteId } },
        endereco: { connect: { id: enderecoId } },
        pizzas: { connect: pizzasIds.map((id) => ({ id })) },
        status: status || StatusPedido.PENDENTE, // Define PENDENTE como padrão
        entregador: entregadorId
          ? { connect: { id: entregadorId } }
          : undefined,
      },
    });
  }

  findAll() {
    return this.prisma.pedido.findMany({
      include: { user: true, pizzas: true, entregador: true },
    });
  }

  async findOne(id: number) {
    const pedido = await this.prisma.pedido.findUnique({
      where: { id },
      include: { user: true, pizzas: true, entregador: true },
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

  remove(id: number) {
    return this.prisma.pedido.delete({ where: { id } });
  }
}
