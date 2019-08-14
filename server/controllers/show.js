module.exports = async function show(ctx) {
  const a = await ctx.render('index', {
    title: 'hello world - ',
  });
  return a;
};
