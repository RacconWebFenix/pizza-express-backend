import {
  IsString,
  IsEmail,
  MinLength,
  IsOptional,
  ValidateNested,
  IsEnum,
  ArrayMinSize,
  Matches,
  IsNotEmpty,
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
  @IsString({ message: 'O nome deve ser um texto' })
  @MinLength(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  nome: string;

  @Type(() => String)
  @IsEmail({}, { message: 'E-mail inválido' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  email: string;

  @Type(() => String)
  @IsString({ message: 'A senha deve ser um texto' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  @IsNotEmpty({ message: 'A senha é obrigatória' })
  password: string;

  @IsOptional()
  @Type(() => String)
  @IsString({ message: 'O telefone deve ser um texto' })
  @Matches(/^\d{10,11}$/, {
    message: 'O telefone deve conter apenas números e ter 10 ou 11 dígitos',
  })
  telefone?: string;

  @IsOptional()
  @IsEnum(Role, {
    message: 'O tipo de usuário (role) deve ser CLIENTE, ADMIN ou FUNCIONARIO',
  })
  role?: Role;

  @ValidateNested({ each: true })
  @Type(() => CreateEnderecoDto)
  @ArrayMinSize(1)
  enderecos: CreateEnderecoDto[];
}
