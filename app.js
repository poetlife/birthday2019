'use strict';

const Koa = require("koa2");
const router = require("koa-router")();

const app = new Koa();

app.use(async (ctx, next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
})

// add router
router.get("/hello/:name", async (ctx, next)=>{
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}</h1>`;
})

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});

// add middlewares
app.use(router.routes());

app.listen(3000);
