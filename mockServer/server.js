var koa = require("koa");
var app = new koa();
var router = require("koa-router")()
app.use(router.routes()).use(router.allowedMethods())

router.get("/get/fuck", async (o, next) => {
  console.log(`enter next()`, o.request.query, o.request.body, o.is("json"));
  o.body = "fuck you bitch";
  await next();
})

// app.listen("127.0.0.1:8889")
app.listen("8889");