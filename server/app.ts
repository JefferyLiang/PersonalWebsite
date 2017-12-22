import * as Koa from 'koa'
import * as Logger from 'koa-logger'
import * as Json from 'koa-json'
import * as path from 'path'
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
import main from './routes/index'
app.use(main.routes())

module.exports = app