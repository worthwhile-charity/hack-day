// Load any environment variables first
require('env2')('./.env');
const insert = require('./lib/db/insert');
const fakeJobs = require('./lib/gen_fake_job')(50); // number of fake jobs

insert('jobMatches', fakeJobs)
  .then(res => console.log('SUCCESS: ', res)) // eslint-disable-line
  .catch(err => console.log('ERROR: ', err)); // eslint-disable-line
