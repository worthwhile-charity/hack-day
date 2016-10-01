const Job = require('../../lib/job');
const { formatStringsToDates } = require('../../lib/format_job_dates');
const trace = require('../../lib/trace');


module.exports = {
  method: 'POST',
  path: '/update-job',
  handler(req, reply) {
    const job = formatStringsToDates(req.payload);
    Job
    .findOneAndUpdate({ jobId: job.jobId }, job)
    .then(trace('Job data to save:'))
    .then(({ jobId }) => reply.redirect(`/job?id=${jobId}`));
  },
};
