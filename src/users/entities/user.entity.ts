import { Endereco } from './endereco.entity';
import { Role } from '../dto/create-user.dto';
import { Pedido } from '../../pedidos/entities/pedido.entity';

export class User {
  id: number;
  nome: string;
  email: string;
  password: string;
  telefone?: string;
  role: Role;
  enderecos: Endereco[];
  pedidos: Pedido[];
  createdAt: Date;
  updatedAt: Date;
}
