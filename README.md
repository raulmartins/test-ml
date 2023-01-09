![Logo](https://tm.ibxk.com.br/2021/08/11/11165408110376.jpg?ims=1120x420)

# Teste de avaliação Software Engineer Frontend

Teste avaliação para Mercado Livre é uma página onde os usuários podem procurar e encontrar produtos específicos à venda na plataforma. Essa página pode ser acessada digitando o nome ou palavra-chave do produto na barra de pesquisa no topo da página. Os resultados da pesquisa exibirão uma lista de produtos que atendem aos critérios de pesquisa, juntamente com informações sobre cada produto, como o preço, o vendedor e a descrição do produto. Os usuários podem usar essa página para comparar diferentes produtos e encontrar o que melhor atende às suas necessidades.

## Referência

- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
- [NextJS Docs](https://nextjs.org/docs)

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
```

## Stack utilizada

**Front-end:** Next, React, Playwright, React-testing-library, Storybook, Next-seo, Typescript, Sass, Husky, LintStaged, Eslint

**Back-end:** Node, Next-swagger-doc, Typescript

## Instalação

Instale teste-ml com npm

```bash
  cd teste-ml
  npm install
  npm run start
```

Instale teste-ml com yarn

```bash
  cd teste-ml
  yarn start

```

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
