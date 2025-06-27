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

@Controller('entregadores')
@UseGuards(JwtAuthGuard)
export class EntregadoresController {
  constructor(private readonly entregadoresService: EntregadoresService) {}

  @Post()
  async create(@Body() createEntregadoreDto: CreateEntregadoreDto) {
    try {
      const entregador =
        await this.entregadoresService.create(createEntregadoreDto);
      return {
        statusCode: 201,
        message: 'Entregador criado com sucesso',
        data: entregador,
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
      return await this.entregadoresService.findAll();
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
      const entregador = await this.entregadoresService.findOne(+id);
      if (!entregador) {
        throw new HttpException(
          'Entregador não encontrado',
          HttpStatus.NOT_FOUND,
        );
      }
      return entregador;
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
    @Body() updateEntregadoreDto: UpdateEntregadoreDto,
  ) {
    try {
      const entregador = await this.entregadoresService.update(
        +id,
        updateEntregadoreDto,
      );
      return {
        statusCode: 200,
        message: 'Entregador atualizado com sucesso',
        data: entregador,
      };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new HttpException(
          'Entregador não encontrado',
          HttpStatus.NOT_FOUND,
        );
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
      await this.entregadoresService.remove(+id);
      return {
        statusCode: 200,
        message: 'Entregador removido com sucesso',
      };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new HttpException(
          'Entregador não encontrado',
          HttpStatus.NOT_FOUND,
        );
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
