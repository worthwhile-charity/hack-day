const { evolve } = require('ramda');
const moment = require('moment');
const Job = require('../lib/job');

const formatDate = date =>
  moment(date).format('DD-MM-YYYY');

const formatJobDates =
  evolve({ jobStartDate: formatDate, jobEndDate: formatDate });

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
    Job.findOne({ jobId }).then(job => reply.view('job', formatJobDates(job)));
  },
};

const collectForm = {
  method: 'POST',
  path: '/collectForm',
  handler(req, reply) {
    console.log(req.payload);
    Job.findOneAndUpdate({ jobId: req.payload.jobId }, req.payload, (err, job) => {
      if (err)console.log(err);
      console.log(job)
      reply.view('job', job);
    });
  },
};

module.exports = [
  homeRoute,
  viewRoute,
  collectForm,
];
