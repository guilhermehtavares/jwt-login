# 🔐 jwt-login

Projeto de autenticação com login usando **JWT (JSON Web Token)**, feito em JavaScript.

Criei esse projeto pra estudar na prática como funciona o fluxo de autenticação: cadastro, login, geração do token e proteção de rotas.

---

## 💡 Sobre o projeto

O usuário se cadastra, faz login, recebe um token e usa esse token pra acessar rotas protegidas.

Aqui eu quis entender como o token é gerado, assinado e validado em cada requisição, em vez de só copiar um exemplo pronto.

## ⚙️ Funcionalidades

- [ ] Cadastro de usuário
- [ ] Login com geração de token JWT
- [ ] Rota protegida que exige token válido
- [ ] [outra funcionalidade]

## 🛠️ Tecnologias

- JavaScript
- [Node.js / Express / outras]
- [jsonwebtoken / bcrypt / banco de dados, se usar]

## 🚀 Como rodar

```bash
# clone o repositório
git clone https://github.com/guilhermehtavares/jwt-login.git

# entre na pasta
cd jwt-login

# instale as dependências
npm install

# crie o arquivo .env com a chave secreta
# JWT_SECRET=sua_chave_aqui

# rode o projeto
npm start
```

## 📌 Rotas

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/[register]` | Cria um novo usuário |
| POST | `/[login]` | Autentica e retorna o token |
| GET | `/[rota-protegida]` | Exige o token no header `Authorization` |

## 📚 O que aprendi

- Como o JWT funciona (header, payload e assinatura)
- Por que não guardar senha em texto puro
- Como proteger rotas com middleware

## 🔮 Próximos passos

- integrar com PostgreSQL.

---
