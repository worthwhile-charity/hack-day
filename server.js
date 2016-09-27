// Load any environment variables first
require('env2')('./.env');

const {
  createServer,
  setConnection,
  addRoutes,
  registerPlugins,
  startServer,
} = require('@matthewglover/hapi-wrapper');

const connectionOptions = require('./options/connection');
const configureHandlebars = require('./configure_handlebars');
const { logStartup, logUnhandledError } = require('./loggers');
const plugins = require('./plugins');
const routes = require('./routes');

const dbManager = require('./lib/db/db_manager');


dbManager
.then((db) => {
  console.log(db._state);  // eslint-disable-line
})
.catch((err) => {
  console.log(err);  // eslint-disable-line no-console
});

createServer()
.then(setConnection(connectionOptions))
.then(registerPlugins(plugins))
.then(configureHandlebars)
.then(addRoutes(routes))
.then(startServer)
.then(logStartup)
.catch(logUnhandledError);
