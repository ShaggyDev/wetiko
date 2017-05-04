const logger          = require(process.cwd() + "/utils/logger");
const r               = require(process.cwd() + "/utils/r");
const argv            = require("optimist").argv;

const dropDb          = require("./db/dropDB");
const validateDb      = require("./db/validateDB");
const createDb        = require("./db/createDB");
const validateTables  = require("./tables/validateTables");
const createTables    = require("./tables/createTables");

module.exports = () => {
  return new Promise( async(resolve, reject) => {
    if(argv.mode != "full"){
      logger.info("not running a full node, no need to verify install");
      return resolve(true);
    }
    let validToContinue = true;
    logger.silly("validating install");
    try{
      if(argv.forceFreshInstall){
        await dropDb();
      }

      let dbValid = await validateDb();
      if(!dbValid){
        validToContinue = false;
        dbValid = await createDb();
        if(!dbValid){
          return reject(new Error("Failed to create the database '" +
            config.rethinkdb.db + "'"));
        }
        validToContinue = true;

      }
      let invalidTables = await validateTables();

      if(invalidTables.length > 0){
        if(await createTables(invalidTables)){
          validToContinue = true;
        }else{
          validToContinue = false;
        }
      }else{
        validToContinue = true;
      }

      return resolve(validToContinue);
    }catch (err){
      reject(err);
    }
  });
};