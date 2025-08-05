import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Get,
  Req,
  UseGuards,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
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

  @Get('config')
  getAuthConfig() {
    return {
      environment: process.env.NODE_ENV,
      frontendUrl:
        process.env.NODE_ENV === 'production'
          ? process.env.FRONTEND_URL
          : process.env.FRONTEND_URL_DEV || 'http://localhost:3000',
      googleCallbackUrl:
        process.env.NODE_ENV === 'production'
          ? process.env.GOOGLE_CALLBACK_URL
          : 'http://localhost:10000/auth/google/callback',
      corsOrigins: [
        process.env.FRONTEND_URL,
        process.env.FRONTEND_URL_DEV || 'http://localhost:3000',
      ],
    };
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(
    @Req() req: Request & { user: Omit<User, 'password'> },
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const { access_token } = this.authService.login({
        id: user.id,
        email: user.email,
      });

      // Determina a URL do frontend baseada no ambiente
      const frontendUrl =
        process.env.NODE_ENV === 'production'
          ? process.env.FRONTEND_URL
          : process.env.FRONTEND_URL_DEV || 'http://localhost:3000';

      // Redireciona para o frontend com o token
      const redirectUrl = `${frontendUrl}/auth-callback?token=${access_token}`;

      return res.redirect(redirectUrl);
    } catch (error) {
      console.error('❌ Erro na autenticação Google:', error);

      // Redireciona para o frontend com erro
      const frontendUrl =
        process.env.NODE_ENV === 'production'
          ? process.env.FRONTEND_URL
          : process.env.FRONTEND_URL_DEV || 'http://localhost:3000';

      const errorUrl = `${frontendUrl}/auth-callback?error=authentication_failed`;

      console.log('🚨 Redirecting to error page:', errorUrl);

      return res.redirect(errorUrl);
    }
  }
}
