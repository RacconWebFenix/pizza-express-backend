import {
  IsString,
  IsEmail,
  MinLength,
  IsOptional,
  ValidateNested,
  IsEnum,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateEnderecoDto } from './create-endereco.dto';

export enum Role {
  CLIENTE = 'CLIENTE',
  ADMIN = 'ADMIN',
  FUNCIONARIO = 'FUNCIONARIO',
}

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
  password: string;

  @IsOptional()
  @Type(() => String)
  @IsString()
  telefone?: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @ValidateNested({ each: true })
  @Type(() => CreateEnderecoDto)
  @ArrayMinSize(1)
  enderecos: CreateEnderecoDto[];
}
