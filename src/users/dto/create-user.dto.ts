import {
  IsString,
  IsEmail,
  IsOptional,
  ValidateNested,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateEnderecoDto } from './create-endereco.dto';

export enum Role {
  CLIENTE = 'CLIENTE',
  FUNCIONARIO = 'FUNCIONARIO',
  ADMIN = 'ADMIN',
}

export class CreateUserDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateEnderecoDto)
  enderecos?: CreateEnderecoDto[];

  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  @IsString()
  telefone?: string;
}
