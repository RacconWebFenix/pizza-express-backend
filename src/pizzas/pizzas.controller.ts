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
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'; // Certifique-se de ter o tipo
import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Controller('pizzas')
@UseGuards(JwtAuthGuard)
export class PizzasController {
  constructor(
    private readonly pizzasService: PizzasService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  // O único método POST necessário
  @Post()
  @UseInterceptors(FileInterceptor('imagem')) // Usa o nome 'imagem' do frontend
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createPizzaDto: CreatePizzaDto, // Validação automática com o Pipe
  ) {
    // 1. Validar o arquivo recebido (se existir)
    if (file) {
      const allowedMimes = ['image/jpeg', 'image/png', 'image/webp'];
      if (!allowedMimes.includes(file.mimetype)) {
        throw new BadRequestException(
          'Formato de imagem inválido. Use JPG, PNG ou WebP.',
        );
      }
    } else {
      throw new BadRequestException(
        'A imagem é obrigatória para criar uma pizza.',
      );
    }

    try {
      const uploadResult = await this.cloudinaryService.uploadImage(file);

      const pizzaDataWithImageUrl = {
        ...createPizzaDto,
        image: uploadResult,
      };

      const pizza = await this.pizzasService.create(pizzaDataWithImageUrl);

      return {
        statusCode: 201,
        message: 'Pizza criada com sucesso!',
        data: pizza,
      };
    } catch (error: unknown) {
      if (error instanceof HttpException) {
        throw error;
      }

      if (error instanceof Error) {
        throw new HttpException(
          error.message,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      throw new HttpException(
        'Ocorreu um erro inesperado no servidor.',
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
  @UseInterceptors(FileInterceptor('imagem'))
  async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updatePizzaDto: UpdatePizzaDto,
  ) {
    // Lógica similar de upload se um novo arquivo for enviado
    if (file) {
      const imageUrl = await this.cloudinaryService.uploadImage(file);
      updatePizzaDto.image = imageUrl;
    }

    try {
      const pizza = await this.pizzasService.update(+id, updatePizzaDto);
      return {
        statusCode: 200,
        message: 'Pizza atualizada com sucesso',
        data: pizza,
      };
    } catch (error: unknown) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        error.code === 'P2025'
      ) {
        throw new HttpException('Pizza não encontrada', HttpStatus.NOT_FOUND);
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
      await this.pizzasService.remove(+id);
      return {
        statusCode: 200,
        message: 'Pizza removida com sucesso',
      };
    } catch (error: unknown) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        error.code === 'P2025'
      ) {
        throw new HttpException('Pizza não encontrada', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
