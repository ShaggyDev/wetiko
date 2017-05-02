const r           = require(process.cwd() + "/utils/r");

module.exports = {
  users: {
    name        : "users",
    primaryKey  : "username",
    indexes: [
      {name: "createdAt", func: r.row("createdAt")}
    ],
    lastAction : {
      moduleName: "users.lastAction.js"
    }
  },
  workers: {
    name        : "workers",
    primaryKey  : "id",
    indexes: [

    ],
    lastAction  : false
  },
  benchmarks: {
    name        : "benchmarks",
    primaryKey  : "id",
    indexes: [
      {name: "createdAt", func: r.row("createdAt")}
    ],
    lastAction  : false
  },
  benchmark_results: {
    name        : "benchmark_results",
    primaryKey  : "id",
    indexes: [
      {name: "createdAt", func: r.row("createdAt")}
    ],
    lastAction  : false
  }

};