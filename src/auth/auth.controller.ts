import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateClienteDto } from '../clientes/dto/create-cliente.dto';

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
      if (!user) {
        throw new HttpException(
          'Credenciais inválidas',
          HttpStatus.UNAUTHORIZED,
        );
      }
      return this.authService.login(user);
    } catch {
      throw new HttpException('Credenciais inválidas', HttpStatus.UNAUTHORIZED);
    }
  }

  @Post('register')
  async register(@Body() registerDto: CreateClienteDto) {
    try {
      const result = await this.authService.register(registerDto);
      return result;
    } catch (error) {
      // Log detalhado para depuração
      // eslint-disable-next-line no-console
      console.error('Erro no registro de cliente:', {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        message: error instanceof Error ? error.message : error,
        stack: error instanceof Error ? error.stack : undefined,
        error,
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
}
