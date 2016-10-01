const Job = require('../../lib/job');


module.exports = {
  method: 'GET',
  path: '/contract',
  handler(req, reply) {
    const jobId = req.url.query.id;
    Job
    .findOne({ jobId })
    .then(job => reply.view('contract', job));
  },
};
