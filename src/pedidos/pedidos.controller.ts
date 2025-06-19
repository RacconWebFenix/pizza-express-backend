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
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Pedidos')
@ApiBearerAuth('JWT')
@Controller('pedidos')
@UseGuards(JwtAuthGuard)
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo pedido' })
  @ApiBody({
    schema: {
      example: {
        clienteId: 1,
        entregadorId: 1,
        pizzas: [1],
        enderecoEntrega: 'Rua das Flores, 123',
        latitude: -23.55052,
        longitude: -46.633308,
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Pedido criado com sucesso' })
  @ApiResponse({
    status: 400,
    description: 'Erro de validação',
    schema: {
      example: {
        statusCode: 400,
        message: 'Dados inválidos',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Não autorizado',
    schema: {
      example: {
        statusCode: 401,
        message: 'Token JWT inválido ou ausente',
      },
    },
  })
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
      let message = 'Erro ao criar pedido';
      if (
        typeof error === 'object' &&
        error &&
        'message' in error &&
        typeof (error as Record<string, unknown>).message === 'string'
      ) {
        message = String((error as Record<string, unknown>).message);
      }
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  @ApiOperation({ summary: 'Listar pedidos' })
  @ApiResponse({ status: 200, description: 'Lista de pedidos' })
  @ApiResponse({
    status: 401,
    description: 'Não autorizado',
    schema: {
      example: {
        statusCode: 401,
        message: 'Token JWT inválido ou ausente',
      },
    },
  })
  async findAll() {
    return this.pedidosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar pedido por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Pedido encontrado' })
  @ApiResponse({
    status: 404,
    description: 'Pedido não encontrado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Pedido não encontrado',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Não autorizado',
    schema: {
      example: {
        statusCode: 401,
        message: 'Token JWT inválido ou ausente',
      },
    },
  })
  findOne(@Param('id') id: string) {
    return this.pedidosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar pedido por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ schema: { example: { enderecoEntrega: 'Novo Endereço' } } })
  @ApiResponse({ status: 200, description: 'Pedido atualizado' })
  @ApiResponse({
    status: 404,
    description: 'Pedido não encontrado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Pedido não encontrado',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Erro de validação',
    schema: {
      example: {
        statusCode: 400,
        message: 'Dados inválidos',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Não autorizado',
    schema: {
      example: {
        statusCode: 401,
        message: 'Token JWT inválido ou ausente',
      },
    },
  })
  update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.pedidosService.update(+id, updatePedidoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover pedido por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Pedido removido' })
  @ApiResponse({
    status: 404,
    description: 'Pedido não encontrado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Pedido não encontrado',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Não autorizado',
    schema: {
      example: {
        statusCode: 401,
        message: 'Token JWT inválido ou ausente',
      },
    },
  })
  remove(@Param('id') id: string) {
    return this.pedidosService.remove(+id);
  }
}
