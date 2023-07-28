<p align="center">
  <img width="550"  src="https://github.com/dbento-dev/assets/blob/main/foodexplorer/logo.png">
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

## 🎨 WEB Layout

![SIGNIN](https://github.com/dbento-dev/assets/blob/main/foodexplorer/signin.png)

![REGISTER](https://github.com/dbento-dev/assets/blob/main/foodexplorer/register.png)

![HOME](https://github.com/dbento-dev/assets/blob/main/foodexplorer/home.png)

![SEARCH](https://github.com/dbento-dev/assets/blob/main/foodexplorer/search.png)

![FAVORITES](https://github.com/dbento-dev/assets/blob/main/foodexplorer/favorites.png)

![CART](https://github.com/dbento-dev/assets/blob/main/foodexplorer/cart.png)

---

## 🎨 MOBILE Layout

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
$ git clone git@github.com:dbento-dev/food-explorer.git
```

---

#### 🚧 Executando o back-end

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
  e-mail: admin@email.com
  senha: 1234
```

---

O back-end foi hospedado no Render, já o front-end utilizei o Netlify.

---

**Obs.:** Por estar hospedado em um serviço gratuito, os serviços/api's do back-end podem hiberna após 15 minutos sem utilização.
<br>
Se estiver tentando acessar o site e o back-end não responder, solicito que aguarde, pois o servidor irá reiniciar os serviços.
<br>
Esta etapa poderá demorar até 1 minuto, dependendo da carga nos servidores do Render.

A versão publicada de produção pode ser vista [aqui](https://foodxplorer.netlify.app), ou diretamente pelo site: https://foodxplorer.netlify.app
