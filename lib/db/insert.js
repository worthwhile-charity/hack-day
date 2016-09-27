const dbManager = require('./db_manager');

// insert :: (string, [Object]) => Promise Object Error
const insert = (collectionName, data) =>
  dbManager
  .get(collectionName)
  .insert(data);

module.exports = insert;
