const { evolve } = require('ramda');
const moment = require('moment');

// NOTE: this format must be replicated in the client-side datepicker code
const DATE_FORMAT = 'DD-MM-YYYY';

const dateToString = date =>
  moment(date).format(DATE_FORMAT);

const stringToDate = date =>
  moment(date, DATE_FORMAT).toDate();

const formatDatesToStrings =
  evolve({ jobStartDate: dateToString, jobEndDate: dateToString });

const formatStringsToDates =
  evolve({ jobStartDate: stringToDate, jobEndDate: stringToDate });

module.exports = {
  formatDatesToStrings,
  formatStringsToDates,
};
