const Handlebars = require('handlebars');

Handlebars.registerHelper('ifJobStatus', jobStatus => {
  switch (jobStatus) {
    case 'to_issue' :
      return 'To issue';
    case 'pending' :
      return 'Pending';
    case 'completed':
      return 'Completed';
    default :
      return jobStatus;
  }
});
