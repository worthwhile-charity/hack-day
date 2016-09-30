const Job = require('../lib/job');
const trace = require('../lib/trace');
const { formatStringsToDates, formatDatesToStrings } = require('../lib/format_job_dates');

const homeRoute = {
  method: 'GET',
  path: '/',
  handler(req, reply) {
    Job.find({}).then(items => reply.view('jobs', { items }));
  },
};

const viewRoute = {
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

const invoiceRoute = {
  method: 'GET',
  path: '/invoice',
  handler(req, reply) {
    const jobId = req.url.query.id;
    Job
    .findOne({ jobId })
    .then(job => reply.view('invoice', job));
  },
};

const contractRoute = {
  method: 'GET',
  path: '/contract',
  handler(req, reply) {
    const jobId = req.url.query.id;
    Job
    .findOne({ jobId })
    .then(job => reply.view('contract', job));
  },
};

const updateJobRoute = {
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


const updateStatus = status => {
  switch (status) {
    case 'to_issue': return 'pending';
    case 'pending': return 'completed';
    default: return status;
  }
};

const updateStatusRoute = {
  method: 'POST',
  path: '/update-status',
  handler(req, reply) {
    const { jobId, jobStatus } = req.payload;
    Job
    .findOneAndUpdate({ jobId }, { jobStatus: updateStatus(jobStatus) })
    .then(() => reply.redirect(`/job?id=${jobId}`));
  },
};

module.exports = [
  homeRoute,
  viewRoute,
  invoiceRoute,
  contractRoute,
  updateJobRoute,
  updateStatusRoute,
];
