# Integração de Pagamentos - Frontend

## Visão Geral

Este documento explica como integrar o sistema de pagamentos Stripe no frontend da aplicação Pizza Express.

## Pré-requisitos

1. **Chaves do Stripe**: Obtenha as chaves do [Stripe Dashboard](https://dashboard.stripe.com/)
   - `pk_test_*` para desenvolvimento
   - `pk_live_*` para produção

2. **Dependências**:
   ```bash
   npm install @stripe/stripe-js @stripe/react-stripe-js
   ```

## Configuração Inicial

### 1. Configurar Stripe Provider

```javascript
// src/stripe/stripeConfig.js
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export default stripePromise;
```

```javascript
// src/App.js
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './stripe/stripeConfig';

function App() {
  return (
    <Elements stripe={stripePromise}>
      {/* Seu app aqui */}
    </Elements>
  );
}
```

### 2. Componente de Checkout

```javascript
// src/components/CheckoutForm.js
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useState } from 'react';

function CheckoutForm({ clientSecret, onSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/pedido-confirmado`,
      },
    });

    if (error) {
      console.error(error);
      setIsProcessing(false);
    } else {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe || isProcessing}>
        {isProcessing ? 'Processando...' : 'Pagar'}
      </button>
    </form>
  );
}

export default CheckoutForm;
```

## Fluxo de Pagamento

### 1. Calcular Total e Criar Payment Intent

```javascript
// src/hooks/usePayment.js
import { useState } from 'react';

export function usePayment() {
  const [clientSecret, setClientSecret] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const createPaymentIntent = async (totalInCents, token) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/payments/create-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ amount: totalInCents })
      });

      const data = await response.json();
      setClientSecret(data.client_secret);
    } catch (error) {
      console.error('Erro ao criar Payment Intent:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { clientSecret, isLoading, createPaymentIntent };
}
```

### 2. Página de Checkout

```javascript
// src/pages/Checkout.js
import { useEffect } from 'react';
import { useStripe, Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import { usePayment } from '../hooks/usePayment';

function CheckoutPage() {
  const { clientSecret, isLoading, createPaymentIntent } = usePayment();
  const stripe = useStripe();

  useEffect(() => {
    // Calcular total do carrinho (exemplo)
    const cartTotal = 7500; // R$ 75,00 em centavos
    const userToken = localStorage.getItem('token');

    createPaymentIntent(cartTotal, userToken);
  }, []);

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Finalizar Pedido</h1>
      {clientSecret && (
        <Elements stripe={stripe} options={{ clientSecret }}>
          <CheckoutForm
            clientSecret={clientSecret}
            onSuccess={() => {
              // Redirecionar para página de sucesso
              window.location.href = '/pedido-confirmado';
            }}
          />
        </Elements>
      )}
    </div>
  );
}

export default CheckoutPage;
```

## Tratamento de Erros

```javascript
// Exemplo de tratamento de erros comuns
const handlePaymentError = (error) => {
  switch (error.type) {
    case 'card_error':
      alert(`Erro no cartão: ${error.message}`);
      break;
    case 'validation_error':
      alert(`Erro de validação: ${error.message}`);
      break;
    default:
      alert('Erro inesperado. Tente novamente.');
  }
};
```

## Testes

### Cartões de Teste do Stripe

- **Sucesso**: 4242 4242 4242 4242
- **Falha por fundos insuficientes**: 4000 0000 0000 0002
- **Cartão recusado**: 4000 0025 0000 3155

### Testando Webhooks

Para testar webhooks localmente:

1. Instalar Stripe CLI
2. Executar: `stripe listen --forward-to localhost:3000/payments/webhook`
3. Usar o webhook signing secret fornecido no endpoint

## Segurança

- ✅ Use sempre HTTPS em produção
- ✅ Nunca exponha chaves secretas no frontend
- ✅ Valide todos os dados no backend
- ✅ Use tokens JWT para autenticação
- ✅ Implemente rate limiting nas APIs

## Próximos Passos

1. Implementar recuperação de estado de pagamento
2. Adicionar analytics de conversão
3. Implementar reembolsos
4. Adicionar suporte a métodos alternativos (Pix, boleto)