const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobStatus: String,
  jobId: String,
  jobTitle: String,
  jobStartDate: Date,
  jobEndDate: Date,
  employerName: String,
  employerCoNo: String,
  employerAddress: String,
  employeeName: String,
  employeeAddress: String,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
