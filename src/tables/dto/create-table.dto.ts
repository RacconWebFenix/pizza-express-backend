import { IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTableDto {
  @IsInt()
  @Min(1)
  @Max(999)
  @Type(() => Number)
  number: number;
}