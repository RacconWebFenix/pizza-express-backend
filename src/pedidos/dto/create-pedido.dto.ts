import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsArray,
  IsString,
} from 'class-validator';

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

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsOptional()
  @IsNumber()
  entregadorId?: number;
}
