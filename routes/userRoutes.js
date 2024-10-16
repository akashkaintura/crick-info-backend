const express = require('express');
const { signUp } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signUp);

module.exports = router;

// userRoutes.js
const express = require('express');
const { saveUserPreferences } = require('../controllers/userController');
const router = express.Router();

router.post('/preferences', saveUserPreferences);

module.exports = router;
