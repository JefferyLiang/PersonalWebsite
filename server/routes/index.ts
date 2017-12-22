const router = require('koa-router')()
const app = require('../app')
import * as Index from '../controllers/index.controller'

router.prefix('/')

router.get('/', Index.index)

export default router