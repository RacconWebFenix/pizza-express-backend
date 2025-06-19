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
import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Pizzas')
@ApiBearerAuth('JWT')
@Controller('pizzas')
@UseGuards(JwtAuthGuard)
export class PizzasController {
  constructor(private readonly pizzasService: PizzasService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova pizza' })
  @ApiBody({
    schema: {
      example: {
        nome: 'Quatro Queijos',
        descricao: 'Mussarela, parmesão, provolone, gorgonzola',
        preco: 58.49,
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Pizza criada com sucesso',
    schema: {
      example: {
        statusCode: 201,
        message: 'Pizza criada com sucesso',
        data: {
          id: 1,
          nome: 'Quatro Queijos',
          descricao: 'Mussarela, parmesão, provolone, gorgonzola',
          preco: 58.49,
        },
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
          'nome must be longer than or equal to 2 characters',
          'preco must not be less than 0',
        ],
        error: 'Bad Request',
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno do servidor',
    schema: {
      example: {
        statusCode: 500,
        message: 'Erro interno do servidor',
        error: 'Internal Server Error',
      },
    },
  })
  async create(@Body() createPizzaDto: CreatePizzaDto) {
    try {
      const pizza = await this.pizzasService.create(createPizzaDto);
      return {
        statusCode: 201,
        message: 'Pizza criada com sucesso',
        data: pizza,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      const errMsg =
        typeof error === 'object' && error && 'message' in error
          ? (error as { message?: string }).message
          : undefined;
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: errMsg || 'Erro ao criar pizza',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as pizzas' })
  @ApiResponse({ status: 200, description: 'Lista de pizzas' })
  async findAll() {
    return this.pizzasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar pizza por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Pizza encontrada' })
  findOne(@Param('id') id: string) {
    return this.pizzasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar pizza por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ schema: { example: { nome: 'Nova Pizza' } } })
  @ApiResponse({
    status: 200,
    description: 'Pizza atualizada',
    schema: { example: { id: 1, nome: 'Nova Pizza', preco: 60 } },
  })
  @ApiResponse({
    status: 404,
    description: 'Pizza não encontrada',
    schema: {
      example: {
        statusCode: 404,
        message: 'Pizza não encontrada',
        error: 'Not Found',
      },
    },
  })
  update(@Param('id') id: string, @Body() updatePizzaDto: UpdatePizzaDto) {
    return this.pizzasService.update(+id, updatePizzaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover pizza por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Pizza removida',
    schema: { example: { id: 1, nome: 'Quatro Queijos', preco: 58.49 } },
  })
  @ApiResponse({
    status: 404,
    description: 'Pizza não encontrada',
    schema: {
      example: {
        statusCode: 404,
        message: 'Pizza não encontrada',
        error: 'Not Found',
      },
    },
  })
  remove(@Param('id') id: string) {
    return this.pizzasService.remove(+id);
  }
}
