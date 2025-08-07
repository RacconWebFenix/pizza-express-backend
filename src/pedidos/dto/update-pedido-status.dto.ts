import { IsEnum, IsNotEmpty } from 'class-validator';
import { StatusPedido } from '@prisma/client';

export class UpdatePedidoStatusDto {
  @IsNotEmpty({ message: 'O status não pode ser vazio.' })
  @IsEnum(StatusPedido, {
    message: `Status inválido. Use um dos seguintes valores: ${Object.values(
      StatusPedido,
    ).join(', ')}`,
  })
  status: StatusPedido;
}
