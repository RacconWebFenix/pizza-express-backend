import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { SplitPaymentService } from './split-payment.service';
import { CreateSplitPaymentDto } from './dto/split-payment.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Split Payments')
@ApiBearerAuth()
@Controller('split-payments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SplitPaymentController {
  constructor(private readonly splitPaymentService: SplitPaymentService) {}

  @Post()
  @Roles('FUNCIONARIO', 'ADMIN')
  @ApiOperation({ summary: 'Process split payment for table session' })
  async create(@Body() dto: CreateSplitPaymentDto) {
    return this.splitPaymentService.processSplitPayment(dto);
  }

  @Get('session/:sessionId')
  @Roles('FUNCIONARIO', 'ADMIN')
  @ApiOperation({ summary: 'Get all payments for session' })
  async findBySession(@Param('sessionId') sessionId: string) {
    return this.splitPaymentService.findBySession(sessionId);
  }

  @Get('session/:sessionId/remaining')
  @Roles('FUNCIONARIO', 'ADMIN')
  @ApiOperation({ summary: 'Get remaining amount to pay' })
  async getRemainingAmount(@Param('sessionId') sessionId: string) {
    const remaining =
      await this.splitPaymentService.getRemainingAmount(sessionId);
    return { sessionId, remaining };
  }
}
