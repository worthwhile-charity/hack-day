// Load any environment variables first
require('env2')('./.env');
const insert = require('./lib/db/insert');
const genFakeJob = require('./lib/gen_fake_job');

const fakeJobs =
  Array.from({ length: 50 }, genFakeJob);

insert('jobMatches', fakeJobs)
  .then(res => console.log('SUCCESS: ', res)) // eslint-disable-line
  .catch(err => console.log('ERROR: ', err)); // eslint-disable-line
