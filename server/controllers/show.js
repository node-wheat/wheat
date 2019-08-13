module.exports = async function show(ctx, next) {
  return await ctx.render('index', {
    title: 'hello world - '
  });
}