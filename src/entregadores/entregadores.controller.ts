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
import { EntregadoresService } from './entregadores.service';
import { CreateEntregadoreDto } from './dto/create-entregadore.dto';
import { UpdateEntregadoreDto } from './dto/update-entregadore.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Entregadores')
@ApiBearerAuth('JWT')
@Controller('entregadores')
@UseGuards(JwtAuthGuard)
export class EntregadoresController {
  constructor(private readonly entregadoresService: EntregadoresService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar novo entregador' })
  @ApiBody({
    schema: {
      example: {
        nome: 'Maria Entregadora',
        email: 'maria@mail.com',
        senha: '123456',
        telefone: '11988888888',
        endereco: 'Rua das Oliveiras, 456',
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Entregador registrado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro de validação ou conflito',
    schema: {
      example: {
        statusCode: 400,
        message: 'Email já cadastrado',
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
  async create(@Body() createEntregadoreDto: CreateEntregadoreDto) {
    try {
      const entregadore =
        await this.entregadoresService.create(createEntregadoreDto);
      return {
        statusCode: 201,
        message: 'Entregador criado com sucesso',
        data: entregadore,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      let message = 'Erro ao criar entregador';
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
  @ApiOperation({ summary: 'Listar entregadores' })
  @ApiResponse({ status: 200, description: 'Lista de entregadores' })
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
    return this.entregadoresService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar entregador por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Entregador encontrado' })
  @ApiResponse({
    status: 404,
    description: 'Entregador não encontrado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Entregador não encontrado',
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
    return this.entregadoresService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar entregador por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({
    schema: {
      example: {
        nome: 'Novo Nome Entregador',
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Entregador atualizado' })
  @ApiResponse({
    status: 404,
    description: 'Entregador não encontrado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Entregador não encontrado',
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
  update(
    @Param('id') id: string,
    @Body() updateEntregadoreDto: UpdateEntregadoreDto,
  ) {
    return this.entregadoresService.update(+id, updateEntregadoreDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover entregador por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Entregador removido' })
  @ApiResponse({
    status: 404,
    description: 'Entregador não encontrado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Entregador não encontrado',
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
    return this.entregadoresService.remove(+id);
  }
}
