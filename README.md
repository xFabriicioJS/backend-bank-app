# bankApp - Backend com Node.JS

Uma aplicação bancária backend feita com Node, Express e Sequelize. 

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
Node.JS
```

### 🔧 Instalação

Faça o clone desse reposit´ório com o seguinte comando:

```
git clone https://github.com/xFabriicioJS/backend-bank-app.git
```

Acesse a pasta criada com:

```
cd backend-bank-app
```

Instale as dependências com:

```
yarn ou npm install
```

Agora, crie um arquivo ".env" para configurar suas variáveis de ambiente para coincidir com as configurações do banco de dados. Como no exemplo abaixo:

```
DATABASE_HOST='localhost'
DATABASE_PORT='3306'
DATABASE_NAME='banktest'
DATABASE_USER='root'
DATABASE_PASSWORD=''
```

Finalmente, execute o comando abaixo para iniciar a aplicação:

```
npm run dev
```

Caso seja preciso, o arquivo "api.http" contém as rotas da aplicação para serem testadas no Insomnia, Postman ou até mesmo pela extensão REST Client do VSCode.

## 🛠️ Construído com

- [Node.JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/) - O framework mais utilizado no ecossistema Node
- [Sequelize](https://sequelize.org/) - ORM utilizado para o banco de dados
- [MySQL](https://www.mysql.com/) - Banco de dados utilizado
- [Typescript](https://www.typescriptlang.org/) - Linguagem utilizada para o desenvolvimento

⌨️ com ❤️ por [Fabricio Monteiro](https://github.com/xFabriicioJS) 😊
