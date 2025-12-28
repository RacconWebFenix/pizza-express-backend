import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsArray,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum OrderType {
  DELIVERY = 'DELIVERY',
  DINE_IN = 'DINE_IN',
}

export class OrderItemDto {
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}

export class CreateOrderDto {
  @IsEnum(OrderType)
  @IsNotEmpty()
  type: OrderType;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @IsOptional()
  @IsNumber()
  addressId?: number;

  @IsOptional()
  @IsString()
  tableId?: string;

  @IsOptional()
  @IsString()
  observations?: string;
}
