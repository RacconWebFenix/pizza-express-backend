import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreatePizzaDto {
  @IsNotEmpty({ message: "O campo 'nome' é obrigatório." })
  @IsString({ message: "O campo 'nome' deve ser uma string." })
  nome: string;

  @IsNotEmpty({ message: "O campo 'descricao' é obrigatório." })
  @IsString({ message: "O campo 'descricao' deve ser uma string." })
  descricao: string;

  @IsNotEmpty({ message: "O campo 'preco' é obrigatório." })
  @IsNumber({}, { message: "O campo 'preco' deve ser um número." })
  preco: number;

  @IsOptional()
  @IsString({ message: "O campo 'imagemUrl' deve ser uma string." })
  imagemUrl?: string | null;
}
