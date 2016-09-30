const Handlebars = require('handlebars');

Handlebars.registerHelper('ifJobStatus', jobStatus => {
  switch (jobStatus) {
    case 'to_issue' :
      return 'To be issued';
    case 'pending' :
      return 'Pending completion';
    case 'completed':
      return 'Completed';
    default :
      return jobStatus;
  }
});
