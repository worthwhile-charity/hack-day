const Job = require('../../lib/job');
const trace = require('../../lib/trace');


const buildQuery = jobStatus =>
  (jobStatus
    ? { jobStatus }
    : {});

module.exports = {
  method: 'GET',
  path: '/',
  handler(req, reply) {
    Job
    .find(buildQuery(req.query.filterStatus))
    .then(trace('Filtered jobs:'))
    .then(items => reply.view('jobs', { items }));
  },
};
