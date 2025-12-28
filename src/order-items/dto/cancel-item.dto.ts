import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CancelItemDto {
  @ApiProperty({ example: 'Cliente não quer mais este item' })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  reason: string;
}