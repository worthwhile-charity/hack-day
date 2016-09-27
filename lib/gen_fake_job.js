const faker = require('faker');

const genFakeJob = () =>
  ({
    jobMatchId: faker.random.uuid(),
    employer: {
      name: faker.name.findName(),
      companyNo: faker.random.number(),
      address: faker.address.streetAddress(),
    },
    employee: {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
    },
    job: {
      title: faker.random.words(),
      startDate: faker.date.future(),
      endDate: faker.date.future(),
    },
  });

module.exports = genFakeJob;
