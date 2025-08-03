import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { IHasher } from '../common/interfaces/hasher.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, Endereco } from '@prisma/client';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { CreateEnderecoDto } from './dto/create-endereco.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject('HASHER') private readonly hasher: IHasher,
  ) {}

  async create(
    createUserDto: CreateUserDto,
  ): Promise<User & { enderecos: Endereco[] }> {
    const { enderecos, role, password, ...clienteData } = createUserDto;
    if (!password) throw new Error('Campo password é obrigatório');
    // Gera hash da senha antes de salvar
    const hash = await this.hasher.hash(password);
    // Cria o cliente primeiro
    const user = await this.prisma.user.create({
      data: {
        ...clienteData,
        nome: clienteData.nome,
        password: hash,
        role: role ?? 'CLIENTE',
      },
    });
    // Garante que pelo menos um endereço é principal
    const enderecosAtualizados = (enderecos ?? []).map(
      (endereco: CreateEnderecoDto, idx: number) => ({
        ...endereco,
        principal: idx === 0 ? true : (endereco.principal ?? false),
        userId: user.id,
      }),
    );
    if (enderecosAtualizados.length > 0) {
      await this.prisma.endereco.createMany({ data: enderecosAtualizados });
    }
    // Retorna usuário com endereços
    const userWithAddresses = await this.prisma.user.findUnique({
      where: { id: user.id },
      include: { enderecos: true },
    });
    return userWithAddresses!;
  }

  async findAll(): Promise<(User & { enderecos: Endereco[] })[]> {
    return this.prisma.user.findMany({ include: { enderecos: true } });
  }

  async findOne(
    id: number,
  ): Promise<(User & { enderecos: Endereco[] }) | null> {
    return this.prisma.user.findUnique({
      where: { id },
      include: { enderecos: true },
    });
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User & { enderecos: Endereco[] }> {
    const {
      enderecos,
      nome,
      email,
      password: pwd,
      telefone,
      role,
    } = updateUserDto;
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
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateData,
      include: { enderecos: true },
    });
    return updatedUser;
  }

  async remove(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }

  async findByEmail(email: string): Promise<User[]> {
    return this.prisma.user.findMany({ where: { email } });
  }
}
