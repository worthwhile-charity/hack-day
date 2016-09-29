// Load any environment variables first
require('env2')('./.env');
// const createJob = require('./lib/jobs/create_job');
const Job = require('./lib/job');
const fakeJobs = require('./lib/fake_jobs')(100); // number of fake jobs
const dbConnect = require('./lib/db_connect');

dbConnect();

Job.create(fakeJobs)
  .then(res => console.log('SUCCESS')) // eslint-disable-line
  .catch(err => console.log('ERROR')); // eslint-disable-line
