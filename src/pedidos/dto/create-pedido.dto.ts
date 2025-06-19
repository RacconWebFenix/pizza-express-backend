import {
  IsNumber,
  IsArray,
  IsString,
  IsOptional,
  ArrayNotEmpty,
} from 'class-validator';

export class CreatePedidoDto {
  @IsNumber()
  clienteId: number;

  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  pizzasIds: number[];

  @IsString()
  status: string;

  @IsOptional()
  @IsNumber()
  entregadorId?: number;
}
