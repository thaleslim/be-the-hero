
# Backend

> yarn init -y

> yarn add express

> yarn add nodemon sucrase -D

Create nodemon.json

    {
      "execMap": {
        "js": "sucrase-node"
      }
    }

Append to package.json

    "scripts": {
      "dev": "nodemon index.js"
    }

To run backend use:
> yarn dev

BD choice sqlite3

Query builder [Knex.js](https://knexjs.org/)

> yarn add knex --save

> yarn add sqlite3 --save

> npx knex init

edit knexfile.js development database filename

create migrations folder

append to knexfile.js

    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true

> npx knex migrate:make create_ongs

describe [migration](https://knexjs.org/#Installation-migrations)

> npx knex migrate:latest

> yarn add cors

# Frontend

> npx create-react-app frontend

To run frontend use:
> yarn start

https://feathericons.com

> yarn add react-icons

> yarn add react-router-dom

> yarn add axios

# Mobile

https://docs.expo.io

https://reactnavigation.org/

> npx expo install expo-constants

> npx expo install expo-mail-composer

> npm install axios

> npm install intl