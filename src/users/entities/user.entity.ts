import { Endereco } from './endereco.entity';
import { Role } from '../dto/create-user.dto';

export class User {
  id: number;
  nome: string;
  email: string;
  password: string;
  telefone?: string;
  role: Role;
  enderecos: Endereco[];
  createdAt: Date;
  updatedAt: Date;
}
