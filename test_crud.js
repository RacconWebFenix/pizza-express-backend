const fs = require('fs');

// Configurações
const BASE_URL = 'http://localhost:10000';
let TOKEN = null;

async function login() {
    const payload = {
        email: 'admin@pizza.com',  // Credenciais do seed
        password: '123456'     // Senha do seed
    };
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const data = await response.json();
        TOKEN = data.access_token;
        console.log('✅ Login realizado com sucesso');
    } else {
        console.log(`❌ Falha no login: ${response.status} - ${await response.text()}`);
        process.exit(1);
    }
}

function getHeaders() {
    return TOKEN ? { 'Authorization': `Bearer ${TOKEN}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
}

// Testes de Auth
async function testAuth() {
    console.log('\n🔐 Testando Auth...');
    // Register (se necessário)
    const payload = {
        nome: 'Test User',
        email: 'test@example.com',
        password: 'password123'
    };
    let response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    console.log(`Register: ${response.status}`);

    // Login já feito acima

    // Me
    response = await fetch(`${BASE_URL}/me`, {
        method: 'GET',
        headers: getHeaders()
    });
    console.log(`Me: ${response.status}`);
}

// Testes de Users
async function testUsers() {
    console.log('\n👤 Testando Users...');
    // Create
    const payload = {
        nome: 'Novo User',
        email: 'novo@example.com',
        password: 'password123'
    };
    let response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(payload)
    });
    console.log(`Create User: ${response.status}`);
    const data = response.ok ? await response.json() : null;
    const userId = data ? data.id : null;

    // Read All
    response = await fetch(`${BASE_URL}/users`, {
        method: 'GET',
        headers: getHeaders()
    });
    console.log(`Get Users: ${response.status}`);

    if (userId) {
        // Read One
        response = await fetch(`${BASE_URL}/users/${userId}`, {
            method: 'GET',
            headers: getHeaders()
        });
        console.log(`Get User by ID: ${response.status}`);

        // Update
        const updatePayload = { nome: 'User Atualizado' };
        response = await fetch(`${BASE_URL}/users/${userId}`, {
            method: 'PATCH',
            headers: getHeaders(),
            body: JSON.stringify(updatePayload)
        });
        console.log(`Update User: ${response.status}`);

        // Delete
        response = await fetch(`${BASE_URL}/users/${userId}`, {
            method: 'DELETE',
            headers: getHeaders()
        });
        console.log(`Delete User: ${response.status}`);
    }
}

// Testes de Pizzas
async function testPizzas() {
    console.log('\n🍕 Testando Pizzas...');
    // Create
    const payload = {
        nome: `Pizza Teste ${Date.now()}`,
        descricao: 'Descrição teste',
        preco: 29.90
    };
    let response = await fetch(`${BASE_URL}/pizzas`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(payload)
    });
    console.log(`Create Pizza: ${response.status}`);
    const data = response.ok ? await response.json() : null;
    const pizzaId = data ? data.data.id : null;

    // If created, upload image
    if (pizzaId && response.status === 201) {
        // Small valid JPEG base64
        const dummyImage = Buffer.from('/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/vAA==', 'base64');

        const formData = new FormData();
        formData.append('image', new Blob([dummyImage], { type: 'image/jpeg' }), 'pizza_test.jpg');

        response = await fetch(`${BASE_URL}/pizzas/${pizzaId}/upload-image`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${TOKEN}` },
            body: formData
        });
        console.log(`Upload Image to Pizza: ${response.status}`);
    }

    // Read All
    response = await fetch(`${BASE_URL}/pizzas`, {
        method: 'GET'
    });
    console.log(`Get Pizzas: ${response.status}`);

    if (pizzaId) {
        // Read One
        response = await fetch(`${BASE_URL}/pizzas/${pizzaId}`, {
            method: 'GET'
        });
        console.log(`Get Pizza by ID: ${response.status}`);

        // Update
        const updatePayload = { preco: 35.90 };
        response = await fetch(`${BASE_URL}/pizzas/${pizzaId}`, {
            method: 'PATCH',
            headers: getHeaders(),
            body: JSON.stringify(updatePayload)
        });
        console.log(`Update Pizza: ${response.status}`);

        // Delete
        response = await fetch(`${BASE_URL}/pizzas/${pizzaId}`, {
            method: 'DELETE',
            headers: getHeaders()
        });
        console.log(`Delete Pizza: ${response.status}`);
    }
}

// Testes de Pedidos
async function testPedidos() {
    console.log('\n📦 Testando Pedidos...');
    // Assumir que há user e pizza criados, mas para simplificar, usar IDs fixos ou criar primeiro
    // Create (precisa de clienteId, enderecoId, etc. - ajustar conforme necessário)
    const payload = {
        clienteId: 1,  // Usando o admin
        enderecoId: 1,  // Endereco do admin
        pizzasIds: [1],  // Pizza do seed
        status: 'PENDENTE'
    };
    let response = await fetch(`${BASE_URL}/pedidos`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(payload)
    });
    console.log(`Create Pedido: ${response.status}`);
    if (response.status === 500) {
        console.log('Error:', await response.text());
    }
    const data = response.ok ? await response.json() : null;
    const pedidoId = data ? data.id : null;

    // Read All
    response = await fetch(`${BASE_URL}/pedidos`, {
        method: 'GET',
        headers: getHeaders()
    });
    console.log(`Get Pedidos: ${response.status}`);

    if (pedidoId) {
        // Read One
        response = await fetch(`${BASE_URL}/pedidos/${pedidoId}`, {
            method: 'GET',
            headers: getHeaders()
        });
        console.log(`Get Pedido by ID: ${response.status}`);

        // Update
        const updatePayload = { status: 'EM_PREPARO' };
        response = await fetch(`${BASE_URL}/pedidos/${pedidoId}`, {
            method: 'PATCH',
            headers: getHeaders(),
            body: JSON.stringify(updatePayload)
        });
        console.log(`Update Pedido: ${response.status}`);

        // Delete
        response = await fetch(`${BASE_URL}/pedidos/${pedidoId}`, {
            method: 'DELETE',
            headers: getHeaders()
        });
        console.log(`Delete Pedido: ${response.status}`);
    }
}

