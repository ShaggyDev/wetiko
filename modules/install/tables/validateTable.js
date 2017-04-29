const r                     = require(process.cwd() + "/utils/r");
const logger                = require(process.cwd() + "/utils/logger");
const config                = require(process.cwd() + "/config/config");

const checkTableExistance   = require("./checkTableExistance");
const getTableStatus        = require("./getTableStatus");

module.exports = (tableSpecs)=>{
  let tableName             = tableSpecs.name;

  return new Promise(async (resolve, reject)=>{
    if(await checkTableExistance(tableName)) {
      logger.info(`table '${tableName}' is present`);
      if(tableSpecs.indexes.length > 0){
        try {
          let tableStatus   = await getTableStatus(tableName);
          let foundIndexes  = new Set(tableStatus.indexes);
          let indexesFound  = true;

          tableSpecs.indexes.forEach((index)=>{
            if(!foundIndexes.has(index.name)){
              logger.info(`index '${index.name}' not found in table '${tableName}'`);
              indexesFound = false;
              return;
            }
            logger.silly(`index '${index.name}' found in table '${tableName}'`);
          });

          return resolve(indexesFound);
        }catch(error){
          logger.error(`Error fetching table status for table '${tableName}'`);
          return reject(error);
        }
      }

      return resolve(true);

    }else{
      logger.info(`table '${tableName}' doesn't exist`);
      resolve(false);
    }
  });
};
