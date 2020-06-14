const koa = require('koa');
const app = koa();

app.use(ctx => {
  ctx.body = '<h1>hello koa!!</h1>';
});
app.listen(3000, () => {
  console.log('start at 3000');
});