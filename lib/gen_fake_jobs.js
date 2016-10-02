const faker = require('faker');

const genFakeJobs = (n) =>
  (Array.from({ length: n }, () =>
    ({
      jobStatus: 'to_issue',
      jobId: faker.random.uuid(),
      jobTitle: faker.company.companyName(),
      jobStartDate: faker.date.future(),
      jobEndDate: faker.date.future(),
      employerName: faker.name.findName(),
      employerCoNo: faker.random.number().toString(),
      employerAddress: faker.address.streetAddress(),
      employeeName: faker.name.findName(),
      employeeAddress: faker.address.streetAddress(),
    })));

module.exports = genFakeJobs;
