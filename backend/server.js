const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes'); 
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
  });


app.use(cors()); 
app.use(bodyParser.json()); 


app.use('/api/students', studentRoutes); // All student routes prefixed with /api/students


app.get('/', (req, res) => {
  res.send('Server is running');
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
