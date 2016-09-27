const {
  createServer,
  setConnection,
  addRoutes,
  registerPlugins,
  startServer,
} = require('@matthewglover/hapi-wrapper');


const env = require('env2')('./.env');
const connectionOptions = require('./options/connection');
const configureHandlebars = require('./configure_handlebars');
const { logStartup, logUnhandledError } = require('./loggers');
const plugins = require('./plugins');
const routes = require('./routes');

require('monk')(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/worthwhile-charity`).then((db) => {
  console.log(db._state);
}).catch((err) => {
  console.log(err);
});


createServer()
.then(setConnection(connectionOptions))
.then(registerPlugins(plugins))
.then(configureHandlebars)
.then(addRoutes(routes))
.then(startServer)
.then(logStartup)
.catch(logUnhandledError);
