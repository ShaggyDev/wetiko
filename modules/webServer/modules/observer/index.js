const Router = require("koa-router");
const koaBody = require("koa-body")();
const routes = new Router();

const register = require("./register.js");
const init = require("./init.js");

routes.get("/register", register);
routes.post("/init", koaBody, init);

module.exports = routes;