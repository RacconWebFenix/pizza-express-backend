import {
  IsString,
  IsEmail,
  MinLength,
  IsOptional,
  Matches,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'O nome deve ser um texto' })
  @MinLength(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  nome: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  email: string;

  @IsString({ message: 'A senha deve ser um texto' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  @IsNotEmpty({ message: 'A senha é obrigatória' })
  password: string;

  @IsOptional()
  @IsString({ message: 'O telefone deve ser um texto' })
  @Matches(/^\d{10,11}$/, {
    message: 'O telefone deve conter apenas números e ter 10 ou 11 dígitos',
  })
  telefone?: string;
}
