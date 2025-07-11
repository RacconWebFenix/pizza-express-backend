// ARQUIVO: create-pizza.dto.ts
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsUrl,
} from 'class-validator';

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
  @IsUrl({}, { message: 'URL da imagem inválida.' })
  image?: string; // Alterado para receber a URL do Cloudinary
}
