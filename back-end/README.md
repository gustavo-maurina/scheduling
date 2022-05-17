# Configurações

## Ambiente de desenvolvimento

```bash
$ node -v
v16.15.0
```

## Rodar projeto

Primeiramente, instalar a CLI do framework com:

```bash
npm i -g @adonisjs/cli
```

depois de instalada a CLI, instalar as dependências do projeto com:

```bash
npm install
```

e por fim, para executar o projeto, executar:

```bash
adonis serve --dev
```

## Migrations

O banco de dados está hospedado no Heroku, e mantive dados inseridos durante testes por lá.

Para voltar o estado do banco ao zero, rodar:

```js
adonis migration:refresh
```
