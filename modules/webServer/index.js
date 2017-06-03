const serve       = require("koa-static");
const Koa         = require("koa");
const app         = new Koa();
const http        = require("http");

const mount       = require("koa-mount");
const send        = require("koa-send");
const io          = require("./socket/index");

const routes      = require("./modules/index.js");
const koaBody = require("koa-body");


app.use(routes.routes());

app.use(mount("/", serve(process.cwd() + "/modules/UI/dist")));
app.use(async (ctx) => {
  // this route enables react router (always servers main.html if the route isn"t catched by other routes)
  await send(ctx,  "/modules/UI/dist/main.html");
});

const server   = http.createServer(app.callback());
io.attach(server);

// todo enable https too
server.listen( 3000 );
console.log("listening on port 3000");


module.exports = {};