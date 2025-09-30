import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { UploadService } from '../upload/upload.service';
import { FileValidationInterceptor } from '../upload/file-validation.interceptor';
import { PizzaResponseBuilder } from '../common/builders/response.builder';
import { AdminOnly } from '../common/decorators/auth.decorators';

@Controller('pizzas')
export class PizzasController {
  constructor(
    private readonly pizzasService: PizzasService,
    private readonly uploadService: UploadService,
  ) {}

  @Post()
  @AdminOnly()
  async create(@Body() createPizzaDto: CreatePizzaDto) {
    const pizza = await this.pizzasService.create(createPizzaDto);
    return PizzaResponseBuilder.pizzaCreated(pizza);
  }

  @Post('with-image')
  @AdminOnly()
  @UseInterceptors(FileInterceptor('image'), FileValidationInterceptor)
  async createWithImage(
    @Body() createPizzaDto: CreatePizzaDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    let image: string | undefined;

    if (file) {
      image = await this.uploadService.uploadImage(file, 'pizzas');
    }

    const pizzaData = {
      ...createPizzaDto,
      image: image || createPizzaDto.image,
    };

    const pizza = await this.pizzasService.create(pizzaData);
    return PizzaResponseBuilder.pizzaCreated(pizza);
  }

  @Post(':id/upload-image')
  @AdminOnly()
  @UseInterceptors(FileInterceptor('image'), FileValidationInterceptor)
  async uploadImage(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new HttpException(
        'Arquivo de imagem é obrigatório',
        HttpStatus.BAD_REQUEST,
      );
    }

    const image = await this.uploadService.uploadImage(file, 'pizzas');
    const pizza = await this.pizzasService.update(id, { image });

    return PizzaResponseBuilder.success(
      { image: (pizza as { image?: string }).image },
      'Imagem da pizza atualizada com sucesso',
    );
  }

  @Get()
  async findAll() {
    const pizzas = await this.pizzasService.findAll();
    return PizzaResponseBuilder.pizzasList(pizzas);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const pizza = await this.pizzasService.findOne(id);
    return PizzaResponseBuilder.pizzaFound(pizza);
  }

  @Patch(':id')
  @AdminOnly()
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePizzaDto: UpdatePizzaDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    let image: string | undefined;
    if (file) {
      image = await this.uploadService.uploadImage(file, 'pizzas');
    }

    const dataToUpdate: UpdatePizzaDto = {
      ...updatePizzaDto,
      ...(image ? { image } : {}),
    };

    const pizza = await this.pizzasService.update(id, dataToUpdate);
    return PizzaResponseBuilder.pizzaUpdated(pizza);
  }

  @Delete(':id')
  @AdminOnly()
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.pizzasService.remove(id);
    return PizzaResponseBuilder.deleted(result.message);
  }
}
