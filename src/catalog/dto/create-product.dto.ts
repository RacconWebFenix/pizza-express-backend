import { IsNotEmpty, IsString, IsNumber, IsUUID, IsOptional, Min, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  name: string;

  @IsString()
  @IsOptional()
  @MaxLength(1000)
  description?: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Type(() => Number)
  price: number;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsUUID()
  @IsNotEmpty()
  categoryId: string;
}