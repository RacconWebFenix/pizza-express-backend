import { PartialType } from '@nestjs/mapped-types';
import { CreateTableDto } from './create-table.dto';
import { IsOptional, IsEnum } from 'class-validator';
import { TableStatus } from '@prisma/client';

export class UpdateTableDto extends PartialType(CreateTableDto) {
  @IsOptional()
  @IsEnum(TableStatus)
  status?: TableStatus;
}
