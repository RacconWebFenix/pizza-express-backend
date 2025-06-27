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
} from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('pedidos')
@UseGuards(JwtAuthGuard)
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
  async findAll() {
    try {
      return await this.pedidosService.findAll();
    } catch (error) {
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const pedido = await this.pedidosService.findOne(+id);
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
  async update(
    @Param('id') id: string,
    @Body() updatePedidoDto: UpdatePedidoDto,
  ) {
    try {
      const pedido = await this.pedidosService.update(+id, updatePedidoDto);
      return {
        statusCode: 200,
        message: 'Pedido atualizado com sucesso',
        data: pedido,
      };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.pedidosService.remove(+id);
      return {
        statusCode: 200,
        message: 'Pedido removido com sucesso',
      };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
