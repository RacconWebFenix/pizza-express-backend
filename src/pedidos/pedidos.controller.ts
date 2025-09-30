import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';

import { UpdatePedidoStatusDto } from './dto/update-pedido-status.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { Resource } from '../common/decorators/resource.decorator';
import { Role } from '@prisma/client';
import { ResourceOwner } from '../common/decorators/auth.decorators';
import { RequestWithUser } from '../common/interfaces/authenticated-user.interface';

@Controller('pedidos')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  async create(@Body() createPedidoDto: CreatePedidoDto) {
    try {
      const pedido = await this.pedidosService.create(createPedidoDto);
      return {
        statusCode: 201,
        message: 'Pedido criado com sucesso',
        data: pedido,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  @Roles(Role.FUNCIONARIO, Role.ADMIN)
  async findAll() {
    try {
      return await this.pedidosService.findAll();
    } catch {
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('meus-pedidos')
  async findMyOrders(@Req() req: RequestWithUser) {
    try {
      return await this.pedidosService.findByUserId(req.user.id);
    } catch {
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  @ResourceOwner()
  @Resource('pedido')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      const pedido = await this.pedidosService.findOne(id);
      if (!pedido) {
        throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);
      }
      return pedido;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  @Roles(Role.FUNCIONARIO, Role.ADMIN)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePedidoDto: UpdatePedidoDto,
  ) {
    try {
      const pedido = await this.pedidosService.update(id, updatePedidoDto);
      return {
        statusCode: 200,
        message: 'Pedido atualizado com sucesso',
        data: pedido,
      };
    } catch (error: unknown) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        (error as { code: string }).code === 'P2025'
      ) {
        throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // NOVA ROTA PARA ATUALIZAR APENAS O STATUS
  @Patch(':id/status')
  @Roles(Role.FUNCIONARIO, Role.ADMIN)
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePedidoStatusDto: UpdatePedidoStatusDto,
  ) {
    try {
      const pedido = await this.pedidosService.updateStatus(
        id,
        updatePedidoStatusDto,
      );
      return {
        statusCode: 200,
        message: `Status do pedido #${id} atualizado com sucesso`,
        data: pedido,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.pedidosService.remove(id);
      return {
        statusCode: 200,
        message: 'Pedido removido com sucesso',
      };
    } catch (error: unknown) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        (error as { code: string }).code === 'P2025'
      ) {
        throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
