const sha           = require("sha256");

const webServerPassword = sha.x2(" " + Math.random() * 10000 * Date.now()).substring(0, 32);

module.exports = {
  rethinkdb: {
    // this is for the wetico application, target cluster for tests should be configurable
    host            : "localhost",
    port            : 28015,
    db              : "wetiko",
    timeoutError    : 5000,
    buffer          : 100,
    max             : 1000,
  },
  webServer: {
    port            : 8666,
    password        : webServerPassword
  }
};