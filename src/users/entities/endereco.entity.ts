export class Endereco {
  id: number;
  clienteId: number;
  cep: string;
  tipo: string;
  logradouro: string;
  numero: string;
  bairro: string;
  complemento?: string;
  cidade: string;
  estado: string;
  pais?: string;
  referencia?: string;
  principal: boolean;
  createdAt: Date;
  updatedAt: Date;
}
