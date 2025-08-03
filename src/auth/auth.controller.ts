import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    try {
      const user = await this.authService.validateUser(
        loginDto.email,
        loginDto.password,
      );
      if (
        !user ||
        typeof user.id !== 'number' ||
        typeof user.email !== 'string'
      ) {
        throw new HttpException(
          'Credenciais inválidas',
          HttpStatus.UNAUTHORIZED,
        );
      }
      return this.authService.login({ id: user.id, email: user.email });
    } catch {
      throw new HttpException('Credenciais inválidas', HttpStatus.UNAUTHORIZED);
    }
  }

  @Post('register')
  async register(@Body() registerDto: CreateUserDto) {
    try {
      const result = await this.authService.register(registerDto);
      return result;
    } catch (error) {
      // Log detalhado para depuração
      console.error('Erro no registro de cliente:', {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        error: error instanceof Error ? error : undefined,
      });
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        (error as Record<string, any>).code === 'P2002'
      ) {
        throw new HttpException('Email já cadastrado', HttpStatus.CONFLICT);
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    // Inicia fluxo OAuth com Google
  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req: Request & { user: Omit<User, 'password'> }) {
    const user = req.user;
    return this.authService.login({ id: user.id, email: user.email });
  }
}
