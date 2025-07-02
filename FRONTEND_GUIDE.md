# 🍕 Guia Frontend - Pizza Express com Imagens

## 📋 Integração Next.js + TypeScript

Este guia mostra como implementar o fluxo completo de pizzas com upload de imagens no frontend Next.js.

## 🔗 URLs da API

### **Desenvolvimento:**
```
Base URL: http://localhost:3005
```

### **Produção:**
```
Base URL: https://pizza-express-backend.vercel.app
```

## 🍕 Fluxo de Pizzas com Imagens

### **1. Listar Pizzas com Imagens**

```typescript
// types/pizza.ts
export interface Pizza {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagemUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}
```

```typescript
// services/pizzaService.ts
import { Pizza, ApiResponse } from '@/types/pizza';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3005';

export class PizzaService {
  private static getHeaders(token?: string) {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    
    return headers;
  }

  // Listar todas as pizzas
  static async listarPizzas(token: string): Promise<Pizza[]> {
    const response = await fetch(`${API_BASE}/pizzas`, {
      method: 'GET',
      headers: this.getHeaders(token),
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar pizzas: ${response.status}`);
    }

    return response.json();
  }

  // Buscar pizza por ID
  static async buscarPizza(id: number, token: string): Promise<Pizza> {
    const response = await fetch(`${API_BASE}/pizzas/${id}`, {
      method: 'GET',
      headers: this.getHeaders(token),
    });

    if (!response.ok) {
      throw new Error(`Pizza não encontrada: ${response.status}`);
    }

    return response.json();
  }
}
```

### **2. Criar Pizza com Imagem**

```typescript
// services/pizzaService.ts (continuação)
export class PizzaService {
  // ...métodos anteriores...

  // Criar pizza SEM imagem
  static async criarPizza(
    pizza: Omit<Pizza, 'id' | 'createdAt' | 'updatedAt'>,
    token: string
  ): Promise<ApiResponse<Pizza>> {
    const response = await fetch(`${API_BASE}/pizzas`, {
      method: 'POST',
      headers: this.getHeaders(token),
      body: JSON.stringify(pizza),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar pizza: ${response.status}`);
    }

    return response.json();
  }

  // Criar pizza COM upload de imagem
  static async criarPizzaComImagem(
    pizza: Omit<Pizza, 'id' | 'createdAt' | 'updatedAt' | 'imagemUrl'>,
    imagem: File,
    token: string
  ): Promise<ApiResponse<Pizza>> {
    const formData = new FormData();
    formData.append('nome', pizza.nome);
    formData.append('descricao', pizza.descricao);
    formData.append('preco', pizza.preco.toString());
    formData.append('imagem', imagem);

    const response = await fetch(`${API_BASE}/pizzas/with-image`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        // NÃO incluir Content-Type para FormData
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar pizza com imagem: ${response.status}`);
    }

    return response.json();
  }

