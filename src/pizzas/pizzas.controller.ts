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
import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Controller('pizzas')
@UseGuards(JwtAuthGuard)
export class PizzasController {
  constructor(
    private readonly pizzasService: PizzasService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Post('upload-image')
  @UseInterceptors(
    FileInterceptor('image', {
      limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    }),
  )
  async uploadImage(@UploadedFile() file?: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo foi enviado');
    }

    const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    if (!allowedMimes.includes(file.mimetype || '')) {
      throw new BadRequestException(
        'Apenas arquivos de imagem são permitidos!',
      );
    }

    try {
      const imageUrl = await this.cloudinaryService.uploadImage(file);
      return {
        statusCode: 200,
        message: 'Imagem enviada com sucesso',
        data: {
          imageUrl,
          originalname: file.originalname || '',
          mimetype: file.mimetype || '',
          size: file.size || 0,
        },
      };
    } catch {
      throw new HttpException(
        'Erro ao fazer upload da imagem',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('with-image')
  @UseInterceptors(
    FileInterceptor('image', {
      limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    }),
  )
  async createWithImage(
    @UploadedFile() file?: Express.Multer.File,
    @Body() body?: Record<string, string>,
  ) {
    try {
      let imageUrl: string | undefined;

      if (file) {
        const allowedMimes = [
          'image/jpeg',
          'image/jpg',
          'image/png',
          'image/gif',
        ];
        if (!allowedMimes.includes(file.mimetype || '')) {
          throw new BadRequestException(
            'Apenas arquivos de imagem são permitidos!',
          );
        }
        imageUrl = await this.cloudinaryService.uploadImage(file);
      }

      const pizzaData: CreatePizzaDto = {
        nome: body?.nome || '',
        descricao: body?.descricao || '',
        preco: parseFloat(body?.preco || '0'),
        image: imageUrl,
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

  @Post()
  async create(@Body() body: CreatePizzaDto) {
    try {
      const data = {
        ...body,
        imagemUrl: body.image ?? null,
      };
      delete (data as CreatePizzaDto).image;
      const pizza = await this.pizzasService.create(data);
      return {
        statusCode: 201,
        message: 'Pizza criada com sucesso',
        data: {
          ...pizza,
          image: pizza.imagemUrl,
          imagemUrl: undefined,
        },
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
  async update(@Param('id') id: string, @Body() body: CreatePizzaDto) {
    try {
      const data = {
        ...body,
        imagemUrl: body.image ?? null,
      };
      delete (data as CreatePizzaDto).image;
      const pizza = await this.pizzasService.update(+id, data);
      return {
        statusCode: 200,
        message: 'Pizza atualizada com sucesso',
        data: {
          ...pizza,
          image: pizza.imagemUrl,
          imagemUrl: undefined,
        },
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
