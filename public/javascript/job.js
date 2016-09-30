/* global $ */
$('#jobStartDate')
.pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15, // Creates a dropdown of 15 years to control year
  format: 'dd-mm-yyyy',
});

$('#jobEndDate')
.pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15, // Creates a dropdown of 15 years to control year
  format: 'dd-mm-yyyy',
});
$('#invoiceDate')
.pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15, // Creates a dropdown of 15 years to control year
  format: 'dd-mm-yyyy',
});

$('#invoiceDueDate')
.pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15, // Creates a dropdown of 15 years to control year
  format: 'dd-mm-yyyy',
});

// const issueContract = () =>
//   $('#issue-contract-form').submit();
//
// $('#issue-contract-button').on('click', issueContract);
