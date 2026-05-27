# GitHub Explorer

Aplicacao front-end moderna para desafio tecnico da Desbravador Software.

## Descricao do projeto

App client-side em React + Vite para buscar usuarios no GitHub, listar repositores mais relevantes e navegar para detalhes completos de cada repositorio.

## Tecnologias utilizadas

- React 18 + Vite
- React Router DOM
- Axios
- Bootstrap 5 + CSS custom
- Vitest + Testing Library
- ESLint

## Como instalar

```bash
npm install
```

## Como rodar

```bash
npm run dev
```

Acesse: `http://localhost:5173`

## Variaveis de ambiente

Crie um arquivo `.env.local` a partir do `.env.example`:

```bash
cp .env.example .env.local
```

## Estrutura do projeto

```text
src/
  components/
    common/
    layout/
    repos/
    search/
    user/
  hooks/
  pages/
  routes/
  services/
  styles/
  test/
  utils/
```

## Rotas

- `/` Home com busca de usuarios
- `/user/:username` Perfil do usuario + repositorios
- `/repo/:owner/:repo` Detalhes do repositorio
- `*` Pagina 404

## Funcionalidades principais

- Busca de usuario com debounce
- Persistencia da ultima busca em localStorage
- Loading com skeleton states
- Empty states e tratamento global de erros
- Ordenacao de repositorios (estrelas, nome, recentes)
- Filtro por linguagem
- Paginacao simples
- Tema dark/light

## Testes e qualidade

```bash
npm run lint
npm run test
npm run build
```

## Deploy

Projeto preparado para deploy na Vercel com build de Vite.

## Screenshots

Sugestao: adicione imagens em `docs/screenshots/` e referencie aqui:

- Home
- Perfil do usuario
- Detalhes do repositorio

## Melhorias futuras

- Cache de resposta da API para reduzir chamadas
- Virtualizacao de lista para repositorios volumosos
- Telemetria de erros em ambiente de producao
- Testes E2E com Playwright

## Autor

Desenvolvido por Rodrigo Brito.
