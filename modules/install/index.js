const logger          = require(process.cwd() + "/utils/logger");
const r               = require(process.cwd() + "/utils/r");
const argv            = require("optimist").argv;

const dropDb          = require("./db/dropDB");
const validateDb      = require("./db/validateDB");
const createDb        = require("./db/createDB");
const validateTables  = require("./tables/validateTables");

module.exports = () => {
  return new Promise( async(resolve, reject) => {
    if(argv.mode != "full"){
      logger.info("not running a full node, no need to verify install");
      return resolve(true);
    }
    logger.silly("validating install");
    try{
      if(argv.forceFreshInstall){
        await dropDb();
      }

      let dbValid = await validateDb();
      if(!dbValid){
        dbValid = await createDb();
        if(!dbValid){
          return reject(new Error("Failed to create the database '" +
            config.rethinkdb.db + "'"));
        }
      }
      let invalidTables = await validateTables();
      console.log(invalidTables);

    }catch (err){
      reject(err);
    }
  });
};