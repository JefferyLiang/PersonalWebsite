export const logger = async (ctx, next): Promise<any> => {
  const start = new Date()
  await next()
  const ms = new Date().getTime() - start.getTime()
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
}