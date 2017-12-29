import * as Koa from 'koa'
import * as Logger from 'koa-logger'
import * as Json from 'koa-json'
import * as path from 'path'
import * as convert from 'koa-convert'
import * as history from 'koa-connect-history-api-fallback'
import * as request from 'superagent'
const app = new Koa()

// onError
import { onError } from './middlewares/errorCatcher' 
app.use(onError)

// json
app.use(Json())

// logger
app.use(Logger())

// koa-static
app.use(require('koa-static')(path.join(__dirname, '../public')))

// bodyparser
import bodyparser from './middlewares/bodyparser'
app.use(bodyparser)

// router
// import main from './routes/index'
// app.use(main.routes())

// fallback
app.use(require('koa-static')(path.join(__dirname, '../client/dist')))
app.use(convert(history()))

module.exports = app