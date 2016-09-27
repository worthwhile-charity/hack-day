const { pick, head, merge } = require('ramda');
const dbManager = require('./db_manager');

// insertOrUpdate :: (string, Object, [string]) => Promise Object Error
const insertOrUpdate = (collectionName, data, picks) => {
  const collection = dbManager.get(collectionName);
  const findCriteria = pick(picks, data);

  return collection
         .find(findCriteria)
         .then(results =>
           (results.length === 0
           ? collection.insert(data)
           : collection.findOneAndUpdate(findCriteria, merge(head(results), data))));
};

module.exports = insertOrUpdate;
