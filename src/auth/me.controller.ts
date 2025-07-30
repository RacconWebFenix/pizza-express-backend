import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Request } from 'express';

@Controller('me')
export class MeController {
  @Get()
  @UseGuards(JwtAuthGuard)
  getMe(@Req() req: Request) {
    console.log('[MeController] /me endpoint chamado');
    return req.user;
  }
}
