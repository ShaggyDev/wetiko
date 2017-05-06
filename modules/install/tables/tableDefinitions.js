const r           = require(process.cwd() + "/utils/r");

module.exports = {
  logs: {
    name        : "logs",
    primaryKey  : "username",
    indexes: [
      {name: "createdAt", func: r.row("createdAt")},
      {name: "level_createdAt", func: [r.row("level"), r.row("createdAt")]},
      {name: "source_createdAt", func: [r.row("source"), r.row("createdAt")]}
    ],
    lastAction : [{
      moduleName: "users.lastAction.js"
    }]
  },
  users: {
    name        : "users",
    primaryKey  : "username",
    indexes: [
      {name: "createdAt", func: r.row("createdAt")}
    ],
    lastAction : [{
      moduleName: "users.lastAction.js"
    }]
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
  benchmark_runs: {
    name        : "benchmark_runs",
    primaryKey  : "id",
    indexes: [
      {name: "createdAt", func: r.row("createdAt")}
    ],
    lastAction  : false
  },
  benchmark_tests: {
    name        : "benchmark_tests",
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
  },
  clusters: {
    name        : "clusters",
    primaryKey  : "id",
    indexes: [
      {name: "createdAt", func: r.row("createdAt")},
      {name: "apiKey", func: r.row("server")("apiKey")}
    ],
    lastAction  : false
  },
  cluster_stats: {
    name        : "cluster_stats",
    primaryKey  : "id",
    indexes: [
      {name: "createdAt", func: r.row("createdAt")},
      {name: "apiKey", func: r.row("server")("apiKey")}
    ],
    lastAction  : false
  },
  cluster_databases: {
    name        : "cluster_databases",
    primaryKey  : "id",
    indexes: [

    ],
    lastAction  : false
  },
  cluster_database_stats: {
    name        : "cluster_database_stats",
    primaryKey  : "id",
    indexes: [

    ],
    lastAction  : false
  },
  cluster_servers: {
    name        : "cluster_servers",
    primaryKey  : "id",
    indexes: [

    ],
    lastAction  : false
  },
  cluster_server_stats: {
    name        : "cluster_server_stats",
    primaryKey  : "id",
    indexes: [

    ],
    lastAction  : false
  },

  cluster_tables: {
    name        : "cluster_tables",
    primaryKey  : "id",
    indexes: [

    ],
    lastAction  : false
  },
  cluster_table_stats: {
    name        : "cluster_table_stats",
    primaryKey  : "id",
    indexes: [

    ],
    lastAction  : false
  },
  cluster_issues: {
    name        : "cluster_issues",
    primaryKey  : "id",
    indexes: [

    ],
    lastAction  : false
  },
  cluster_logs: {
    name        : "cluster_logs",
    primaryKey  : "id",
    indexes: [

    ],
    lastAction  : false
  },

};