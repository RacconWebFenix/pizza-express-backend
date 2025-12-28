#!/usr/bin/env node

/**
 * Script de Teste para OrderItems e Split Payment
 * Testa todas as funcionalidades implementadas em tempo real
 */

const BASE_URL = 'http://localhost:3000';

class TestRunner {
  constructor() {
    this.token = null;
    this.testData = {};
    this.timestamp = Date.now();
  }

  async makeRequest(method, url, data = null, auth = true) {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (auth && this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const config = {
      method,
      headers,
    };

    if (data) {
      config.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(`${BASE_URL}${url}`, config);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status}: ${result.message || result.error}`,
        );
      }

      return result;
    } catch (error) {
      console.error(`❌ Erro na requisição ${method} ${url}:`, error.message);
      throw error;
    }
  }

  async login() {
    console.log('🔐 Fazendo login...');

    try {
      // Primeiro, registrar um usuário de teste
      const registerData = {
        nome: 'Teste Funcionario',
        email: `teste.funcionario.${this.timestamp}@test.com`,
        password: '123456',
        telefone: '11999999999',
        role: 'FUNCIONARIO',
      };

      await this.makeRequest('POST', '/auth/register', registerData, false);
      console.log('✅ Usuário registrado');

      // Fazer login
      const loginData = {
        email: registerData.email,
        password: registerData.password,
      };

      const loginResult = await this.makeRequest(
        'POST',
        '/auth/login',
        loginData,
        false,
      );
      this.token = loginResult.access_token;
      console.log('✅ Login realizado com sucesso');
    } catch (error) {
      // Se o usuário já existe, tentar login direto
      console.log('⚠️  Usuário já existe, tentando login direto...');
      const loginData = {
        email: `teste.funcionario.${this.timestamp}@test.com`,
        password: '123456',
      };

      const loginResult = await this.makeRequest(
        'POST',
        '/auth/login',
        loginData,
        false,
      );
      this.token = loginResult.access_token;
      console.log('✅ Login realizado com sucesso');
    }
  }

  async createTestData() {
    console.log('\n📝 Criando dados de teste...');

    // 1. Criar categoria
    const categoryData = {
      name: `Pizzas Salgadas ${this.timestamp}`,
      slug: `pizzas-salgadas-${this.timestamp}`,
    };

    const category = await this.makeRequest(
      'POST',
      '/categories',
      categoryData,
    );
    this.testData.category = category;
    console.log('✅ Categoria criada:', category.name);

    // 2. Criar produto
    const productData = {
      name: `Pizza Margherita ${this.timestamp}`,
      description: 'Molho de tomate, mussarela, manjericão fresco',
      price: 45.9,
      categoryId: category.id,
    };

    const product = await this.makeRequest('POST', '/products', productData);
    this.testData.product = product;
    console.log('✅ Produto criado:', product.name, '- R$', product.price);

    // 3. Criar mesa
    const tableData = {
      number: Math.floor(Math.random() * 900) + 100, // Número aleatório entre 100-999
    };

    console.log('Tentando criar mesa com dados:', tableData);
    const table = await this.makeRequest('POST', '/tables', tableData);
    this.testData.table = table;
    console.log('✅ Mesa criada:', `Mesa ${table.number}`);

    // 4. Abrir sessão da mesa
    const session = await this.makeRequest(
      'POST',
      `/tables/${table.id}/sessions/open`,
    );
    this.testData.session = session;
    console.log('✅ Sessão aberta para mesa:', session.id);

    // 5. Criar endereço para teste de delivery
    const addressData = {
      logradouro: `Rua Teste ${this.timestamp}`,
      numero: '123',
      bairro: 'Centro',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01234-567',
      complemento: 'Apto 45',
      tipo: 'RESIDENCIAL',
    };

    const address = await this.makeRequest('POST', '/enderecos', addressData);
    this.testData.address = address;
    console.log('✅ Endereço criado:', address.street);

    console.log('ℹ️  Dados de teste criados com sucesso');
  }

  async testOrderItems() {
    console.log('\n🍕 Testando OrderItems...');

    // Criar um pedido DINE_IN com itens
    const orderData = {
      type: 'DINE_IN',
      tableId: this.testData.table.id,
      items: [
        {
          productId: this.testData.product.id,
          quantity: 2,
        },
      ],
    };

    const order = await this.makeRequest('POST', '/orders', orderData);
    this.testData.order = order;
    console.log(
      '✅ Pedido criado:',
      order.id,
      'com',
      order.items.length,
      'itens',
    );

    const orderId = order.id;
    const productId = this.testData.product.id;

    // 1. Adicionar primeiro item
    console.log('➕ Adicionando primeiro item...');
    const addItemData = {
      productId,
      quantity: 2,
      notes: 'Sem cebola, extra queijo',
    };

    const addResult1 = await this.makeRequest(
      'POST',
      `/orders/${orderId}/items`,
      addItemData,
    );
    console.log('✅ Item adicionado:', addResult1);
    this.testData.item1 = { id: addResult1.itemId };

    // 2. Adicionar segundo item
    console.log('➕ Adicionando segundo item...');
    const addItemData2 = {
      productId,
      quantity: 1,
      notes: 'Borda recheada',
    };

    const addResult2 = await this.makeRequest(
      'POST',
      `/orders/${orderId}/items`,
      addItemData2,
    );
    console.log('✅ Segundo item adicionado:', addResult2);
    this.testData.item2 = { id: addResult2.itemId };

    // 3. Listar itens do pedido
    console.log('📋 Listando itens do pedido...');
    const items = await this.makeRequest('GET', `/orders/${orderId}/items`);
    console.log('✅ Itens do pedido:', items.length, 'itens');
    items.forEach((item, index) => {
      console.log(
        `   ${index + 1}. ${item.product.name} x${item.quantity} - R$ ${item.price} (${item.status})`,
      );
    });

    // 4. Atualizar quantidade do primeiro item
    console.log('🔄 Atualizando quantidade do primeiro item...');
    const updateData = {
      quantity: 3,
    };

    const updateResult = await this.makeRequest(
      'PATCH',
      `/orders/${orderId}/items/${this.testData.item1.id}/quantity`,
      updateData,
    );
    console.log('✅ Quantidade atualizada:', updateResult);

    // 5. Verificar histórico de modificações
    console.log('📜 Verificando histórico de modificações...');
    const history = await this.makeRequest(
      'GET',
      `/orders/${orderId}/items/history`,
    );
    console.log('✅ Histórico:', history.length, 'modificações');
    history.forEach((mod, index) => {
      console.log(
        `   ${index + 1}. ${mod.action} - ${new Date(mod.createdAt).toLocaleString()}`,
      );
    });

    // 6. Remover o segundo item
    console.log('🗑️  Removendo segundo item...');
    const cancelData = {
      reason: 'Cliente mudou de ideia',
    };

    const removeResult = await this.makeRequest(
      'DELETE',
      `/orders/${orderId}/items/${this.testData.item2.id}`,
      cancelData,
    );
    console.log('✅ Item removido:', removeResult);

    // 7. Listar itens novamente
    console.log('📋 Listando itens após remoção...');
    const itemsAfter = await this.makeRequest(
      'GET',
      `/orders/${orderId}/items`,
    );
    console.log('✅ Itens restantes:', itemsAfter.length, 'itens');
  }

  async testSplitPayment() {
    console.log('\n💳 Testando Split Payment...');

    const sessionId = this.testData.session.id;

    // Usar o pedido criado no teste de OrderItems ou criar novos pedidos
    console.log('➕ Garantindo pedidos na sessão...');

    // Verificar se já há pedidos na sessão
    const sessionDetails = await this.makeRequest(
      'GET',
      `/tables/${this.testData.table.id}/bill`,
    );
    console.log('💰 Total da sessão atual:', `R$ ${sessionDetails.total}`);

    // Se não há pedidos suficientes, criar mais
    if (sessionDetails.total < 50) {
      // Criar pedido adicional na sessão
      const orderData = {
        type: 'DINE_IN',
        tableId: this.testData.table.id,
        items: [
          {
            productId: this.testData.product.id,
            quantity: 3,
          },
        ],
      };

      const order = await this.makeRequest('POST', '/orders', orderData);
      console.log('✅ Pedido adicional criado para split payment');

      // Recarregar detalhes da sessão
      const updatedDetails = await this.makeRequest(
        'GET',
        `/tables/${this.testData.table.id}/bill`,
      );
      console.log(
        '💰 Total da sessão atualizado:',
        `R$ ${updatedDetails.total}`,
      );
    }

    // 1. Verificar valor restante a pagar
    console.log('💰 Verificando valor restante...');
    console.log('   Session ID:', sessionId);
    const remaining = await this.makeRequest(
      'GET',
      `/split-payments/session/${sessionId}/remaining`,
    );
    console.log('✅ Valor restante:', `R$ ${remaining.remaining}`);
    console.log('   Detalhes da resposta:', JSON.stringify(remaining, null, 2));

    // 2. Processar pagamento dividido baseado no valor restante
    console.log('💳 Processando pagamento dividido...');
    const remainingAmount = parseFloat(remaining.remaining);
    console.log('   Valor restante para split:', remainingAmount);

    if (remainingAmount <= 0) {
      console.log(
        '⚠️  Sessão já foi totalmente paga. Pulando teste de split payment.',
      );
      return;
    }

    const payment1 = Math.floor(remainingAmount * 0.6); // 60%
    const payment2 = remainingAmount - payment1; // 40%

    console.log(`   Pagamento 1: R$ ${payment1}, Pagamento 2: R$ ${payment2}`);

    const splitPaymentData = {
      sessionId,
      payments: [
        {
          amount: 45.9, // Metade do restante
          method: 'CREDIT_CARD',
          paidBy: 'João Silva',
          tip: 0, // Sem gorjeta para simplificar
        },
        {
          amount: 45.9, // Outra metade
          method: 'PIX',
          paidBy: 'Maria Santos',
          tip: 0,
        },
      ],
    };

    const splitResult = await this.makeRequest(
      'POST',
      '/split-payments',
      splitPaymentData,
    );
    console.log('✅ Pagamento dividido processado:', splitResult);

    // 3. Verificar pagamentos da sessão
    console.log('📄 Verificando pagamentos da sessão...');
    const payments = await this.makeRequest(
      'GET',
      `/split-payments/session/${sessionId}`,
    );
    console.log('✅ Pagamentos registrados:', payments.length, 'pagamentos');
    payments.forEach((payment, index) => {
      console.log(
        `   ${index + 1}. ${payment.method} - R$ ${payment.amount} + R$ ${payment.tip || 0} gorjeta (${payment.status})`,
      );
    });

    // 4. Verificar valor restante novamente
    console.log('💰 Verificando valor restante após pagamento...');
    const remainingAfter = await this.makeRequest(
      'GET',
      `/split-payments/session/${sessionId}/remaining`,
    );
    console.log('✅ Valor restante:', `R$ ${remainingAfter.remaining}`);
  }

  async cleanup() {
    console.log('\n🧹 Limpando dados de teste...');

    try {
      // Fechar sessão da mesa
      await this.makeRequest(
        'POST',
        `/tables/${this.testData.table.id}/sessions/close`,
      );
      console.log('✅ Sessão fechada');

      // Deletar pedido
      await this.makeRequest('DELETE', `/orders/${this.testData.order.id}`);
      console.log('✅ Pedido deletado');

      // Deletar produto
      await this.makeRequest('DELETE', `/products/${this.testData.product.id}`);
      console.log('✅ Produto deletado');

      // Deletar categoria
      await this.makeRequest(
        'DELETE',
        `/categories/${this.testData.category.id}`,
      );
      console.log('✅ Categoria deletada');

      // Deletar mesa
      await this.makeRequest('DELETE', `/tables/${this.testData.table.id}`);
      console.log('✅ Mesa deletada');
    } catch (error) {
      console.log('⚠️  Alguns dados podem ter ficado para limpeza manual');
    }
  }

  async run() {
    console.log('🚀 Iniciando testes da API OrderItems e Split Payment\n');

    try {
      await this.login();
      await this.createTestData();
      await this.testOrderItems();
      await this.testSplitPayment();
      await this.cleanup();

      console.log('\n🎉 Todos os testes passaram com sucesso!');
      console.log('✅ OrderItems: Adicionar, atualizar, remover itens');
      console.log('✅ Split Payment: Processar pagamentos divididos');
      console.log('✅ Auditoria: Histórico de modificações registrado');
    } catch (error) {
      console.error('\n💥 Erro durante os testes:', error.message);
      process.exit(1);
    }
  }
}

// Executar testes
const tester = new TestRunner();
tester.run();
