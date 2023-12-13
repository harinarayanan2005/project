// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Replace 'your-mongodb-uri' with your actual MongoDB URI
const mongoURI = '';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
  username: String,
  email: String,
  password: String,
});

app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
