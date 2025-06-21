import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Request } from 'express';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Auth')
@ApiBearerAuth('JWT')
@Controller('me')
export class MeController {
  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Retorna informações do usuário autenticado' })
  @ApiResponse({ status: 200, description: 'Usuário autenticado' })
  @ApiResponse({ status: 401, description: 'Não autorizado' })
  getMe(@Req() req: Request) {
    return req.user;
  }
}
