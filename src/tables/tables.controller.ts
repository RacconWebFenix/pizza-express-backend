import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ManageTablesService } from './manage-tables.service';
import { TableSessionService } from './table-session.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';

@Controller('tables')
export class TablesController {
  constructor(
    private readonly manageTablesService: ManageTablesService,
    private readonly tableSessionService: TableSessionService,
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
}
