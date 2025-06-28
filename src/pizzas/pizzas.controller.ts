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
import { UploadService } from '../upload/upload.service';
import { FileValidationInterceptor } from '../upload/file-validation.interceptor';

@Controller('pizzas')
@UseGuards(JwtAuthGuard)
export class PizzasController {
  constructor(
    private readonly pizzasService: PizzasService,
    private readonly uploadService: UploadService,
  ) {}

  @Post()
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
  @UseInterceptors(FileInterceptor('imagem'), FileValidationInterceptor)
  async createWithImage(
    @Body() createPizzaDto: CreatePizzaDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    try {
      let imagemUrl: string | undefined;

      if (file) {
        imagemUrl = await this.uploadService.uploadImage(file, 'pizzas');
      }

      const pizzaData = {
        ...createPizzaDto,
        imagemUrl: imagemUrl || createPizzaDto.imagemUrl,
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
  @UseInterceptors(FileInterceptor('imagem'), FileValidationInterceptor)
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

      const imagemUrl = await this.uploadService.uploadImage(file, 'pizzas');

      const pizza = await this.pizzasService.update(+id, { imagemUrl });

      return {
        statusCode: 200,
        message: 'Imagem da pizza atualizada com sucesso',
        data: { imagemUrl: pizza.imagemUrl },
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
  async update(
    @Param('id') id: string,
    @Body() updatePizzaDto: UpdatePizzaDto,
  ) {
    try {
      const pizza = await this.pizzasService.update(+id, updatePizzaDto);
      return {
        statusCode: 200,
        message: 'Pizza atualizada com sucesso',
        data: pizza,
      };
    } catch (error: any) {
      if (error?.code === 'P2025') {
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
    } catch (error: any) {
      if (error?.code === 'P2025') {
        throw new HttpException('Pizza não encontrada', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
