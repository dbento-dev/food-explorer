<p align="center">
  <h1 align="center">Food Explorer</a></h1>
</p>

<p align="center">
  <img width="550" height="99" src="../food-explorer/src/assets/food-explorer-logo.svg">
</p>

<p>Está é a aplicação desenvolvida no formação Explorer da Rocketseat! :rocket:
<br>
Nele pude aprender e aplicar conhecimentos de back-end(Node.js) e front-end(Reactjs).
</p>

---

## Sobre

O FoodExplorer é uma inovadora e cativante aplicação de cardápio digital projetada exclusivamente para um restaurante fictício, trazendo uma experiência gastronômica totalmente única para seus clientes. Combinando tecnologia de ponta e design sofisticado.

Desenvolvida com cuidado e atenção aos detalhes, o Food Explorer oferece uma interface intuitiva e elegante, tornando a navegação pelo cardápio uma verdadeira jornada culinária.

### A aplicação conta com

- Cadastro de usuários com diferentes tipos (admin e usuário) e login através de e-mail e senha, permitindo maior segurança.
- Busca por receita ou ingredientes.
- Cadastrar, editar e excluir uma receita. (admin)
- Adicionar/Remover dos favoritos uma receita. (usuário)
- Sistema de pedidos podendo:
  - Adicionar ao carrinho uma ou mais receitas escolhendo a quantidade desejada para o pedido.
  - Pagamento via PIX ou Cartão de crédito.
- Responsividade para uso no celular ou em dispositivos de diferentes dimensões. (mobile)

### Futuras funcionalidades

- Versão Light (Botão para alterar o tema)
- Histórico de pedidos (usuário)
- Sistema de pedidos: (Controle de status de cada pedido) (admin)
- Manutenção de usuários (admin)

---

## 🎨 Layout

A página inicial em formato desktop é vista na imagem abaixo:

---

## 🛠 Tecnologias

As seguintes tecnologias foram utilizadas durante a criação deste projeto:

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Vite](https://vitejs.dev/)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
- [ReactJs](https://reactjs.org)
- [Styled Components](https://styled-components.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Router Dom](https://react-icons.github.io/react-icons/)
- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com)
- [Nodemon](https://nodemon.io/)
- [SQLite](https://www.sqlite.org/index.html)
- [Knex](https://knexjs.org/)
- [BCryptjs](https://www.npmjs.com/package/bcryptjs)
- [Multer](https://www.npmjs.com/package/multer)
- [CORS](https://www.npmjs.com/package/cors)

---

## 🚀 Como utilizar

Clone o projeto para o local desejado em seu computador.

```bash
$ git clone git@github.com:user/Food-Explorer.git
```

---

#### 🚧 Executando o BackEnd

```bash
# No BackEnd insira uma porta e um secret no arquivo .env vazio
  AUTH_SECRET=
  PORT=

# Navegue até o diretório do BackEnd
$ cd food-explorer-backend

# Instale as dependências necessárias
$ npm install

# Agora inicie o servidor do BackEnd
$ npm run dev
```

---

#### 💻 Executando o FrontEnd

```bash
# Navegue até o diretório do FrontEnd
$ cd food-explorer-frontend

# Instale as dependências necessárias
$ npm install

# Agora inicie o servidor do FrontEnd
$ npm run dev

# O terminal irá exibir o endereço local onde a aplicação está sendo executada. Basta digitar o mesmo endereço em seu navegador preferido. O endereço usado na criação do projeto foi este:

  http://localhost:5173/
```

#### 🔑 Quer ver como a aplicação funciona vista pelo Admin? Use a conta a seguir:

```bash
  e-mail: admin@foodexplorer.com
  senha: 123456
```

---

Este BackEnd foi hospedado diretamente no Render.
Já o Frontend foi hospedado diretamente no Netlify.

---

Obs.: Por estar hospedado em um serviço gratuito, o BackEnd "hiberna" após 15 minutos sem utilização.
<br>
Se você está tentando acessar o site e o BackEnd não responde, apenas aguarde, pois ele estará "inicializando" os serviços.
<br>
Esta etapa poderá demorar até 1 minuto, dependendo da carga nos servidores do Render.

[O resultado FINAL pode ser visto aqui](https://foodxplorer.netlify.app/)
