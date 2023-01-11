![Logo](https://tm.ibxk.com.br/2021/08/11/11165408110376.jpg?ims=1120x420)

# Teste de avaliação Software Engineer Frontend

Teste avaliação para Mercado Livre é uma página onde os usuários podem procurar e encontrar produtos específicos à venda na plataforma. Essa página pode ser acessada digitando o nome ou palavra-chave do produto na barra de pesquisa no topo da página. Os resultados da pesquisa exibirão uma lista de produtos que atendem aos critérios de pesquisa, juntamente com informações sobre cada produto, como o preço, o vendedor e a descrição do produto. Os usuários podem usar essa página para comparar diferentes produtos e encontrar o que melhor atende às suas necessidades.

## Referência

- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
- [NextJS](https://nextjs.org/docs)
- [Storybook](https://storybook.js.org/docs/ember/get-started/introduction)
- [Playwright](https://playwright.dev/docs/intro)
- [Jest](https://jestjs.io/pt-BR/docs/getting-started)
- [Sass](https://sass-lang.com/documentation/)
- [Sentry](https://docs.sentry.io/)

## 🔗 Click no link abaixo para acessar aplicação

[![Teste mercado livre](https://images.sftcdn.net/images/t_app-logo-l,f_auto/p/9bf2824e-96d6-11e6-91e1-00163ec9f5fa/2403975397/mercadolivre-logo.png)](https://test-ml-raulmartins.vercel.app/)

## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

#### Retorna um item

```http
  GET /api/items/${id}
```

#### Retorna documentação do swagger

```http
  GET /api-docs
```

## Documentação

Para rodar documentação do storybook, rode o seguinte comando

```bash
  yarn storybook
  abrir o browser e acessar o endereço http://localhost:6006/
```

## Stack utilizada

**Front-end:** Next, React, Playwright, React-testing-library, Storybook, Next-seo, Typescript, Sass, Husky, LintStaged, Eslint, Sentry

**Back-end:** Node, Next-swagger-doc, Typescript

## Instalação

Instale teste-ml com npm

```bash
  git clone https://github.com/raulmartins/test-ml.git
  cd teste-ml
  npm install
  npm run start
  abrir o browser e acessar o endereço http://localhost:3000/

```

Instale teste-ml com yarn

```bash
  git clone https://github.com/raulmartins/test-ml.git
  cd teste-ml
  yarn start
  abrir o browser e acessar o endereço http://localhost:3000/
```

#### OBS: Em caso da porta 3000 está ocupada, avaliar qual porta a aplicação foi executada

## Rodando os testes

Para rodar os testes unitário, rode o seguinte comando

```bash
  yarn test
  or
  yarn test:ci

```

Para rodar os testes E2E, rode o seguinte comando

```bash
  yarn test:e2e

```

## Autores

- [Raul Mrtins](https://github.com/raulmartins)

## 🔗 Social Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/raulsnitram/)
