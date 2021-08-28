# Hipoz api

## Manual Installation

Clone the repo:

```bash
git clone --depth 1 https://github.com/aryan-sharma21/Hipoz-api hipoz-api
```

Install the dependencies:

```bash
yarn install
```

## Table of Contents

-   [LeanIt api](#LeanIt-api)
    -   [Manual Installation](#manual-installation)
    -   [Table of Contents](#table-of-contents)
    -   [Features](#features)
    -   [Commands](#commands)
    -   [Environment Variables](#environment-variables)
    -   [Project Structure](#project-structure)
## Technologies

-   **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
-   **Authentication and authorization**: using [passport](http://www.passportjs.org) and [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
-   **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
-   **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
-   **Testing**: unit and integration tests using [Jest](https://jestjs.io)
-   **Error handling**: centralized error handling mechanism
-   **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
-   **Dependency management**: with [Yarn](https://yarnpkg.com)
-   **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
-   **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
-   **Docker support**
-   **Linting**: with [ESLint](https://eslint.org)

## Commands

Running locally:

```bash
yarn run dev
```

Running in production:

```bash
yarn start
```

Testing:

```bash
yarn test
```

Linting:

```bash
yarn lint

# fix ESLint errors
yarn lint:fix
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=5000

# URL of the Mongo DB
MONGO_URL=mongodb://localhost:27017/database

# JWT secret key
JWT_SECRET=mysecretkey
```

## Project Structure

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models
 |--routes\         # Routes
 |--utils\          # Utility classes and functions
 |--app.js          # Express app
 |--index.js        # App entry point
```