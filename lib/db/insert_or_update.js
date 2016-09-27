const { pick } = require('ramda');
const dbManager = require('./db_manager');

// insertOrUpdate :: (string, Object, [string]) => Promise Object Error
const insertOrUpdate = (collectionName, data, picks) =>
  dbManager
  .get(collectionName)
  .update(pick(picks, data), data, { upsert: true });

module.exports = insertOrUpdate;
