# LearnIt API

## Manual Installation

Clone the repo:

```bash
git clone https://github.com/Neo945/Learnit.git
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
-   **Cloud storage**: with [AWS S3 bucket](https://github.com/winstonjs/winston)
-   **Testing**: unit and integration tests using [Jest](https://jestjs.io)
-   **Mailing**: with [Nodemailer](https://jestjs.io)
-   **Error handling**: centralized error handling mechanism
-   **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
-   **Dependency management**: with [Yarn](https://yarnpkg.com)
-   **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
-   **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
-   **Docker support**
-   **Linting**: with [ESLint](https://eslint.org) (AirBnB style)
-   **Code formatting**: with [Prettier](https://eslint.org)
-   **Encryption**: with [Bcrypt](https://eslint.org)

## Commands

Running locally:

```bash
yarn run dev
```

Running in production:

```bash
yarn start
```

Running the docker image:

```bash
# building the docker image
docker build -t leanit .

# running the docker image
docker-compose up

# Or

docker run -p 3000:3000 -d leanit
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

## Endpoints

**User endpoints**:\
`POST /api/user/register` - register user\
`POST /api/user/add/info` - Add information for google\
`POST /api/user/login` - Login user\
`GET /api/user/get` - get user\
`GET /api/user/logout` - logout\
`GET /api/user/google` - Google Oauth\
`GET /api/user/google/redirect` - Google Oauth redirect\

**Classroom endpoints**:\
`POST /api/classroom/create` - create a classroom\
`POST /api/classroom/add/user` - add user in classroom\
`POST /api/classroom/remove/user` - remove user from classroom\
`GET /api/classroom/get` - get classroom information\
`GET /api/classroom/teacher/get` - get teacher classroom information\

**Assignment endpoints**:\
`GET /api/ass/user/rem/` - get remaining assignment\
`GET /api/ass/user/sub/` - get submitted assignment\
`POST /api/ass/classroom/get/` - get classroom assignment\
`GET /api/ass/teacher/get/` - get teacher assignment\
`POST /api/ass/submit/` - submit assignment\
`POST /api/ass/create/` - create assignment\

**Task endpoints**:\
`POST /api/task/classroom` - get classroom task\
`GET /api/task/user` - get user task\
`GET /api/task/rem` - get user remaining task\
`POST /api/task/create` - create task\
`POST /api/task/create/res` - create task response\
