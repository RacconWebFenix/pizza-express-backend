const fetch = require('node-fetch');
async function test() {
  const loginRes = await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'cliente@pizza.com', password: '123456' })
  });
  const loginData = await loginRes.json();
  const token = loginData.access_token;
  console.log('Token:', !!token);
  
  const enderecoRes = await fetch('http://localhost:3000/enderecos', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      cep: '01234567',
      tipo: 'RESIDENCIAL',
      logradouro: 'Rua Teste',
      numero: '123',
      bairro: 'Bairro Teste',
      cidade: 'São Paulo',
      estado: 'SP',
      pais: 'Brasil'
    })
  });
  console.log('Status:', enderecoRes.status);
  const result = await enderecoRes.text();
  console.log('Result:', result);
}
test();
