const monk = require('monk');

const connectionString =
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/worthwhile-charity`;

module.exports = monk(connectionString);
