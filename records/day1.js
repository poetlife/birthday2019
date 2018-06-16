// this js file was created at 2018年6月17日00:20:34 for 2018-6-16
// 这个项目是一个简单的node.js服务器

const Koa = require("koa2");
const app = Koa();

// 创建路由功能
app.use(async(ctx, next)=>{
    await next();
    ctx.respose.type = "text/html";
    ctx.respose.body = "<h1>love you uozoyo, peng</h1>";
})

// 监听端口
app.listen(3000);