// Testes de Entregadores
async function testEntregadores() {
    console.log('\n🚚 Testando Entregadores...');
    // Create
    const payload = {
        nome: 'Entregador Teste',
        telefone: '11999999999'
    };
    let response = await fetch(`${BASE_URL}/entregadores`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(payload)
    });
    console.log(`Create Entregador: ${response.status}`);
    const data = response.ok ? await response.json() : null;
    const entregadorId = data ? data.id : null;

    // Read All
    response = await fetch(`${BASE_URL}/entregadores`, {
        method: 'GET',
        headers: getHeaders()
    });
    console.log(`Get Entregadores: ${response.status}`);

    if (entregadorId) {
        // Read One
        response = await fetch(`${BASE_URL}/entregadores/${entregadorId}`, {
            method: 'GET',
            headers: getHeaders()
        });
        console.log(`Get Entregador by ID: ${response.status}`);

        // Update
        const updatePayload = { nome: 'Entregador Atualizado' };
        response = await fetch(`${BASE_URL}/entregadores/${entregadorId}`, {
            method: 'PATCH',
            headers: getHeaders(),
            body: JSON.stringify(updatePayload)
        });
        console.log(`Update Entregador: ${response.status}`);

        // Delete
        response = await fetch(`${BASE_URL}/entregadores/${entregadorId}`, {
            method: 'DELETE',
            headers: getHeaders()
        });
        console.log(`Delete Entregador: ${response.status}`);
    }
}

// Testes de Enderecos
async function testEnderecos() {
    console.log('\n🏠 Testando Enderecos...');
    // Create
    const payload = {
        cep: '01234567',
        tipo: 'Casa',
        logradouro: 'Rua Teste',
        numero: '123',
        bairro: 'Bairro Teste',
        cidade: 'São Paulo',
        estado: 'SP',
        pais: 'Brasil',
        userId: 1  // Ajuste
    };
    let response = await fetch(`${BASE_URL}/enderecos`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(payload)
    });
    console.log(`Create Endereco: ${response.status}`);
    const data = response.ok ? await response.json() : null;
    const enderecoId = data ? data.id : null;

    // Read All
    response = await fetch(`${BASE_URL}/enderecos`, {
        method: 'GET',
        headers: getHeaders()
    });
    console.log(`Get Enderecos: ${response.status}`);

    if (enderecoId) {
        // Read One
        response = await fetch(`${BASE_URL}/enderecos/${enderecoId}`, {
            method: 'GET',
            headers: getHeaders()
        });
        console.log(`Get Endereco by ID: ${response.status}`);

        // Update
        const updatePayload = { numero: '456' };
        response = await fetch(`${BASE_URL}/enderecos/${enderecoId}`, {
            method: 'PATCH',
            headers: getHeaders(),
            body: JSON.stringify(updatePayload)
        });
        console.log(`Update Endereco: ${response.status}`);

        // Delete
        response = await fetch(`${BASE_URL}/enderecos/${enderecoId}`, {
            method: 'DELETE',
            headers: getHeaders()
        });
        console.log(`Delete Endereco: ${response.status}`);
    }
}

// Testes de Payments
async function testPayments() {
    console.log('\n💳 Testando Payments...');
    // Create Payment Intent
    const payload = {
        amount: 10000,  // Em centavos
        currency: 'brl'
    };
    const response = await fetch(`${BASE_URL}/payments/create-intent`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(payload)
    });
    console.log(`Create Payment Intent: ${response.status}`);
}

// Testes de Google Auth
async function testGoogleAuth() {
    console.log('\n🔵 Testando Google Auth...');
    // Get auth config
    let response = await fetch(`${BASE_URL}/auth/config`);
    console.log(`Get Auth Config: ${response.status}`);
    if (response.ok) {
        const config = await response.json();
        console.log('Config:', config);
    }

    // Test Google auth redirect (should redirect to Google)
    response = await fetch(`${BASE_URL}/auth/google`, {
        method: 'GET',
        redirect: 'manual'  // Don't follow redirects
    });
    console.log(`Google Auth Redirect: ${response.status} (expected 302)`);
}

// Testes de Upload
// async function testUpload() {
//     console.log('\n📤 Testando Upload...');
//     // Criar um buffer dummy para simular arquivo
//     const dummyFile = Buffer.from('dummy image data');

//     const formData = new FormData();
//     formData.append('file', new Blob([dummyFile]), 'test_image.jpg');

//     const response = await fetch(`${BASE_URL}/upload`, {
//         method: 'POST',
//         headers: { 'Authorization': `Bearer ${TOKEN}` },  // Não incluir Content-Type, deixa o fetch definir
//         body: formData
//     });
//     console.log(`Upload File: ${response.status}`);
// }

async function main() {
    console.log('🚀 Iniciando testes CRUD do Pizza Express Backend');
    await login();
    await testAuth();
    await testUsers();
    await testPizzas();
    await testPedidos();
    await testEntregadores();
    await testEnderecos();
    await testPayments();
    await testGoogleAuth();
    // await testUpload();
    console.log('\n✅ Testes concluídos!');
}

main().catch(console.error);