import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcryptjs';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from '@prisma/client';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';

@Injectable()
export class ClientesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createClienteDto: CreateClienteDto,
  ): Promise<Record<string, any> | null> {
    const { enderecos, role, password, ...clienteData } = createClienteDto;
    if (!password) throw new Error('Campo password é obrigatório');
    // Gera hash da senha antes de salvar
    const hash = await bcrypt.hash(password, 10);
    // Cria o cliente primeiro
    const cliente = await this.prisma.cliente.create({
      data: {
        ...clienteData,
        password: hash,
        role: role ?? 'CLIENTE',
      },
    });
    // Garante que pelo menos um endereço é principal
    const enderecosAtualizados = (enderecos ?? []).map((endereco, idx) => ({
      ...endereco,
      principal: idx === 0 ? true : (endereco.principal ?? false),
      clienteId: cliente.id,
    }));
    if (enderecosAtualizados.length > 0) {
      await this.prisma.endereco.createMany({ data: enderecosAtualizados });
    }
    // Retorna cliente com endereços
    const clienteComEnderecos = await this.prisma.cliente.findUnique({
      where: { id: cliente.id },
      include: { enderecos: true },
    });
    return clienteComEnderecos;
  }

  async findAll(): Promise<Record<string, any>[]> {
    const clientes = await this.prisma.cliente.findMany({
      include: { enderecos: true },
    });
    return clientes.map(({ ...rest }) => rest);
  }

  async findOne(id: number): Promise<Record<string, any> | null> {
    const cliente = await this.prisma.cliente.findUnique({
      where: { id },
      include: { enderecos: true },
    });
    if (!cliente) return null;
    const { ...rest } = cliente;
    return rest;
  }

  async update(
    id: number,
    updateClienteDto: UpdateClienteDto,
  ): Promise<Record<string, any>> {
    const {
      enderecos,
      nome,
      email,
      password: pwd,
      telefone,
      role,
    } = updateClienteDto;
    // Monta objeto de atualização sem tipagem explícita
    const updateData: Record<string, unknown> = {};
    if (nome) updateData.nome = nome;
    if (email) updateData.email = email;
    if (pwd) updateData.password = pwd;
    if (telefone) updateData.telefone = telefone;
    if (role) updateData.role = role;
    if (enderecos) {
      // Atualiza endereços existentes
      const enderecosToUpdate = enderecos.filter(
        (e) => 'id' in e && typeof e.id === 'number',
      );
      await Promise.all(
        enderecosToUpdate.map(async (endereco) => {
          const { id, ...rest } = endereco as UpdateEnderecoDto;
          await this.prisma.endereco.update({
            where: { id },
            data: {
              cep: rest.cep,
              tipo: rest.tipo,
              logradouro: rest.logradouro,
              numero: rest.numero,
              bairro: rest.bairro,
              cidade: rest.cidade,
              estado: rest.estado,
              principal: rest.principal ?? false,
              ...(rest.complemento !== undefined
                ? { complemento: rest.complemento }
                : {}),
            },
          });
        }),
      );
      // Adiciona novos endereços sem sobrescrever os existentes
      const enderecosToCreate = enderecos.filter(
        (e) => !('id' in e) || typeof e.id !== 'number',
      );
      if (enderecosToCreate.length > 0) {
        updateData.enderecos = {
          create: enderecosToCreate
            .filter(
              (e) =>
                e.cep !== undefined &&
                e.tipo !== undefined &&
                e.logradouro !== undefined &&
                e.numero !== undefined &&
                e.bairro !== undefined &&
                e.cidade !== undefined &&
                e.estado !== undefined,
            )
            .map((endereco) => ({
              cep: endereco.cep,
              tipo: endereco.tipo,
              logradouro: endereco.logradouro,
              numero: endereco.numero,
              bairro: endereco.bairro,
              cidade: endereco.cidade,
              estado: endereco.estado,
              principal: endereco.principal ?? false,
              ...(endereco.complemento !== undefined
                ? { complemento: endereco.complemento }
                : {}),
            })),
        };
      }
    }
    const clienteAtualizado = await this.prisma.cliente.update({
      where: { id },
      data: updateData,
      include: { enderecos: true },
    });
    const { ...rest } = clienteAtualizado;
    return rest;
  }

  async remove(id: number): Promise<Cliente> {
    return await this.prisma.cliente.delete({ where: { id } });
  }

  async findByEmail(email: string): Promise<Cliente[]> {
    return await this.prisma.cliente.findMany({ where: { email } });
  }
}
