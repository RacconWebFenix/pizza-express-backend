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
  Query,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';

@ApiTags('Clientes')
@ApiBearerAuth('JWT')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar novo cliente' })
  @ApiBody({
    schema: {
      example: {
        nome: 'João Silva',
        email: 'joao@mail.com',
        senha: '123456',
        telefone: '11999999999',
        endereco: 'Rua das Flores, 123',
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Cliente registrado com sucesso',
    schema: {
      example: {
        id: 1,
        nome: 'João Silva',
        email: 'joao@mail.com',
        telefone: '11999999999',
        endereco: 'Rua das Flores, 123',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Erro de validação',
    schema: {
      example: {
        statusCode: 400,
        message: [
          'email must be an email',
          'senha must be longer than or equal to 6 characters',
        ],
        error: 'Bad Request',
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  async create(@Body() createClienteDto: CreateClienteDto) {
    try {
      const cliente = await this.clientesService.create(createClienteDto);
      return {
        statusCode: 201,
        message: 'Cliente criado com sucesso',
        data: cliente,
      };
    } catch (error: unknown) {
      if (error instanceof HttpException) {
        throw error;
      }
      let message = 'Erro ao criar cliente';
      if (
        typeof error === 'object' &&
        error !== null &&
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
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Listar clientes ou buscar por email' })
  @ApiQuery({ name: 'email', required: false })
  @ApiResponse({ status: 200, description: 'Lista de clientes' })
  async findAll(@Query('email') email?: string) {
    if (email) {
      return await this.clientesService.findByEmail(email);
    }
    return await this.clientesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Buscar cliente por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Cliente encontrado' })
  async findOne(@Param('id') id: string) {
    return await this.clientesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Atualizar cliente por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ schema: { example: { nome: 'Novo Nome' } } })
  @ApiResponse({
    status: 200,
    description: 'Cliente atualizado',
    schema: { example: { id: 1, nome: 'Novo Nome', email: 'joao@mail.com' } },
  })
  @ApiResponse({
    status: 404,
    description: 'Cliente não encontrado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Cliente não encontrado',
        error: 'Not Found',
      },
    },
  })
  async update(
    @Param('id') id: string,
    @Body() updateClienteDto: UpdateClienteDto,
  ) {
    return await this.clientesService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Remover cliente por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Cliente removido',
    schema: { example: { id: 1, nome: 'João Silva', email: 'joao@mail.com' } },
  })
  @ApiResponse({
    status: 404,
    description: 'Cliente não encontrado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Cliente não encontrado',
        error: 'Not Found',
      },
    },
  })
  async remove(@Param('id') id: string) {
    return await this.clientesService.remove(+id);
  }
}
