const Handlebars = require('handlebars');

const buildJobStatusFilter =
  (crntSortBy, jobStatusFilter, sortBy, sortDirection) => {
    const direction =
      crntSortBy === sortBy
        ? (sortDirection || 1) * -1
        : 1;

    return `/?filterJobStatus=${jobStatusFilter || ''}&sortBy=${sortBy}&sortDirection=${direction}`;
  };

Handlebars.registerHelper('renderSortLink', buildJobStatusFilter);
