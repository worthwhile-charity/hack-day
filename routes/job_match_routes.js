const Job = require('../lib/job');

const homeRoute = {
  method: 'GET',
  path: '/',
  handler(req, reply) {
    Job.find({}).then(items => reply.view('home', { items }));
  },
};

const viewRoute = {
  method: 'GET',
  path: '/job-match',
  handler(req, reply) {
    const jobId = req.url.query.id;
    Job.findOne({ jobId }).then(job => reply.view('away', job));
  },
};

module.exports = [
  homeRoute,
  viewRoute,
];
