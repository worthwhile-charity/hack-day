const Handlebars = require('handlebars');

Handlebars.registerHelper('ifJobStatus', (jobStatus) => {
  if (jobStatus === 'to_issue') {
    return 'To Be Issued';
  }
  return jobStatus;
});
