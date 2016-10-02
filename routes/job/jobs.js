const { map } = require('ramda');
const Job = require('../../lib/job');
const { formatDatesToStrings } = require('../../lib/format_job_dates');
const trace = require('../../lib/trace');


const buildQuery = jobStatus =>
  (jobStatus
    ? { jobStatus }
    : {});

const buildSort = (sortBy, sortDirection) =>
  (sortBy
    ? { [sortBy]: sortDirection || 1 }
    : {});

module.exports = {
  method: 'GET',
  path: '/',
  handler(req, reply) {
    const { filterJobStatus, sortBy, sortDirection } = req.query;

    Job
    .find(buildQuery(filterJobStatus))
    .sort(buildSort(sortBy, sortDirection))
    .then(map(formatDatesToStrings))
    .then(trace('Filtered jobs:'))
    .then(jobs => reply.view('jobs', { sortBy, sortDirection, filterJobStatus, jobs }));
  },
};
