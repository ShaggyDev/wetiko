const logger                = require(process.cwd() + "/utils/logger");
const config                = require(process.cwd() + "/config/config");

const tableDefinitions      = require("./tableDefinitions");
const createTable           = require("./createTable");

/**
 *
 * @param invalidTables {Array} tables to create
 * @returns {Promise}
 */
module.exports = (invalidTables)=>{
  logger.silly(`creating tables in '${config.rethinkdb.db}'`);
  // not super good implementation, proper way would be to only apply the actions needed instead of dropping the table
  return new Promise(async (resolve, reject)=>{
    let tablesCreatedSuccessfully = true;
    try{
      for(let i = 0; i < invalidTables.length; i++ ){
        let created = await createTable(tableDefinitions[invalidTables[i]]);
        if(!created){
          tablesCreatedSuccessfully = false;
        }
      }
      return resolve(tablesCreatedSuccessfully);
    }catch(error) {
      logger.error(error);
      reject(error);
    }
  });
};

