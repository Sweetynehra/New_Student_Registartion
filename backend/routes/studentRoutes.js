const express = require('express');
const bcrypt = require('bcryptjs');
const Student = require('../models/student');
const router = express.Router();

router.post('/register', async (req, res) => {
  const {
    name,
    gender,
    dob,
    email,
    loginId,
    password,
    marks,
    course,
    branch,
    examName,
    examYear,
    nationality,
    countryCode,
    phone,
    address,
    category,
    abcId,
    securityQuestion,
    securityAnswer
  } = req.body;

  try {
    // Validate 
    if (!name || !dob || !email || !loginId || !password || !marks || !course || !branch || !examName || !examYear || !nationality || !countryCode || !phone || !securityQuestion || !securityAnswer) {
      return res.status(400).send('Missing required fields');
    }

    // Check if the student already exists based on email or loginId
    const existingStudent = await Student.findOne({ $or: [{ email }, { loginId }] });
    if (existingStudent) {
      return res.status(400).send('Student already registered with this email or login ID.');
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = new Student({
      name,
      gender,
      dob,
      email,
      loginId,
      password: hashedPassword, 
      marks,
      course,
      branch,
      examName,
      examYear,
      nationality,
      countryCode,
      phone,
      address,
      category,
      abcId,
      securityQuestion,
      securityAnswer
    });


    await newStudent.save();
    res.status(201).send('Student Registered Successfully');
  } catch (error) {
    console.error(error); 
    res.status(400).send('Error registering student: ' + error.message);
  }
});

module.exports = router;
