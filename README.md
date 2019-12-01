<h1 align="jusitify">
  Background Jobs
</h1>

<p align="justify"> API created using NodeJS with Bull and Redis to implement jobs needing execute in background improving performance that API.</p>

## Tools

- [node.js](https://nodejs.org) — Execution environment Javascript to server.
- [nodemon](https://github.com/remy/nodemon) — Monitors files update and restart server.
- [express](https://github.com/expressjs/express) — Framework NodeJS.
- [sucrase](https://github.com/alangpierce/sucrase) — Alternative to Babel that allows super-fast development builds.
- [npm-run-all](https://github.com/mysticatea/npm-run-all) — Run multiple npm scripts in parallel or sequential.
- [nodemailer](https://github.com/nodemailer/nodemailer) — Send e-mails with NodeJS.
- [bull](https://github.com/OptimalBits/bull) — Queue package for handling distributed jobs and messages.
- [bull-board](https://github.com/vcapretz/bull-board) — Queue background jobs inspector.

## Requirement

- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Redis](https://redis.io/download)

## Install and Run

1. Clone this repository;
2. Enter the folder `cd background-jobs`;
3. Run `yarn` to install dependencies;
4. Run `redis-server` to start redis;
5. Run `yarn dev` to start server;

---
