import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPedidoDto: CreatePedidoDto) {
    const { clienteId, pizzasIds, status, entregadorId } = createPedidoDto;
    return this.prisma.pedido.create({
      data: {
        cliente: { connect: { id: clienteId } },
        pizzas: { connect: pizzasIds.map((id) => ({ id })) },
        status,
        entregador: entregadorId
          ? { connect: { id: entregadorId } }
          : undefined,
      },
    });
  }

  findAll() {
    return this.prisma.pedido.findMany({
      include: { cliente: true, pizzas: true, entregador: true },
    });
  }

  findOne(id: number) {
    return this.prisma.pedido.findUnique({
      where: { id },
      include: { cliente: true, pizzas: true, entregador: true },
    });
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto) {
    const { clienteId, pizzasIds, status, entregadorId, latitude, longitude } =
      updatePedidoDto;
    return this.prisma.pedido.update({
      where: { id },
      data: {
        cliente: clienteId ? { connect: { id: clienteId } } : undefined,
        pizzas: pizzasIds
          ? { set: pizzasIds.map((id) => ({ id })) }
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

  remove(id: number) {
    return this.prisma.pedido.delete({ where: { id } });
  }
}
