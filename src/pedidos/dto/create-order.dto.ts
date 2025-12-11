import {
  IsNotEmpty,
  IsEnum,
  IsArray,
  IsString,
  IsOptional,
  ValidateNested,
  IsUUID,
  IsNumber,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class OrderItemDto {
  @IsUUID()
  @IsNotEmpty()
  productId: string;

  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(1)
  @Type(() => Number)
  quantity: number;
}

export class CreateOrderDto {
  @IsEnum(['DELIVERY', 'DINE_IN'])
  @IsNotEmpty()
  type: 'DELIVERY' | 'DINE_IN';

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @IsOptional()
  @IsNumber()
  addressId?: number; // Obrigatório se type === 'DELIVERY'

  @IsOptional()
  @IsUUID()
  tableId?: string; // Obrigatório se type === 'DINE_IN'

  @IsOptional()
  @IsString()
  observations?: string;
}
