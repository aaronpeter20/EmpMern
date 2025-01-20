const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeID: String,
  name: String,
  designation: String,
  salary: Number,
  department: String,
  location: String
});

const employeeModel = mongoose.model('employee', employeeSchema);
module.exports = employeeModel;