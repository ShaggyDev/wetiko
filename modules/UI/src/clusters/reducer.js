const defaultState = {clusterSelected: false,
  selectedCluster: {},
  clusters: [

  {name: "atsfdgdsfg",
    clusterInfo: {
      cluster : {heartbeat_timeout_secs: 10},
      currentIssues: [],
      databases: [{
        id:  "030ef88c-2861-4da8-a4e6-1ec33ef58f0d" ,
        name:  "wetiko",
        tables: [{
          db:  "wetiko" ,
          durability:  "hard" ,
          id:  "1e884393-a620-4a0e-83a1-e991694e3395" ,
          indexes: [
            "createdAt"
          ] ,
          name: "benchmark_results" ,
          primary_key: "id" ,
          shards: [{
            nonvoting_replicas: [ ],
            primary_replica:  "DESKTOP_39A8L9I_c68" ,
            replicas: [
              "DESKTOP_39A8L9I_c68"
            ]
            }
          ] ,
          write_acks:  "majority"}
          ]
        },
        {id:  "311ed93e-f4e4-4e0c-9e55-f1714ef26fe1" ,
          name:  "test",
          tables: [ {
            db:  "test" ,
            durability:  "hard" ,
            id:  "b9c0034d-3fdf-4cf1-8692-0c53b7e79e6b" ,
            indexes: [ ],
            name:  "employee" ,
            primary_key:  "id" ,
            shards: [
              {
                nonvoting_replicas: [ ],
                primary_replica:  "DESKTOP_39A8L9I_c68" ,
                replicas: [
                  "DESKTOP_39A8L9I_c68"
                ]
              }
            ] ,
            write_acks:  "majority"
            }

          ]
        }
      ],
      logs: [],
      servers: {
        instances: [
          {
            cache_size_mb:  "auto" ,
            id:  "6cc2ce4e-14dc-42f5-ae8b-b30a962e6ca8" ,
            name:  "DESKTOP_39A8L9I_c68" ,
            tags: [
              "default"
            ],
            status: {
              id:  "6cc2ce4e-14dc-42f5-ae8b-b30a962e6ca8" ,
              name:  "DESKTOP_39A8L9I_c68" ,
              network: {
                canonical_addresses: [
                  {
                    host:  "127.0.0.1" ,
                    port: 29015
                  }
                ] ,
                cluster_port: 29015 ,
                connected_to: { } ,
                hostname:  "DESKTOP-39A8L9I" ,
                http_admin_port: 8080 ,
                reql_port: 28015 ,
                time_connected: "Wed May 03 2017 02:16:02 GMT+00:00"
            } ,
            process: {
              argv: [
                "rethinkdb"
              ] ,
                cache_size_mb: 1957.859375 ,
                pid: 17600 ,
                time_started: "Wed May 03 2017 02:16:02 GMT+00:00" ,
                version:  "rethinkdb 2.3.5-windows (MSC 190023506)"
            }
            }
          }
        ]
      }
    },
    connected: true,
    workers: 4,
    createdAt:"3days ago",
    nodeCount: 3,
    dbCount: 5,
    primed: true},
    {name: "asdfdfg dsfsdfg",
    clusterInfo: {
      cluster : {heartbeat_timeout_secs: 10},
      currentIssues: [],
      databases: [{
        id:  "030ef88c-2861-4da8-a4e6-1ec33ef58f0d" ,
        name:  "wetiko",
        tables: [{
          db:  "wetiko" ,
          durability:  "hard" ,
          id:  "1e884393-a620-4a0e-83a1-e991694e3395" ,
          indexes: [
            "createdAt"
          ] ,
          name: "benchmark_results" ,
          primary_key: "id" ,
          shards: [{
            nonvoting_replicas: [ ],
            primary_replica:  "DESKTOP_39A8L9I_c68" ,
            replicas: [
              "DESKTOP_39A8L9I_c68"
            ]
            }
          ] ,
          write_acks:  "majority"}
          ]
        },
        {id:  "311ed93e-f4e4-4e0c-9e55-f1714ef26fe1" ,
          name:  "test",
          tables: [ {
            db:  "test" ,
            durability:  "hard" ,
            id:  "b9c0034d-3fdf-4cf1-8692-0c53b7e79e6b" ,
            indexes: [ ],
            name:  "employee" ,
            primary_key:  "id" ,
            shards: [
              {
                nonvoting_replicas: [ ],
                primary_replica:  "DESKTOP_39A8L9I_c68" ,
                replicas: [
                  "DESKTOP_39A8L9I_c68"
                ]
              }
            ] ,
            write_acks:  "majority"
            }

          ]
        }
      ],
      logs: [],
      servers: {
        instances: [
          {
            cache_size_mb:  "auto" ,
            id:  "6cc2ce4e-14dc-42f5-ae8b-b30a962e6ca8" ,
            name:  "DESKTOP_39A8L9I_c68" ,
            tags: [
              "default"
            ],
            status: {
              id:  "6cc2ce4e-14dc-42f5-ae8b-b30a962e6ca8" ,
              name:  "DESKTOP_39A8L9I_c68" ,
              network: {
                canonical_addresses: [
                  {
                    host:  "127.0.0.1" ,
                    port: 29015
                  }
                ] ,
                cluster_port: 29015 ,
                connected_to: { } ,
                hostname:  "DESKTOP-39A8L9I" ,
                http_admin_port: 8080 ,
                reql_port: 28015 ,
                time_connected: "Wed May 03 2017 02:16:02 GMT+00:00"
            } ,
            process: {
              argv: [
                "rethinkdb"
              ] ,
                cache_size_mb: 1957.859375 ,
                pid: 17600 ,
                time_started: "Wed May 03 2017 02:16:02 GMT+00:00" ,
                version:  "rethinkdb 2.3.5-windows (MSC 190023506)"
            }
            }
          }
        ]
      }
    },
    connected: true,
    workers: 4,
    createdAt:"3days ago",
    nodeCount: 3,
    dbCount: 5,
    primed: true},
    {name: "asdfdfsdf sfdfa sfsdfg",
    clusterInfo: {
      cluster : {heartbeat_timeout_secs: 10},
      currentIssues: [],
      databases: [{
        id:  "030ef88c-2861-4da8-a4e6-1ec33ef58f0d" ,
        name:  "wetiko",
        tables: [{
          db:  "wetiko" ,
          durability:  "hard" ,
          id:  "1e884393-a620-4a0e-83a1-e991694e3395" ,
          indexes: [
            "createdAt"
          ] ,
          name: "benchmark_results" ,
          primary_key: "id" ,
          shards: [{
            nonvoting_replicas: [ ],
            primary_replica:  "DESKTOP_39A8L9I_c68" ,
            replicas: [
              "DESKTOP_39A8L9I_c68"
            ]
            }
          ] ,
          write_acks:  "majority"}
          ]
        },
        {id:  "311ed93e-f4e4-4e0c-9e55-f1714ef26fe1" ,
          name:  "test",
          tables: [ {
            db:  "test" ,
            durability:  "hard" ,
            id:  "b9c0034d-3fdf-4cf1-8692-0c53b7e79e6b" ,
            indexes: [ ],
            name:  "employee" ,
            primary_key:  "id" ,
            shards: [
              {
                nonvoting_replicas: [ ],
                primary_replica:  "DESKTOP_39A8L9I_c68" ,
                replicas: [
                  "DESKTOP_39A8L9I_c68"
                ]
              }
            ] ,
            write_acks:  "majority"
            }

          ]
        }
      ],
      logs: [],
      servers: {
        instances: [
          {
            cache_size_mb:  "auto" ,
            id:  "6cc2ce4e-14dc-42f5-ae8b-b30a962e6ca8" ,
            name:  "DESKTOP_39A8L9I_c68" ,
            tags: [
              "default"
            ],
            status: {
              id:  "6cc2ce4e-14dc-42f5-ae8b-b30a962e6ca8" ,
              name:  "DESKTOP_39A8L9I_c68" ,
              network: {
                canonical_addresses: [
                  {
                    host:  "127.0.0.1" ,
                    port: 29015
                  }
                ] ,
                cluster_port: 29015 ,
                connected_to: { } ,
                hostname:  "DESKTOP-39A8L9I" ,
                http_admin_port: 8080 ,
                reql_port: 28015 ,
                time_connected: "Wed May 03 2017 02:16:02 GMT+00:00"
            } ,
            process: {
              argv: [
                "rethinkdb"
              ] ,
                cache_size_mb: 1957.859375 ,
                pid: 17600 ,
                time_started: "Wed May 03 2017 02:16:02 GMT+00:00" ,
                version:  "rethinkdb 2.3.5-windows (MSC 190023506)"
            }
            }
          }
        ]
      }
    },
    connected: true,
    workers: 4,
    createdAt:"3days ago",
    nodeCount: 3,
    dbCount: 5,
    primed: true},



]};

export default (state = defaultState, action) => {
  //this is here just because I'm lazy, prevents a wonky behaviour from redux-socket.io
  //this should not be needed, should be fixed
  //todo: fix this
  if(!action){
    return state;
  }
  switch(action.type) {
    default:
      return state
  }
};
