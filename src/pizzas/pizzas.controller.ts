// ARQUIVO: pizzas.controller.ts (VERSÃO CORRIGIDA)

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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { UploadService } from '../upload/upload.service';
import { FileValidationInterceptor } from '../upload/file-validation.interceptor';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('pizzas')
export class PizzasController {
  constructor(
    private readonly pizzasService: PizzasService,
    private readonly uploadService: UploadService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
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
        errMsg || 'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('with-image')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @UseInterceptors(FileInterceptor('image'), FileValidationInterceptor)
  async createWithImage(
    @Body() createPizzaDto: CreatePizzaDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    try {
      let image: string | undefined;

      if (file) {
        image = await this.uploadService.uploadImage(file, 'pizzas');
      }

      const pizzaData = {
        ...createPizzaDto,
        image: image || createPizzaDto.image,
      };

      const pizza = await this.pizzasService.create(pizzaData);
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
        errMsg || 'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post(':id/upload-image')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @UseInterceptors(FileInterceptor('image'), FileValidationInterceptor)
  async uploadImage(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    try {
      if (!file) {
        throw new HttpException(
          'Arquivo de imagem é obrigatório',
          HttpStatus.BAD_REQUEST,
        );
      }

      const image = await this.uploadService.uploadImage(file, 'pizzas');

      const pizza = await this.pizzasService.update(+id, { image });

      return {
        statusCode: 200,
        message: 'Imagem da pizza atualizada com sucesso',
        data: { image: (pizza as { image?: string }).image },
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
        errMsg || 'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.pizzasService.findAll();
    } catch {
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.pizzasService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @UseInterceptors(FileInterceptor('image')) // Espera um campo opcional 'image'
  async update(
    @Param('id') id: string,
    @Body() updatePizzaDto: UpdatePizzaDto, // Usa o DTO para validar os dados de texto
    @UploadedFile() file?: Express.Multer.File, // O arquivo é opcional
  ) {
    try {
      let image: string | undefined;
      if (file) {
        image = await this.uploadService.uploadImage(file, 'pizzas');
      }
      const dataToUpdate: UpdatePizzaDto = {
        ...updatePizzaDto,
        ...(image ? { image } : {}),
      };
      const pizza = await this.pizzasService.update(+id, dataToUpdate);
      return {
        statusCode: 200,
        message: 'Pizza atualizada com sucesso',
        data: pizza,
      };
    } catch (error) {
      if ((error as { code?: string })?.code === 'P2025') {
        throw new HttpException('Pizza não encontrada', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async remove(@Param('id') id: string) {
    try {
      await this.pizzasService.remove(+id);
      return {
        statusCode: 200,
        message: 'Pizza removida com sucesso',
      };
    } catch (error) {
      if ((error as { code?: string })?.code === 'P2025') {
        throw new HttpException('Pizza não encontrada', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
