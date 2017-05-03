const serve     = require('koa-static');
const Koa       = require('koa');
const app       = new Koa();
const mount     = require("koa-mount");
const send      = require('koa-send');
const io        = require("./socket/index");

app.use(mount('/assets', serve(process.cwd() + "/modules/UI/dist/assets")));
app.use(async (ctx) => {
  // this route enables react router (always servers index.html if the route isn't catched by other routes)
  await send(ctx,  "/modules/UI/dist/index.html");
});

io.attach(app);

app.listen(3000);

console.log('listening on port 3000');


module.exports = {};