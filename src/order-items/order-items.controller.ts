import {
  Controller,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
  Get,
  Req,
} from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { AddItemDto } from './dto/add-item.dto';
import { UpdateItemQuantityDto } from './dto/update-item-quantity.dto';
import { CancelItemDto } from './dto/cancel-item.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { OrderModifiableGuard } from './guards/order-modifiable.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { Request } from 'express';

interface AuthenticatedUser {
  userId?: number;
  id?: number;
}

interface AuthenticatedRequest extends Request {
  user?: AuthenticatedUser;
}

@ApiTags('Order Items')
@ApiBearerAuth()
@Controller('orders/:orderId/items')
@UseGuards(JwtAuthGuard, RolesGuard)
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  @UseGuards(OrderModifiableGuard)
  @Roles('FUNCIONARIO', 'ADMIN', 'CLIENTE')
  @ApiOperation({ summary: 'Add item to existing order' })
  async addItem(
    @Param('orderId', ParseIntPipe) orderId: number,
    @Body() dto: AddItemDto,
    @Req() req: AuthenticatedRequest,
  ) {
    const userId = req.user?.userId ?? req.user?.id;
    return this.orderItemsService.addItem(orderId, dto, userId);
  }

  @Delete(':itemId')
  @UseGuards(OrderModifiableGuard)
  @Roles('FUNCIONARIO', 'ADMIN', 'CLIENTE')
  @ApiOperation({ summary: 'Remove/cancel item from order' })
  async removeItem(
    @Param('orderId', ParseIntPipe) orderId: number,
    @Param('itemId') itemId: string,
    @Body() dto: CancelItemDto,
    @Req() req: AuthenticatedRequest,
  ) {
    const userId = req.user?.userId ?? req.user?.id;
    return this.orderItemsService.removeItem(orderId, itemId, dto, userId);
  }

  @Patch(':itemId/quantity')
  @UseGuards(OrderModifiableGuard)
  @Roles('FUNCIONARIO', 'ADMIN', 'CLIENTE')
  @ApiOperation({ summary: 'Update item quantity' })
  async updateQuantity(
    @Param('orderId', ParseIntPipe) orderId: number,
    @Param('itemId') itemId: string,
    @Body() dto: UpdateItemQuantityDto,
    @Req() req: AuthenticatedRequest,
  ) {
    const userId = req.user?.userId ?? req.user?.id;
    return this.orderItemsService.updateQuantity(orderId, itemId, dto, userId);
  }

  @Get()
  @Roles('FUNCIONARIO', 'ADMIN', 'CLIENTE')
  @ApiOperation({ summary: 'Get all items in order' })
  async findAll(@Param('orderId', ParseIntPipe) orderId: number) {
    return this.orderItemsService.findAllByOrder(orderId);
  }

  @Get('history')
  @Roles('FUNCIONARIO', 'ADMIN')
  @ApiOperation({ summary: 'Get order modification history' })
  async getHistory(@Param('orderId', ParseIntPipe) orderId: number) {
    return this.orderItemsService.getModificationHistory(orderId);
  }
}
