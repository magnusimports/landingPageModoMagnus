# 🚀 Guia de Deploy no Netlify - Modo Magnus

## 📋 Pré-requisitos

1. Conta no [Netlify](https://www.netlify.com/) (gratuita)
2. Repositório no GitHub com o código
3. Chave da API do Google Gemini (para chatbot)
4. Banco de dados MySQL/TiDB (para leads e chatbot)

## ⚠️ Importante: Arquitetura Backend

O Netlify é otimizado para sites estáticos e **não suporta servidores Node.js tradicionais** (Express). 

### Opções de Arquitetura:

#### **Opção 1: Frontend Estático Apenas (Recomendado para MVP)**
- Deploy apenas do frontend no Netlify
- Remover temporariamente chatbot e formulário de leads
- Adicionar link para WhatsApp ou email de contato
- **Vantagens**: Deploy rápido, sem custos adicionais
- **Desvantagens**: Sem captura automática de leads

#### **Opção 2: Backend Separado (Recomendado para Produção)**
- Frontend no Netlify
- Backend em serviço separado:
  - [Render](https://render.com/) - Gratuito com limitações
  - [Railway](https://railway.app/) - $5/mês
  - [Fly.io](https://fly.io/) - Gratuito com limitações
  - [Heroku](https://www.heroku.com/) - $7/mês
- Banco de dados:
  - [PlanetScale](https://planetscale.com/) - MySQL serverless gratuito
  - [Supabase](https://supabase.com/) - PostgreSQL gratuito
  - [TiDB Cloud](https://tidbcloud.com/) - MySQL gratuito

#### **Opção 3: Netlify Functions (Avançado)**
- Converter backend para Netlify Functions (serverless)
- Requer refatoração significativa do código
- Limitações de tempo de execução (10s no plano gratuito)

## 🎯 Deploy Rápido (Opção 1 - Frontend Apenas)

### Passo 1: Preparar o Código

1. Comentar/remover componentes que usam backend:

```typescript
// Em client/src/pages/Home.tsx
// Comentar ou remover:
// <ChatbotWidget />
// <ContactSection />
```

2. Adicionar botão de contato alternativo:

```typescript
// Adicionar em Footer.tsx ou outra seção
<Button onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>
  Fale Conosco no WhatsApp
</Button>
```

### Passo 2: Deploy no Netlify

1. **Via Interface Web:**
   - Acesse [app.netlify.com](https://app.netlify.com)
   - Clique em "Add new site" → "Import an existing project"
   - Conecte com GitHub
   - Selecione o repositório `landingPageModoMagnus`
   - Configure:
     - **Build command**: `pnpm install && pnpm build`
     - **Publish directory**: `dist/public`
     - **Node version**: 18

2. **Via Netlify CLI:**

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Passo 3: Configurar Domínio (Opcional)

1. No dashboard do Netlify, vá em "Domain settings"
2. Adicione seu domínio customizado
3. Configure DNS conforme instruções

## 🔧 Deploy Completo (Opção 2 - Frontend + Backend Separado)

### Passo 1: Deploy do Backend

#### Usando Render.com:

1. Crie conta no [Render](https://render.com/)
2. Clique em "New +" → "Web Service"
3. Conecte com GitHub e selecione o repositório
4. Configure:
   - **Name**: `modo-magnus-api`
   - **Environment**: `Node`
   - **Build Command**: `pnpm install && pnpm build`
   - **Start Command**: `pnpm start`
   - **Instance Type**: Free (ou Starter $7/mês)

5. Adicione variáveis de ambiente:
   ```
   DATABASE_URL=mysql://user:pass@host:port/db
   GEMINI_API_KEY=sua_chave_aqui
   NODE_ENV=production
   ```

6. Deploy! Anote a URL gerada (ex: `https://modo-magnus-api.onrender.com`)

#### Usando Railway.app:

```bash
# Instalar Railway CLI
npm install -g @railway/cli

# Login
railway login

# Inicializar projeto
railway init

# Adicionar variáveis de ambiente
railway variables set DATABASE_URL=mysql://...
railway variables set GEMINI_API_KEY=...

# Deploy
railway up
```

### Passo 2: Configurar Banco de Dados

#### Usando PlanetScale (MySQL Serverless):

1. Crie conta no [PlanetScale](https://planetscale.com/)
2. Crie novo database: `modo-magnus-db`
3. Copie a connection string
4. Execute migrações:

```bash
# Configurar DATABASE_URL no .env
DATABASE_URL="mysql://..."

# Rodar migrações
pnpm db:push
```

### Passo 3: Atualizar Frontend

1. Criar arquivo de configuração da API:

```typescript
// client/src/config.ts
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
```

2. Atualizar cliente tRPC:

```typescript
// client/src/lib/trpc.ts
import { API_URL } from '@/config';

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${API_URL}/trpc`,
    }),
  ],
});
```

### Passo 4: Deploy Frontend no Netlify

1. Configure variável de ambiente no Netlify:
   - `VITE_API_URL` = URL do backend (ex: `https://modo-magnus-api.onrender.com`)

2. Deploy conforme Opção 1

### Passo 5: Configurar CORS no Backend

```typescript
// server/_core/index.ts
import cors from 'cors';

app.use(cors({
  origin: [
    'https://modomagunus.com',
    'https://modo-magnus.netlify.app',
    'http://localhost:5173'
  ],
  credentials: true
}));
```

## 📊 Checklist de Deploy

### Antes do Deploy:
- [ ] Código commitado e pushed para GitHub
- [ ] Variáveis de ambiente configuradas
- [ ] Build local testado (`pnpm build`)
- [ ] Imagens otimizadas
- [ ] Meta tags de SEO configuradas

### Após Deploy:
- [ ] Site acessível na URL do Netlify
- [ ] Todas as páginas carregando corretamente
- [ ] Imagens carregando
- [ ] Formulários funcionando (se aplicável)
- [ ] Chatbot funcionando (se aplicável)
- [ ] Responsividade testada em mobile
- [ ] Performance testada (Lighthouse)
- [ ] Domínio customizado configurado (se aplicável)

## 🐛 Troubleshooting

### Erro: "Page not found" ao navegar
- **Solução**: Verifique se o arquivo `_redirects` está em `client/public/`

### Erro: "Failed to fetch" no chatbot/formulário
- **Solução**: Verifique CORS no backend e variável `VITE_API_URL`

### Build falha no Netlify
- **Solução**: Verifique Node version (deve ser 18) e logs de build

### Imagens não carregam
- **Solução**: Verifique se as imagens estão em `client/public/`

## 📈 Monitoramento

### Netlify Analytics
- Ative em "Site settings" → "Analytics"
- Monitore visitantes, pageviews, etc.

### Google Analytics
- Adicione tracking code no `index.html`
- Configure eventos de conversão

## 💰 Custos Estimados

### Opção 1 (Frontend Apenas):
- Netlify: **Gratuito** (100GB bandwidth/mês)
- **Total: R$ 0/mês**

### Opção 2 (Frontend + Backend):
- Netlify: **Gratuito**
- Render (backend): **Gratuito** ou $7/mês
- PlanetScale (database): **Gratuito** (5GB storage)
- **Total: R$ 0-35/mês**

## 🎓 Recursos Adicionais

- [Documentação Netlify](https://docs.netlify.com/)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [Render Docs](https://render.com/docs)
- [PlanetScale Docs](https://planetscale.com/docs)

## 🆘 Suporte

Se encontrar problemas, verifique:
1. Logs de build no Netlify
2. Logs do servidor no Render/Railway
3. Console do navegador (F12)
4. Network tab para erros de API

---

**Desenvolvido com 💜 pela equipe Modo Magnus**
