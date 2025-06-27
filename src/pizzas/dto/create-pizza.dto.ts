import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreatePizzaDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsNumber()
  preco: number;

  @IsOptional()
  @IsString()
  imagemUrl?: string;
}
