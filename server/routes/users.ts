const router = require('koa-router')()

router.prefix('/api/v1/users/')

router.get('/', async (ctx, next) => {
  ctx.body = "User path!"
})

export default router