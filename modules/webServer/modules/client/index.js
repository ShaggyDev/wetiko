const Router            = require("koa-router");
const koaBody           = require("koa-body")();
//const authMiddleware    = require("./utils/auth/authMiddleware");

// handlers
// not really a good solution, should abstract the handlers and the queries, but
// this will have to do for now

const loginHandler     = require("./user/login.js");

const router           = new Router();

router.post("/login", koaBody, loginHandler);

module.exports = router;