import test, { beforeEach, afterEach } from 'ava';
import Job from '../../lib/job';

// NOTE: Need to use require so env variables available to dbConnect
require('env2')('../../.env');
const dbConnect = require('../../lib/db_connect');

const jobA =
  {
    jobStatus: 'to_issue',
    jobId: 'jobA',
    jobTitle: 'Prole',
    jobStartDate: new Date(Date.now()),
    jobEndDate: new Date(Date.now()),
    employerName: 'Employer A',
    employerCoNo: 'Candidate A',
    employerAddress: 'Employer Address A',
    employeeName: 'Employee A',
    employeeAddress: 'Employee Address A',
  };

let jobId;

beforeEach(async () => {
  dbConnect();
  const job = await Job.create(jobA);
  jobId = job._id;  // eslint-disable-line
});

afterEach(async () => {
  await Job.remove({});
});

test('updateJob takes data and creates a job and returns itself', async t => {
  await Job.update({ jobId: 'jobA' }, { employeeName: 'boom' });
  const job = await Job.findById(jobId);
  t.is(job.employeeName, 'boom');
});
