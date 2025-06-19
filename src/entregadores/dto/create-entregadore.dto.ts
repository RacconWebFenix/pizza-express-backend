import { IsString, MinLength, IsOptional } from 'class-validator';

export class CreateEntregadoreDto {
  @IsString()
  @MinLength(2)
  nome: string;

  @IsOptional()
  @IsString()
  telefone?: string;
}
