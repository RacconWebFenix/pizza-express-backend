import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ManageTablesService } from './manage-tables.service';
import { TableSessionService } from './table-session.service';
import { QRCodeService } from './qrcode.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('tables')
@UseGuards(JwtAuthGuard)
export class TablesController {
  constructor(
    private readonly manageTablesService: ManageTablesService,
    private readonly tableSessionService: TableSessionService,
    private readonly qrcodeService: QRCodeService,
  ) {}

  // CRUD de Mesas
  @Post()
  createTable(@Body() createTableDto: CreateTableDto) {
    return this.manageTablesService.create(createTableDto);
  }

  @Get()
  findAllTables() {
    return this.manageTablesService.findAll();
  }

  @Get('available')
  getAvailableTables() {
    return this.manageTablesService.getAvailableTables();
  }

  @Get(':id')
  findOneTable(@Param('id') id: string) {
    return this.manageTablesService.findOne(id);
  }

  @Patch(':id')
  updateTable(@Param('id') id: string, @Body() updateTableDto: UpdateTableDto) {
    return this.manageTablesService.update(id, updateTableDto);
  }

  @Delete(':id')
  removeTable(@Param('id') id: string) {
    return this.manageTablesService.remove(id);
  }

  // Gestão de Sessões
  @Post(':tableId/sessions/open')
  openSession(@Param('tableId') tableId: string) {
    return this.tableSessionService.openSession(tableId);
  }

  @Get(':tableId/sessions/active')
  getActiveSession(@Param('tableId') tableId: string) {
    return this.tableSessionService.getActiveSession(tableId);
  }

  @Get(':tableId/bill')
  getBill(@Param('tableId') tableId: string) {
    return this.tableSessionService.getBill(tableId);
  }

  @Post(':tableId/sessions/close')
  closeSession(@Param('tableId') tableId: string) {
    return this.tableSessionService.closeSession(tableId);
  }

  // ==================== QR CODE ENDPOINTS ====================

  /**
   * GET /tables/:id/qrcode
   * Retorna QR Code em base64
   */
  @Get(':id/qrcode')
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN, Role.FUNCIONARIO)
  async getQRCode(@Param('id') id: string) {
    const table = await this.manageTablesService.findOne(id);
    const qrCode = await this.qrcodeService.generateTableQR(
      table.id,
      table.number,
    );

    return {
      tableId: table.id,
      tableNumber: table.number,
      qrCode,
      url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/mesa/${table.id}`,
    };
  }

  /**
   * GET /tables/:id/qrcode/download
   * Download QR Code como PNG
   */
  @Get(':id/qrcode/download')
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN, Role.FUNCIONARIO)
  async downloadQRCode(@Param('id') id: string, @Res() res: Response) {
    const table = await this.manageTablesService.findOne(id);
    const buffer = await this.qrcodeService.generateTableQRBuffer(
      table.id,
      table.number,
    );

    res.set({
      'Content-Type': 'image/png',
      'Content-Disposition': `attachment; filename="mesa-${table.number}-qrcode.png"`,
    });

    res.send(buffer);
  }
}
