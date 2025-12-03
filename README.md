<h1 align="center"> Courses API - Knex Query Builder </h1>

<p align="center">
  Uma API RESTful para gerenciamento de cursos e seus respectivos módulos, desenvolvida para dominar o uso de Query Builders em aplicações Node.js.
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-estrutura-do-banco">Banco de Dados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como Rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

## 🚀 Tecnologias

Este projeto utiliza uma stack moderna para back-end com foco em abstração de SQL:

- **[Node.js](https://nodejs.org/)** & **[TypeScript](https://www.typescriptlang.org/)**
- **[Express](https://expressjs.com/)** (Framework Web)
- **[Knex.js](https://knexjs.org/)** (SQL Query Builder)
- **[SQLite](https://www.sqlite.org/)** (Banco de dados leve e embarcado)

## 💻 Sobre o Projeto

O **Courses API** é um sistema backend que permite criar, listar, atualizar e deletar cursos, além de gerenciar os módulos de conteúdo dentro de cada curso.

O principal objetivo técnico deste projeto foi abandonar o SQL puro (Raw Queries) e utilizar o **Knex.js** para construir consultas de forma programática e segura, facilitando a manutenção e a portabilidade do código entre diferentes bancos de dados.

Funcionalidades implementadas:
- **CRUD de Cursos:** Criação, leitura, atualização e remoção.
- **Relacionamento:** Busca de módulos atrelados a um curso específico (Join/Where).
- **Seeds & Migrations:** Controle de versão do banco de dados via código.

## 🗄 Estrutura do Banco

O banco de dados foi modelado utilizando **Migrations**, garantindo que a estrutura possa ser recriada em qualquer ambiente.

* **Tabela `courses`**: Armazena os dados principais do curso (`id`, `name`, `created_at`).
* **Tabela `course_modules`**: Armazena os módulos e faz referência ao curso pai (`course_id`).

## 🎲 Como Rodar

```bash
# Clone este repositório
$ git clone [https://github.com/miqueiassantoss/fullstack-query-builder-template-main.git](https://github.com/miqueiassantoss/fullstack-query-builder-template-main.git)

# Acesse a pasta do projeto
$ cd fullstack-query-builder-template-main

# Instale as dependências
$ npm install

# Execute as migrations para criar as tabelas
$ npm run knex -- migrate:latest

# (Opcional) Popule o banco com dados iniciais
$ npm run knex -- seed:run

# Inicie o servidor
$ npm run dev

# O servidor rodará na porta:3333
```
<br>

## 📍 Rotas Principais

Aqui estão os principais endpoints disponíveis na API:

- **`GET /courses`** Lista todos os cursos cadastrados.

- **`POST /courses`** Cria um novo curso.

- **`PUT /courses/:id`** Atualiza as informações de um curso existente pelo ID.

- **`DELETE /courses/:id`** Remove um curso do banco de dados.

- **`POST /modules`** Adiciona um novo módulo a um curso específico.

- **`GET /courses/:id/modules`** Lista todos os módulos pertencentes a um curso específico.

<br>

## 📝 Licença

Esse projeto está sob a licença MIT.

---

<p align="center">
  Feito por <a href="https://github.com/miqueiassantoss">Miqueias Santos</a>
</p>
