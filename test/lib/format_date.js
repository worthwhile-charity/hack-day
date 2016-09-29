import test from 'ava';
import moment from 'moment';

const testDate = moment([2016, 8, 26]);

test.only('moment formats dates', t => {
  t.is(testDate.format('DD-MM-YYYY'), '26-09-2016');
});
