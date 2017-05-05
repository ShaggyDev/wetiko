const Router = require("koa-router");
const koaBody = require("koa-body");
const observer = require("./observer/index");

const routes = new Router();
//routes.use(koaBody());
routes.get("/api", (ctx, next)=>{
  ctx.body = "foo";
});
routes.use("/api/observer/v1", observer.routes());

module.exports = routes;