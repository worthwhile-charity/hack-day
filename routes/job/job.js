const Job = require('../../lib/job');
const trace = require('../../lib/trace');
const { formatDatesToStrings } = require('../../lib/format_job_dates');


module.exports = {
  method: 'GET',
  path: '/job',
  handler(req, reply) {
    const jobId = req.url.query.id;
    Job
    .findOne({ jobId })
    .then(formatDatesToStrings)
    .then(trace('Job data to display:'))
    .then(job => reply.view('job', job));
  },
};
