import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AdminOnly } from '../common/decorators/auth.decorators';
import { UserResponseBuilder } from '../common/builders/response.builder';

interface PrismaError {
  code: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.usersService.create(createUserDto);
      return user;
    } catch (error: unknown) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        (error as { code: string }).code === 'P2002'
      ) {
        throw new HttpException('E-mail já cadastrado', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  @AdminOnly()
  async findAll(@Query('email') email?: string) {
    if (email) {
      const user = await this.usersService.findByEmail(email);
      return UserResponseBuilder.userFound(user);
    }
    const users = await this.usersService.findAll();
    return UserResponseBuilder.usersList(users);
  }

  @Get(':id')
  @AdminOnly()
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(+id);
    return UserResponseBuilder.userFound(user);
  }

  @Patch(':id')
  @AdminOnly()
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const user = await this.usersService.update(+id, updateUserDto);
      return UserResponseBuilder.userUpdated(user);
    } catch (error: unknown) {
      const prismaError = error as PrismaError;
      if (prismaError.code === 'P2025') {
        throw new HttpException(
          'Registro não encontrado',
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
  @AdminOnly()
  async remove(@Param('id') id: string) {
    try {
      await this.usersService.remove(+id);
      return UserResponseBuilder.userDeleted();
    } catch (error: unknown) {
      const prismaError = error as PrismaError;
      if (prismaError.code === 'P2025') {
        throw new HttpException(
          'Registro não encontrado',
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
