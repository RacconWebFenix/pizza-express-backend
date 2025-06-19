import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  BadRequestException,
  ConflictException,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateClienteDto } from '../clientes/dto/create-cliente.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login do cliente (JWT)' })
  @ApiBody({
    schema: {
      example: { email: 'joao@mail.com', password: '123456' },
    },
  })
  @ApiResponse({ status: 201, description: 'JWT gerado com sucesso' })
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) throw new UnauthorizedException('Credenciais inválidas');
    return this.authService.login(user);
  }

  @Post('register')
  @ApiOperation({ summary: 'Registrar novo cliente' })
  @ApiBody({
    schema: {
      example: {
        nome: 'João Silva',
        email: 'joao@mail.com',
        password: '123456',
        telefone: '11999999999',
        endereco: 'Rua das Flores, 123',
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Cliente registrado com sucesso' })
  async register(
    @Body(new ValidationPipe({ whitelist: true, transform: true }))
    createClienteDto: CreateClienteDto,
  ) {
    try {
      return await this.authService.register(createClienteDto);
    } catch (err) {
      if (
        typeof err === 'object' &&
        err &&
        'code' in err &&
        (err as Record<string, unknown>).code === 'P2002'
      ) {
        throw new ConflictException('Email já cadastrado');
      }
      if (
        err instanceof BadRequestException ||
        err instanceof ConflictException
      ) {
        throw err;
      }
      // Log detalhado para debug
      console.error('Erro no registro:', err);
      let message = 'Erro ao registrar cliente';
      if (
        typeof err === 'object' &&
        err &&
        'message' in err &&
        typeof (err as Record<string, unknown>).message === 'string'
      ) {
        message = String((err as Record<string, unknown>).message);
      }
      throw new BadRequestException(message);
    }
  }
}
