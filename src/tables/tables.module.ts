import { Module } from '@nestjs/common';
import { ManageTablesService } from './manage-tables.service';
import { TableSessionService } from './table-session.service';
import { TablesController } from './tables.controller';
import { QRCodeService } from './qrcode.service';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TablesController],
  providers: [ManageTablesService, TableSessionService, QRCodeService],
  exports: [ManageTablesService, TableSessionService],
})
export class TablesModule {}
