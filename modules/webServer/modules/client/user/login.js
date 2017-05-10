const r                 = require(process.cwd() + "/utils/r");
const config            = require(process.cwd() + "/config/config");
const logger            = require(process.cwd() + "/utils/logger");

const fetchUser         = require(process.cwd() + "/modules/auth/fetchUser");
const validatePassword  = require(process.cwd() + "/modules/auth/validatePasswordHash");
const getJwtToken       = require(process.cwd() + "/modules/auth/getJwtToken");

//todo: input validation

module.exports = async(ctx, next)=>{
  let username = ctx.request.body.username;
  let password = ctx.request.body.password;

  logger.silly(`login attempt username: '${username}' password: '${password}'`);
  try{
    let user = await fetchUser(username);
    let valid = false;
    if(user){
      valid = await validatePassword(password, user.password);
    }
    if(valid){
      ctx.cookies.set("auth_token", await getJwtToken(user), {httpOnly: false});
      ctx.body = {success: true, userData: {authenticated: true, overWrite: true}};
      return ;
    }
    ctx.body = {success: false, error: "auth", errorMsg: `username not found or invalid password`};
  }catch(error){
    logger.error(error);
    ctx.body = {success: false, error: "auth", errorMsg: `unspecified authentication error`};
  }
};