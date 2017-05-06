const Router            = require("koa-router");
const koaBody           = require("koa-body")();
const authMiddleware    = require("./utils/auth/authMiddleware");

// handlers
// not really a good solution, should abstract the handlers and the queries, but
// this will have to do for now

const init              = require("./init.js");
const register          = require("./register.js");
const upsertClusterInfo = require("./cluster/upsertClusterInfo");
const upsertServerInfo  = require("./server/upsertServerInfo");
const upsertDbInfo      = require("./db/upsertDbInfo");
const upsertTableInfo   = require("./table/upsertTableInfo");

const router            = new Router();

router.get("/register", register);
router.post("/init", koaBody, init);

router.post("/cluster/:clusterId", authMiddleware, koaBody, upsertClusterInfo);
router.post("/cluster/:clusterId/server/:serverId", koaBody, upsertServerInfo);
router.post("/cluster/:clusterId/db/:dbId", koaBody, upsertDbInfo);
router.post("/cluster/:clusterId/db/:dbId/table/:tableId", koaBody, upsertTableInfo);

module.exports = router;