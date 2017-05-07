const Router = require("koa-router");
const koaBody = require("koa-body");
const observer = require("./observer/index");
const client = require("./client/index"); // should be called something else this is the browser facing api

const routes = new Router();
//routes.use(koaBody());
routes.get("/api", (ctx, next)=>{
  ctx.body = "foo";
});
routes.use("/api/observer/v1", observer.routes());
routes.use("/api/client/v1", client.routes());

module.exports = routes;