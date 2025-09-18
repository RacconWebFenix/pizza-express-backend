# 🍕 Pizza Express API - Documentação WebSocket

## 🚀 WebSocket - Rastreamento em Tempo Real

A API inclui um sistema de WebSocket para rastreamento em tempo real da localização dos entregadores durante as entregas.

### 📡 Gateway WebSocket
- **URL**: `ws://localhost:10000/entregadores-location` (ou sua URL de produção)
- **Protocolo**: WebSocket
- **Autenticação**: JWT Bearer token no handshake

### 📨 Eventos Disponíveis

#### 1. `updateLocation` (Cliente → Servidor)
Atualiza a localização do entregador em tempo real.

**Payload:**
```json
{
  "entregadorId": 1,
  "latitude": -23.550520,
  "longitude": -46.633308,
  "pedidoId": 123
}
```

**Exemplo de uso com JavaScript:**
```javascript
const socket = new WebSocket('ws://localhost:10000/entregadores-location', [], {
  headers: {
    'Authorization': 'Bearer ' + jwtToken
  }
});

socket.onopen = () => {
  socket.send(JSON.stringify({
    event: 'updateLocation',
    data: {
      entregadorId: 1,
      latitude: -23.550520,
      longitude: -46.633308,
      pedidoId: 123
    }
  }));
};
```

#### 2. `locationUpdate` (Servidor → Cliente)
Recebe atualizações de localização de entregadores.

**Payload recebido:**
```json
{
  "entregadorId": 1,
  "latitude": -23.550520,
  "longitude": -46.633308,
  "pedidoId": 123,
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Exemplo de uso:**
```javascript
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.event === 'locationUpdate') {
    console.log('Nova localização:', data.data);
    // Atualizar mapa ou interface
  }
};
```

### 🔧 Como Testar WebSocket

Como o Insomnia não suporta WebSocket nativamente, você pode usar:

1. **Postman**: Suporte nativo para WebSocket
2. **WebSocket King**: Extensão do Chrome/Firefox
3. **Console do navegador**: Usar JavaScript
4. **Thunder Client**: Extensão do VS Code com suporte WebSocket

### 📋 Fluxo Típico de Uso

1. **Cliente faz pedido** → Status: PENDENTE
2. **Restaurante aceita** → Status: EM_PREPARO
3. **Atribui entregador** → Status: A_CAMINHO
4. **Entregador conecta WebSocket** e começa a enviar localização
5. **Cliente recebe atualizações** em tempo real via `locationUpdate`
6. **Pedido entregue** → Status: ENTREGUE

### ⚠️ Considerações de Segurança

- Sempre use HTTPS/WSS em produção
- Valide JWT tokens no handshake
- Implemente rate limiting para evitar abuso
- Considere usar Redis para escalabilidade em produção

### 🛠️ Configuração do Gateway

O gateway está configurado em `src/entregadores/entregadores-location.gateway.ts` com:
- CORS habilitado
- Autenticação JWT obrigatória
- Tratamento de erros
- Logs de debug

---

## 📚 Próximos Passos

1. **Importe o arquivo `Insomnia_complete.yaml`** no Insomnia
2. **Configure as variáveis de ambiente** (base_url, jwt, IDs)
3. **Teste os endpoints** começando pela autenticação
4. **Para WebSocket**, use uma ferramenta específica como Postman ou Thunder Client

A documentação está completa e pronta para desenvolvimento e testes! 🎉