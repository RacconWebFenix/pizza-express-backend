import { PartialType } from '@nestjs/mapped-types';
import { CreateEnderecoDto } from './create-endereco.dto';
import { IsInt } from 'class-validator';

export class UpdateEnderecoDto extends PartialType(CreateEnderecoDto) {
  @IsInt()
  id: number;
}
