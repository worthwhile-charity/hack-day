const Job = require('../../lib/job');


const updateStatus = status => {
  switch (status) {
    case 'to_issue': return 'pending';
    case 'pending': return 'completed';
    default: return status;
  }
};

module.exports = {
  method: 'POST',
  path: '/update-job-status',
  handler(req, reply) {
    const { jobId, jobStatus } = req.payload;
    Job
    .findOneAndUpdate({ jobId }, { jobStatus: updateStatus(jobStatus) })
    .then(() => reply.redirect(`/job?id=${jobId}`));
  },
};
