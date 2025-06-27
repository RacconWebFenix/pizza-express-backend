// Script para criar usuário de teste
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createTestUser() {
  try {
    // Verificar se o usuário já existe
    const existingUser = await prisma.cliente.findUnique({
      where: { email: 'marcos@email.com' },
    });

    if (existingUser) {
      console.log('✅ Usuário marcos@email.com já existe');
      console.log('ID:', existingUser.id);
      console.log('Nome:', existingUser.nome);
      return;
    }

    // Criar usuário de teste
    const hashedPassword = await bcrypt.hash('123456', 10);

    const user = await prisma.cliente.create({
      data: {
        nome: 'Marcos Silva',
        email: 'marcos@email.com',
        password: hashedPassword,
        telefone: '11999999999',
        endereco: 'Rua das Flores, 123',
      },
    });

    console.log('✅ Usuário de teste criado com sucesso!');
    console.log('Email: marcos@email.com');
    console.log('Senha: 123456');
    console.log('ID:', user.id);
  } catch (error) {
    console.error('❌ Erro ao criar usuário:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createTestUser();
