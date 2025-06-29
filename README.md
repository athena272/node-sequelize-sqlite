# 📚 API com Node.js, Express, Sequelize e SQLite

Este repositório contém a aplicação desenvolvida durante os cursos da formação **APIs com Node.js e Express** da [Alura](https://www.alura.com.br).

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- Sequelize CLI
- SQLite

## 📁 Organização do Projeto

O projeto segue a arquitetura **MVC**:

- `src/controller` – lógica de controle
- `src/services` – camada de serviço responsável pelas regras de negócio
- `src/database/models` – modelos Sequelize com definição de entidades e associações
- `src/database/migrations` – arquivos para versionamento da estrutura do banco
- `src/database/seeders` – dados de exemplo para popular a base
- `src/routes` – definição das rotas RESTful
- `src/app.js` – configuração do Express
- `server.js` – ponto de entrada do servidor

## 🧪 Funcionalidades

Durante a formação foram abordadas as seguintes funcionalidades:

### Curso 1 – ORM com Node.js: Desenvolvendo uma API

✅ Criação de modelos com Sequelize  
✅ Estruturação da API com Express  
✅ Relações entre tabelas (associações)  
✅ Soft deletes com `paranoid: true`  
✅ CRUD completo para entidades como `Pessoa`, `Curso`, `Matrícula`, `Categoria`

### Curso 2 – ORM com Node.js: Avançando com Sequelize

✅ Escopos e validações nos modelos  
✅ Escopos de associação (`as`)  
✅ Operadores Sequelize (`Op`)  
✅ Transações com Sequelize (`sequelize.transaction()`)

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/athena272/node-sequelize-sqlite.git
```

2. Instale as dependências:

```bash
npm install
```

3. Rode as migrações e os seeders:

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

4. Clone o repositório: 

```bash
npm run dev
```

## 🧪 Testando com o Postman

A API oferece suporte para operações REST nas seguintes rotas:

### 👤 Pessoas (`/people`)

- `GET /people` – Lista pessoas ativas (escopo padrão)
- `GET /people/all` – Lista todas as pessoas (inclusive inativas)
- `GET /people/:id` – Retorna uma pessoa pelo ID
- `POST /people` – Cria uma nova pessoa
- `PUT /people/:id` – Atualiza uma pessoa
- `DELETE /people/:id` – Remove uma pessoa (soft delete)

### 🗂️ Categorias (`/categories`)

- `GET /categories` – Lista todas as categorias
- `GET /categories/:id` – Retorna uma categoria pelo ID
- `POST /categories` – Cria uma nova categoria
- `PUT /categories` – Atualiza uma categoria
- `DELETE /categories` – Remove uma categoria

### 📚 Cursos (`/courses`)

- `GET /courses` – Lista todos os cursos
- `GET /courses?start_date=&final_date=` – Filtra cursos por intervalo de datas
- `GET /courses/:id` – Retorna um curso pelo ID
- `POST /courses` – Cria um novo curso
- `PUT /courses` – Atualiza um curso
- `DELETE /courses` – Remove um curso

### 📝 Matrículas (`/people/:student_id/registration`)

- `POST /people/:student_id/registration` – Cria uma matrícula para o aluno
- `GET /people/:student_id/registration` – Lista todas as matrículas do aluno
- `GET /people/:student_id/registration/all` – Lista todas as matrículas (inclusive canceladas)
- `GET /people/:student_id/registration/confirmed` – Lista matrículas ativas do aluno
- `GET /people/:student_id/registration/:registration_id` – Retorna uma matrícula específica
- `PUT /people/:student_id/cancel` – Cancela todas as matrículas do aluno
- `GET /people/registration/crowded` – Lista cursos com número elevado de matrículas

### 🛠️ Teste

- `GET /` – Verifica se o servidor está online (`Server on 🔥`)

