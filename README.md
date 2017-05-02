# wetiko

to overwrite defaults, create config.js next to index.js

# big picture

## full node

This is a web server and a thing that orchestrates the benchmarks, makes workers do their work

## worker (not implemented)

This is the thing that actually runs benchmarks, executes queries and keeps track of the results

## observer

This is a thing that monitors the system stats of servers like the ones that are running rethinkdb

# starting a server

##args:
-`--forceFreshInstall=true` will drop the database and force a fresh install
-`--mode` possible values:
-"full" this will run the webserver
-"worker" this will not run webserver and doesn't init the database