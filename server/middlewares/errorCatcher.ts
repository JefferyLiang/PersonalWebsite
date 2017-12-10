export const onError = async (ctx, next): Promise<any> => {
  try {
    await next()
  } catch (err) {
    console.log(err)
    ctx.body = err
  }
}