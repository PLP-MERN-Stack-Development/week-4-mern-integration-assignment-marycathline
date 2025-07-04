const express = require('express');
const router = express.Router();

// Dummy login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log("Login Request Body:", req.body);
  res.json({ message: `Login attempt by ${email}` });
});

// Dummy register route
router.post('/register', (req, res) => {
  console.log("Register Request Body:", req.body); 
  const { name, email, password } = req.body;
  res.json({ message: `User '${name}' registered successfully.` });
});

module.exports = router;
