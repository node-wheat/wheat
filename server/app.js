const Koa = require('koa');
const app = new Koa();
const http = require('http');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const ejs = require('koa-ejs');
var Router = require('koa-router')
var router = new Router();
var routes = require('./routes/web');
var proxy = require('koa-proxy');
const viewDir = path.resolve(__dirname, '../web/view');
console.log(123, app)
// app.use(async (ctx, next) => {
//   await next();
//   const rt = ctx.response.get('X-Response-Time');
//   console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });
app.use(proxy({
  host:  'http://localhost:3001',
  match: /^\/home\//
}));
ejs(app, {
  root: viewDir,
  viewExt: 'html',
  cache: false,
  debug: false,
  layout: null
  // locals: locals
});

app.use(bodyParser());
routes(router, app);
// router.get('/package', function (ctx) {
//   ctx.body = 'hello world'
//   // return this.render('index');
// });
app.use(router.routes(app))
  .use(router.allowedMethods());

// x-response-time

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });
http.createServer((function () {
  console.log('app is listening on port 3000');
  return app.callback();
})()).listen(3000);

// app.listen(3000, function () {
//   'app is listening on port 3000'
// });