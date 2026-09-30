# Projeto Produtos (Next.js)

Uma aplicação web moderna desenvolvida com **Next.js** para gerenciamento e exibição de produtos. O projeto explora recursos do Next.js como renderização no lado do servidor (SSR), rotas dinâmicas, consumo de APIs e estilização responsiva.

---

## Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Recursos e Funcionalidades](#-recursos-e-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Scripts Disponíveis](#-scripts-disponíveis)

---

## Sobre o Projeto

O **Projeto Produtos** é uma aplicação construída dentro do monorepo/repositório `projetosnext` de [ajtelesnavarro](https://github.com/ajtelesnavarro). Ela foi desenvolvida com o objetivo de praticar conceitos fundamentais do ecossistema React/Next.js, como:

- Criação e navegação entre rotas de catálogo e detalhes de produto.
- Renderização eficiente e otimização de imagem.
- Integração e consumo de dados via API REST ou arquivos locais.
- Interface amigável e adaptável a telas de celulares e desktops.

---

## ✨ Recursos e Funcionalidades

- **Catálogo de Produtos:** Listagem dinâmica com cards informativos (nome, imagem, preço, categoria).
- **Detalhes do Produto:** Página dinâmica (`/produtos/[id]`) exibindo especificações e descrição completa do item.
- **Filtros e Busca:** Pesquisa por nome ou filtragem por categorias de produtos.
- **Layout Responsivo:** Interface limpa adaptada para diferentes dispositivos.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://reactjs.org/)** — Biblioteca principal para a interface do usuário.
- **[Next.js](https://nextjs.org/)** — Framework React com suporte a SSR/SSG e navegação otimizada.
- **[TypeScript](https://www.typescriptlang.org/)** ou **JavaScript (ES6+)** — Linguagem base do projeto.
- **[Tailwind CSS](https://tailwindcss.com/)** / **CSS Modules** — Estilização modular e responsiva.
- **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript.

---

## ⚙️ Como Executar o Projeto

1. **Clone o repositório principal:**
   ```bash
   git clone https://github.com/ajtelesnavarro/projetosnext.git
   ```

2. **Navegue até a pasta do projeto:**
   ```bash
   cd projetosnext/projetoprodutos
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

5. **Acesse no navegador:**
   Abra [http://localhost:3000](http://localhost:3000) para visualizar a aplicação em execução.

---

## 📜 Scripts Disponíveis

No diretório `projetoprodutos`, você pode executar os seguintes comandos:

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o modo de desenvolvimento com *Hot Reloading*. |
| `npm run build` | Compila o projeto para produção otimizada. |
| `npm run start` | Inicia o servidor Node.js em modo de produção após a compilação. |
| `npm run lint` | Executa a verificação estática de código com ESLint. |

---