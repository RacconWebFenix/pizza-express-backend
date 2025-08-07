import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsArray,
  IsString,
  IsEnum,
} from 'class-validator';
import { StatusPedido } from '@prisma/client';

export class CreatePedidoDto {
  @IsNotEmpty()
  @IsNumber()
  clienteId: number;

  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  pizzasIds: number[];

  @IsOptional()
  @IsString()
  observacoes?: string;

  @IsOptional() // Status agora é opcional na criação
  @IsEnum(StatusPedido, {
    message: `Status inválido. Use um dos seguintes valores: ${Object.values(
      StatusPedido,
    ).join(', ')}`,
  })
  status?: StatusPedido;

  @IsOptional()
  @IsNumber()
  entregadorId?: number;

  @IsNotEmpty()
  @IsNumber()
  enderecoId: number;
}
