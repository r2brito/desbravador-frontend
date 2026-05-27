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

## Demo online

Acesse a aplicacao publicada em producao: [https://desbravador-desafio.web.app](https://desbravador-desafio.web.app)

## Variaveis de ambiente

Crie um arquivo `.env.local` a partir do `.env.example`:

```bash
cp .env.example .env.local
```

Preencha no `.env.local` as variaveis `VITE_FIREBASE_*` com os dados do projeto Firebase.

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

Deploy configurado para Firebase Hosting.

1. Fazer login no Firebase CLI:

```bash
npm run firebase:login
```

2. Garantir que o arquivo `.env.local` tenha as variaveis `VITE_FIREBASE_*`.

3. Publicar no hosting:

```bash
npm run firebase:deploy
```

4. Para validar localmente antes do deploy:

```bash
npm run firebase:serve
```

Obs.: o arquivo `firebase.json` ja possui rewrite de SPA (`** -> /index.html`) para funcionar com React Router.

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
