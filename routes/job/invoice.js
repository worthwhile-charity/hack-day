const Job = require('../../lib/job');
const { formatDatesToStrings } = require('../../lib/format_job_dates');
const trace = require('../../lib/trace');


module.exports = {
  method: 'GET',
  path: '/invoice',
  handler(req, reply) {
    const jobId = req.url.query.id;
    Job
    .findOne({ jobId })
    .then(formatDatesToStrings)
    .then(trace('Invoice job'))
    .then(job => reply.view('invoice', job));
  },
};
