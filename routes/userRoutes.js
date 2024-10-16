const express = require('express');
const { saveUserPreferences } = require('../controllers/userController');
const router = express.Router();

router.post('/preferences', saveUserPreferences);

module.exports = router;