  // Upload de imagem para pizza existente
  static async uploadImagemPizza(
    pizzaId: number,
    imagem: File,
    token: string
  ): Promise<ApiResponse<{ imagemUrl: string }>> {
    const formData = new FormData();
    formData.append('imagem', imagem);

    const response = await fetch(`${API_BASE}/pizzas/${pizzaId}/upload-image`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Erro ao fazer upload da imagem: ${response.status}`);
    }

    return response.json();
  }
}
```

### **3. Componente de Upload de Imagem**

```typescript
// components/ImageUpload.tsx
'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  preview?: string;
  disabled?: boolean;
  className?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageSelect,
  preview,
  disabled = false,
  className = "",
}) => {
  const [previewUrl, setPreviewUrl] = useState<string>(preview || "");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (!file) return;

    // Validar tipo de arquivo
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      alert('Tipo de arquivo não permitido. Use apenas JPG, PNG ou WEBP.');
      return;
    }

    // Validar tamanho (5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('Arquivo muito grande. Tamanho máximo: 5MB.');
      return;
    }

    // Criar preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    onImageSelect(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`image-upload ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/webp"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
        disabled={disabled}
      />
      
      <div 
        onClick={handleClick}
        className="upload-area cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 transition-colors"
      >
        {previewUrl ? (
          <div className="relative w-full h-48">
            <Image
              src={previewUrl}
              alt="Preview"
              fill
              className="object-cover rounded"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white">Clique para alterar</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-2">
              📷
            </div>
            <p className="text-gray-600">
              Clique para selecionar uma imagem
            </p>
            <p className="text-sm text-gray-400">
              JPG, PNG ou WEBP - máx 5MB
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
```

### **4. Formulário de Criação de Pizza**

```typescript
// components/PizzaForm.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ImageUpload } from './ImageUpload';
import { PizzaService } from '@/services/pizzaService';

interface PizzaFormData {
  nome: string;
  descricao: string;
  preco: number;
}

export const PizzaForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<PizzaFormData>({
    nome: '',
    descricao: '',
    preco: 0,
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.descricao || formData.preco <= 0) {
      alert('Preencha todos os campos obrigatórios');
      return;
    }

    setLoading(true);

    try {
      // Obter token do localStorage ou context
      const token = localStorage.getItem('authToken') || '';

      let response;
      
      if (selectedImage) {
        // Criar pizza com imagem
        response = await PizzaService.criarPizzaComImagem(
          formData,
          selectedImage,
          token
        );
      } else {
        // Criar pizza sem imagem
        response = await PizzaService.criarPizza(formData, token);
      }

      alert(response.message);
      router.push('/pizzas');
      
    } catch (error) {
      console.error('Erro ao criar pizza:', error);
      alert('Erro ao criar pizza. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Nome da Pizza</label>
        <input
          type="text"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Descrição</label>
        <textarea
          value={formData.descricao}
          onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
          className="w-full border rounded-lg px-3 py-2"
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Preço (R$)</label>
        <input
          type="number"
          step="0.01"
          min="0"
          value={formData.preco}
          onChange={(e) => setFormData({ ...formData, preco: parseFloat(e.target.value) })}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Imagem da Pizza</label>
        <ImageUpload 
          onImageSelect={setSelectedImage}
          disabled={loading}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Criando...' : 'Criar Pizza'}
      </button>
    </form>
  );
};
```

### **5. Lista de Pizzas com Imagens**

```typescript
// components/PizzaList.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Pizza } from '@/types/pizza';
import { PizzaService } from '@/services/pizzaService';

export const PizzaList: React.FC = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarPizzas();
  }, []);

  const carregarPizzas = async () => {
    try {
      const token = localStorage.getItem('authToken') || '';
      const dados = await PizzaService.listarPizzas(token);
      setPizzas(dados);
    } catch (error) {
      console.error('Erro ao carregar pizzas:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Carregando pizzas...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Imagem da Pizza */}
          <div className="relative h-48 bg-gray-200">
            {pizza.imagemUrl ? (
              <Image
                src={pizza.imagemUrl}
                alt={pizza.nome}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                <span className="text-4xl">🍕</span>
              </div>
            )}
          </div>

          {/* Informações da Pizza */}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{pizza.nome}</h3>
            <p className="text-gray-600 text-sm mb-3">{pizza.descricao}</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-green-600">
                R$ {pizza.preco.toFixed(2).replace('.', ',')}
              </span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Editar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
```

## 🔧 Configuração do Next.js

### **next.config.js**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/doqqzdqsg/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}

module.exports = nextConfig;
```

### **.env.local**

```bash
# URL da API
NEXT_PUBLIC_API_URL=http://localhost:3005

# Para produção:
# NEXT_PUBLIC_API_URL=https://pizza-express-backend.vercel.app
```

## 🔐 Interceptador de Autenticação

```typescript
// utils/api.ts
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3005';

export class ApiClient {
  static async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const token = localStorage.getItem('authToken');
    
    const headers: HeadersInit = {
      ...options.headers,
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    if (!options.body || !(options.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      if (response.status === 401) {
        // Token expirado - redirecionar para login
        localStorage.removeItem('authToken');
        window.location.href = '/login';
        throw new Error('Sessão expirada');
      }
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }
}
```

## 📱 Hooks Personalizados

```typescript
// hooks/usePizzas.ts
import { useState, useEffect } from 'react';
import { Pizza } from '@/types/pizza';
import { PizzaService } from '@/services/pizzaService';

export const usePizzas = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const carregarPizzas = async () => {
    try {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem('authToken') || '';
      const dados = await PizzaService.listarPizzas(token);
      setPizzas(dados);
    } catch (err) {
      setError('Erro ao carregar pizzas');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarPizzas();
  }, []);

  const adicionarPizza = (novaPizza: Pizza) => {
    setPizzas(prev => [...prev, novaPizza]);
  };

  const atualizarPizza = (pizzaAtualizada: Pizza) => {
    setPizzas(prev => 
      prev.map(pizza => 
        pizza.id === pizzaAtualizada.id ? pizzaAtualizada : pizza
      )
    );
  };

  return {
    pizzas,
    loading,
    error,
    carregarPizzas,
    adicionarPizza,
    atualizarPizza,
  };
};
```

## 🎯 Rotas Principais

```
GET    /pizzas                    - Listar pizzas
GET    /pizzas/[id]               - Detalhes da pizza
POST   /pizzas                    - Criar pizza (sem imagem)
POST   /pizzas/with-image         - Criar pizza (com imagem)
POST   /pizzas/[id]/upload-image  - Upload de imagem
PATCH  /pizzas/[id]               - Atualizar pizza
DELETE /pizzas/[id]               - Deletar pizza
```

## ⚠️ Considerações Importantes

1. **Autenticação**: Todas as rotas de pizza exigem JWT
2. **Imagens**: Cloudinary retorna URLs otimizadas automaticamente
3. **Validação**: Frontend deve validar tipo e tamanho de arquivo
4. **Error Handling**: Implementar tratamento robusto de erros
5. **Loading States**: Mostrar feedback visual durante uploads
6. **Cache**: Considerar cache de imagens para performance

## 🚀 Deploy

No **Vercel**, adicionar variável de ambiente:
```
NEXT_PUBLIC_API_URL=https://pizza-express-backend.vercel.app
```

Este guia fornece uma base sólida para implementar o fluxo completo de pizzas com upload de imagens no frontend Next.js!