// Load any environment variables first
require('env2')('./.env');

const Job = require('./lib/job');
const genFakeJobs = require('./lib/gen_fake_jobs');
const dbConnect = require('./lib/db_connect');

dbConnect();

Job.create(genFakeJobs(100))
  .then(res => console.log('SUCCESS')) // eslint-disable-line
  .catch(err => console.log('ERROR')); // eslint-disable-line
