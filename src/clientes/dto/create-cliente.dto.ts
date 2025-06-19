import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateClienteDto {
  @Type(() => String)
  @IsString()
  @MinLength(2)
  nome: string;

  @Type(() => String)
  @IsEmail()
  email: string;

  @Type(() => String)
  @IsString()
  @MinLength(6)
  password: string; // Padronizado para 'password' em vez de 'senha'

  @IsOptional()
  @Type(() => String)
  @IsString()
  telefone?: string;

  @Type(() => String)
  @IsString()
  @MinLength(5)
  endereco: string;
}
