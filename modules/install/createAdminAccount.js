const r         = require(process.cwd() + "/utils/r");
const config    = require(process.cwd() + "/config/config");
const logger    = require(process.cwd() + "/utils/logger");

const generatePassword = require(process.cwd() + "/modules/auth/generatePasswordAsync");

module.exports = ()=>{
  logger.silly("Inserting admin account");
  return new Promise(async(resolve, reject)=>{

    try{
      let password = await generatePassword();
      let account = {username: "admin", password: password.hashedPassword, createdAt: r.now()};
      console.log(account);
      r.db(config.rethinkdb.db)
        .table("users")
        .insert(account)
        .run()
        .then((result)=>{
          if(result.inserted === 1){
            logger.info(`admin account created: username: 'username', password: '${password.password}'`);
            return resolve(true);
          }
          logger.error("failed to create admin account");
          return resolve(false);
        })
        .error((error)=>{
          logger.error(error);
          reject(error);
        });
    }catch(err){
      logger.error(err);
    }

  });
};