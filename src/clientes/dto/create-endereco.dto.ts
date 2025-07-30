import { IsString, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateEnderecoDto {
  @IsOptional()
  clienteId?: number;
  @IsString()
  @IsNotEmpty()
  cep: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsString()
  @IsNotEmpty()
  logradouro: string;

  @IsString()
  @IsNotEmpty()
  numero: string;

  @IsString()
  @IsNotEmpty()
  bairro: string;

  @IsString()
  @IsNotEmpty()
  cidade: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsOptional()
  @IsString()
  complemento?: string;

  @IsOptional()
  @IsString()
  pais?: string;

  @IsOptional()
  @IsString()
  referencia?: string;

  @IsOptional()
  @IsBoolean()
  principal?: boolean;
}
