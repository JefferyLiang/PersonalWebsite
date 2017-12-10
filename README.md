# koa-ts

> a Koa 2 project, in this project you can use typescript to finish your koa server.

The project is clean, just inject some base middleware in this.

You can use the typescript to development your koa project.

If you want to deploy the project, I recommend to use the [pm2](https://github.com/Unitech/pm2). 

If you just want to run in dev env, I install the ts-node and nodemon in the project, you can use `npm run dev`to make the koa start.

## README LANGUAGE

[中文文档](https://github.com/JefferyLiang/koa-ts/blob/master/README.cn.md)

## Getting started

```bash

// install the pm2 in global

npm install -g pm2

pm2 install typescript

// install node_modules

npm install

// run in the devlopment env

npm run dev

// run in the production env by pm2

npm run prod

// stop the pm2

npm run prod-stop

```

## Directory Structure

```
.
|
| --- client // the website client file
|
| --- config // the project global config file
|
| --- public // the project public static resource file
|
| --- server // the koa 2 project file
|       |
|       | --- app.ts // main koa server file
|       |
|       | --- config // the koa 2 config file
|       |
|       | --- controllers // the koa 2 controllers file
|       |
|       | --- middlewares // the koa 2 middleware setting file
|       |
|       | --- routes // the koa 2 routes file
```

## install the cors middleware to rsolve the cross-domain when you development your website

You can run the vue project by `npm run dev` in client file when you finish the vue project init.

But the vue project listening the `8080` port, and koa listen the `3000` port.

Install the `koa-cors` to rsolve the cross-domain.

```bash
npm i @koa/cors@2 -D
```

Use the middleware in koa

```ts
// server/app.ts

...

import * as cors from '@koa/cors'
const app = new Koa()

module.exports = app

if (process.env.NODE_ENV === 'development') app.use(cors())

...

```

Now you can use the koa api, when your vue project or angular project is development now.

## use with Vue.js

### init vue project

first init the vue project in the client file, you can use the vue-cli to init the vue project

1. install the vue-cli

```bash
npm i -g vue-cli
```

2. init the project

```bash
vue init webpack
```

if you don't konw how to use vue-cli, you can see [here](https://cn.vuejs.org/v2/guide/installation.html#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7-CLI).

3. install the node package

```bash
npm install
```

4. run the vue.js

```bash
npm run dev
```

5. move to the root dir

```bash
cd ../
```

### deploy the project in production env

1. build the vue prject

```bash

cd client

npm run build

```

2. install the koa-connect-history-api-fallback middleware

```
npm i koa-connect-history-api-fallback -S
```

3. use the middleware in koa and static the vue build file

```ts
// server/app.ts

...

import * as history from 'koa-connect-history-api-fallback'
import * as convert from 'koa-convert'

...

// router
// import './routes/index'

// koa-connect-history-api-fallback
app.use(convert(history()))
app.use(require('koa-static')(path.join(__dirname, '../client/dist')))

...

```

Now you can get the website in the `3000` port.

Tips:

1. the `koa-connect-history-api-fallback` must after then the `koa-router` middleware in `app.ts`.

2. the example is in this project `vue.js` branch.

## use with angular

### init the angular project in client

1. use the angualr-cli to build the client file

```bash

// install the angular cli
npm i -g @angular/cli

// use the cli to create the client
ng new client

```

2. run the angular project

```bash
ng serve --open
```

Now the angular project run in `4200` port, you can check the `localhost:4200`.

### deploy the project in productio env

1. build the angualr project

```bash
cd client && npm run build && cd ../
```

2. install the `koa-connect-history-api-fallback` middleware and uesd

```
npm i koa-connect-history-api-fallback -S
```

update the `server/app.ts` file

```ts
// server/app.ts

...

import * as convert from 'koa-convert'
import * as history from 'koa-connect-history-api-fallback'

...

// router
// import './routes/index'

// koa-connect-history-api-fallback
app.use(convert(history()))
app.use(require('koa-static')(path.join(__dirname, '../client/dist')))

...

```

Tips:

1. the `koa-connect-history-api-fallback` must after then the `koa-router` middleware in `app.ts`.

2. the example is in this project `angular.js` branch.

---
