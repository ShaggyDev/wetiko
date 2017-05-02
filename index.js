const config    = require("./config/config");
const logger    = require("./utils/logger");

const install   = require("./modules/install");

logger.info("starting...");

async function init(){
  try{
    await install();
    require("./modules/webServer");
  }catch(err){
    logger.error(err);
  }
  return;
}

init();