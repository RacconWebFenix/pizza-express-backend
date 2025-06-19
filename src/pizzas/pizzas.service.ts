import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';

@Injectable()
export class PizzasService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPizzaDto: CreatePizzaDto) {
    return this.prisma.pizza.create({ data: createPizzaDto });
  }

  findAll() {
    return this.prisma.pizza.findMany();
  }

  findOne(id: number) {
    return this.prisma.pizza.findUnique({ where: { id } });
  }

  update(id: number, updatePizzaDto: UpdatePizzaDto) {
    return this.prisma.pizza.update({ where: { id }, data: updatePizzaDto });
  }

  remove(id: number) {
    return this.prisma.pizza.delete({ where: { id } });
  }
}
