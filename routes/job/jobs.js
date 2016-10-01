const Job = require('../../lib/job');

module.exports = {
  method: 'GET',
  path: '/',
  handler(req, reply) {
    Job.find({}).then(items => reply.view('jobs', { items }));
  },
};
