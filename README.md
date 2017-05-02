# wetiko

Most of the settings and stuff would be done using a browser, connecting to where ever the "full node" runs

## big picture

### full node (work in progress)

This is a web server and a thing that orchestrates the benchmarks, makes workers do their work

### worker (not implemented)

This is the thing that actually runs benchmarks, executes queries and keeps track of the results

### observer (not implemented)

This is a thing that monitors the system stats (load, cpu, io) of servers like the ones that are running rethinkdb

## starting a server
to overwrite defaults, create config.js next to index.js
### args:
+ --`forceFreshInstall` possible values:
	* `true` will drop the database and force a fresh install
	* `false` would be same as not using this at all
+ --`mode` possible values: (this one should be `role`, I think)

	* `full` this will run the webserver
	* `worker` this will not run webserver and doesn't init the database
	* `observer`