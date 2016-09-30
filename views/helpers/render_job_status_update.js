const Handlebars = require('handlebars');

const buttonTitle = jobStatus => {
  switch (jobStatus) {
    case 'to_issue':
      return 'Issue contracts';
    case 'pending':
      return 'Mark as completed';
    default :
      return '';
  }
};

Handlebars.registerHelper('renderJobStatusUpdate', (jobStatus, jobId) =>
  (jobStatus === 'completed'
    ? 'Completed'
    : `<form id="issue-contract-form" action="/update-status" method="post">
        <input name="jobStatus" value="${jobStatus.toString()}" type="hidden" >
        <input name="jobId" value="${jobId.toString()}" type="hidden" >
        <button class="waves-effect waves-light btn-large" style="margin-left: 8px;">
          ${buttonTitle(jobStatus)}
        </button>
      </form>`));
