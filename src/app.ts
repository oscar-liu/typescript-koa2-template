import * as Koa from 'koa';
import * as Router from 'koa-router';

// import MainRoutes from './routers'

const app = new Koa();

const router = new Router();

const users = ['Tom', 'Jack', 'Amy', 'Lena', 'Brian'];


router.get('/users', async (ctx, next) => {
  ctx.response.status = 200;
  ctx.response.body = {
    data: users
  };
})

app.use(router.routes());


app.use(ctx => {
  ctx.body = 'Hello world!';
});

module.exports = app;