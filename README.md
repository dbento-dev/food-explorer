<p align="center">
  <img width="550"  src="https://github.com/dbento-dev/assets/blob/main/foodexplorer/logo.png">
</p>

<p>Está é a aplicação desenvolvida no formação Explorer da Rocketseat! :rocket:
<br>
Nela pude aprender e aplicar conhecimentos de back-end utilizando Node.js e banco de dados e front-end com React.js.
</p>

---

## Sobre

O Food Explorer é uma inovadora e cativante aplicação de cardápio digital projetada exclusivamente para um restaurante fictício, trazendo uma experiência gastronômica totalmente única para seus clientes. Combinando tecnologia de ponta e design sofisticado.

Desenvolvida com cuidado e atenção aos detalhes, o Food Explorer oferece uma interface intuitiva e elegante, tornando a navegação pelo cardápio uma verdadeira jornada culinária.

### A aplicação conta com:

- Cadastro de usuários com diferentes tipos (admin e usuário) e login através de e-mail e senha, permitindo maior segurança.
- Busca por receita ou ingredientes.
- Cadastrar, editar e excluir uma receita. (apenas para admin)
- Adicionar/Remover dos favoritos uma receita. (apenas para usuário)
- Sistema de pedidos podendo:
  - Adicionar ao carrinho uma ou mais receitas escolhendo a quantidade desejada para o pedido.
  - Pagamento via PIX ou Cartão de crédito.
- Responsividade para uso no celular ou em dispositivos de diferentes dimensões. (utilizando conceito mobile first)

### Futuras funcionalidades:

- Theme switch - (onde através de um botão o usuário poderá alterar o tema da aplicação entre dark e light)
- Histórico de pedidos (apenas para usuário)
- Gerenciamento de pedidos (apenas para admin)
- Manutenção de usuários (apenas para admin)

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

BREVE

---

## 🛠 Tecnologias

As tecnologias principais utilizadas durante o desenvolvimento deste projeto são:

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
# Repositório do front-end
$ git clone git@github.com:dbento-dev/food-explorer.git

# Repositório do back-end
$ git clone git@github.com:dbento-dev/food_explorer_backend.git
```

---

#### 🎲 Executando o back-end

```bash
# No back-end insira uma porta e um secret no arquivo .env vazio
  AUTH_SECRET=
  PORT=

# Navegue até o diretório do back-end
$ cd food_explorer_backend

# Instale as dependências necessárias
$ npm install

# Inicie o servidor localmente
$ npm run dev
```

---

#### 💻 Executando o front-end

```bash
# Navegue até o diretório do FrontEnd
$ cd food-explorer

# Instale as dependências necessárias
$ npm install

# Inicie a aplicação localmente
$ npm run dev

# O terminal irá exibir o endereço local onde a aplicação está sendo executada.
# Basta digitar o mesmo endereço em seu navegador preferido.
# Exemplo:

http://localhost:5173/
```

#### Crie uma conta (perfil usuário normal) e navegue pela aplicação!

#### 🔑 Gostaria de ver como a aplicação funciona como Admin? Use a conta a seguir:

```bash
  e-mail: admin@email.com
  senha: 1234
```

---

## :warning: **Aviso:**

O back-end foi hospedado no Render, já o front-end utilizei o Netlify.<br>
Por estar hospedado em um serviço gratuito, os serviços/api's do back-end podem hiberna após 15 minutos sem utilização.<br>
Se estiver tentando acessar o site e o back-end não responder, solicito que aguarde, pois o servidor irá reiniciar os serviços.<br>
Esta etapa poderá demorar até 1 minuto, dependendo da carga nos servidores do Render.<br>
A versão publicada de produção pode ser vista [aqui](https://foodxplorer.netlify.app), ou diretamente pelo site: https://foodxplorer.netlify.app
