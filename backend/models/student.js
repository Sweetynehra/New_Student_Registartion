const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: String,
  dob: { type: Date, required: true},
  email: { type: String, required: true, unique: true },
  loginId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  marks: { type: Number, required: true },
  course: { type: String, required: true },
  branch: { type: String, required: true },
  examName: { type: String, required: true },
  examYear: { type: Number, required: true },
  nationality:{ type: String, required: true },
  countryCode: { type: String, required: true },
  phone: { type: String, required: true },
  address: String,
  category: String,
  abcId: { type: String, required: false }, 
  securityQuestion: { type: String, required: true },
  securityAnswer: { type: String, required: true }

});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
