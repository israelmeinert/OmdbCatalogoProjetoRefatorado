# Movie Catalog

Este projeto é um catálogo de filmes construído com [Vite](https://vitejs.dev/) e TypeScript. Ele consulta a [OMDb API](https://www.omdbapi.com/) e exibe os resultados em uma tabela. Ao clicar em um filme é aberto um modal com os detalhes da obra.

## Instalação

1. Instale as dependências com **bun** (ou npm/yarn):
   ```bash
   bun install
   ```
   
2. Inicie o ambiente de desenvolvimento:
   ```bash
   bun run dev
   ```

## Scripts

- `dev` – inicia o servidor de desenvolvimento.
- `build` – compila o projeto.
- `preview` – executa a versão de produção localmente.

## Estrutura do Projeto

- `src/components` – componentes visuais (Modal, Search e Table).
- `src/service` – serviços de comunicação com APIs.
- `src/shared` – interfaces, modelos e DTOs.

## Testes

O projeto possui exemplos simples de testes escritos em Node.js. Para executá-los utilize:

```bash
node tests/run.js
```

(É necessário ter as dependências instaladas.)

## Observações

A chave de acesso da OMDb API deve ser fornecida ao instanciar o serviço `OmdbApi`.
