import * as Koa from 'koa'
import * as Logger from 'koa-logger'
import * as Json from 'koa-json'
import * as path from 'path'
const app = new Koa()

module.exports = app

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
import './routes/index'

app.listen(3000)