import test, { beforeEach, afterEach } from 'ava';
import { pick } from 'ramda';
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

beforeEach(() => {
  dbConnect();
});

afterEach(async () => {
  await Job.remove({});
});

test('createJob takes data and creates a job and returns itself', async t => {
  const job = await Job.create(jobA);
  const matchFields = pick(Object.keys(jobA));
  t.deepEqual(matchFields(job), matchFields(jobA));
});
