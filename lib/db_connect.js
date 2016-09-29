const mongoose = require('mongoose');

const connectionString =
  process.env.NODE_ENV === 'testing'
    ? process.env.DB_TESTING
    : process.env.DB_PRODUCTION;

const dbConnect = () =>
  mongoose.connect(connectionString);

module.exports = dbConnect;
