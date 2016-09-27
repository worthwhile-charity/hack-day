// Load any environment variables first
require('env2')('./.env');
const insertOrUpdate = require('./lib/insert_or_update');

const data = {
  jobMatchId: 'a-unique-id',
  employer: {
    name: 'Charity Number 1000',
    companyNo: '123456',
    address: '36 Dunoon Road, London SE23 3TF',
  },
  // employee: {
  //   name: 'Matt Glover',
  //   address: '3a Highgate West Hill, London N6 6NJ',
  // },
  // job: {
  //   title: 'Junior Developer',
  //   startDate: '01/10/16',
  //   endDate: '30/09/17',
  // },
};

insertOrUpdate('jobMatches', data, ['jobMatchId'])
.then(res => console.log('SUCCESS: ', res)) // eslint-disable-line
.catch(err => console.log('ERROR: ', err)); // eslint-disable-line
