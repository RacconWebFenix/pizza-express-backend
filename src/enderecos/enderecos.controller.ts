import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { CreateEnderecoDto } from '../users/dto/create-endereco.dto';
import { UpdateEnderecoDto } from '../users/dto/update-endereco.dto';

@Controller('enderecos')
export class EnderecosController {
  constructor(private readonly enderecosService: EnderecosService) {}

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.enderecosService.findOne(Number(id));
  }

  @Post()
  async create(@Body() dto: CreateEnderecoDto) {
    return this.enderecosService.create(dto);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateEnderecoDto) {
    return this.enderecosService.update(Number(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.enderecosService.remove(Number(id));
  }
}
