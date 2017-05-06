const Router = require("koa-router");
const koaBody = require("koa-body")();
const router = new Router();

const register = require("./register.js");
const init = require("./init.js");

router.get("/register", register);
router.post("/init", koaBody, init);

module.exports = router;