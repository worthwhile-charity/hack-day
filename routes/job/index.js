const jobs = require('./jobs');
const job = require('./job');
const invoice = require('./invoice');
const contract = require('./contract');
const updateJob = require('./update_job');
const updateJobStatus = require('./update_job_status');


module.exports = [
  job,
  jobs,
  invoice,
  contract,
  updateJob,
  updateJobStatus,
];
