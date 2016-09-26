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


createServer()
.then(setConnection(connectionOptions))
.then(registerPlugins(plugins))
.then(configureHandlebars)
.then(addRoutes(routes))
.then(startServer)
.then(logStartup)
.catch(logUnhandledError);
