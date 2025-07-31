import {
  IsString,
  IsBoolean,
  IsOptional,
  IsNotEmpty,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateEnderecoDto {
  @IsOptional()
  clienteId?: number;
  @IsString({ message: 'O CEP deve ser um texto' })
  @IsNotEmpty({ message: 'O CEP é obrigatório' })
  @Matches(/^\d{5}-?\d{3}$/, {
    message: 'O CEP deve estar no formato 00000-000',
  })
  cep: string;

  @IsString({ message: 'O tipo é obrigatório' })
  @IsNotEmpty({ message: 'O tipo é obrigatório' })
  tipo: string;

  @IsString({ message: 'O logradouro é obrigatório' })
  @IsNotEmpty({ message: 'O logradouro é obrigatório' })
  logradouro: string;

  @IsString({ message: 'O número é obrigatório' })
  @IsNotEmpty({ message: 'O número é obrigatório' })
  numero: string;

  @IsString({ message: 'O bairro é obrigatório' })
  @IsNotEmpty({ message: 'O bairro é obrigatório' })
  bairro: string;

  @IsString({ message: 'A cidade é obrigatória' })
  @IsNotEmpty({ message: 'A cidade é obrigatória' })
  cidade: string;

  @IsString({ message: 'O estado é obrigatório' })
  @IsNotEmpty({ message: 'O estado é obrigatório' })
  @MinLength(2, { message: 'O estado deve ter 2 caracteres' })
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
