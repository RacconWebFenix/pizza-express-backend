import {
  IsNotEmpty,
  IsNumber,
  IsArray,
  ValidateNested,
  IsOptional,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';

export class SplitItemDto {
  @IsOptional()
  @IsNumber()
  userId?: number;

  @IsNotEmpty()
  @IsNumber()
  amount: number;
}

export class SplitPaymentDto {
  @IsNotEmpty()
  @IsNumber()
  orderId: number;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => SplitItemDto)
  splits: SplitItemDto[];
}
