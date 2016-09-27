// Load any environment variables first
require('env2')('./.env');
const faker = require('faker');
const insertOrUpdate = require('./lib/insert_or_update');

const data = {
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
};

insertOrUpdate('jobMatches', data, ['jobMatchId'])
  .then(res => console.log('SUCCESS: ', res)) // eslint-disable-line
  .catch(err => console.log('ERROR: ', err)); // eslint-disable-line
