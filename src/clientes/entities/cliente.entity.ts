import { Endereco } from './endereco.entity';
import { Role } from '../dto/create-cliente.dto';

export class Cliente {
  id: number;
  nome: string;
  email: string;
  password: string;
  telefone?: string;
  role: Role;
  enderecos: Endereco[];
  pedidos: any[]; // Substitua por entidade Pedido se existir
  createdAt: Date;
  updatedAt: Date;
}
