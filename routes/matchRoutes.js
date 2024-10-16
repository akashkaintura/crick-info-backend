const express = require('express');
const { getMatchDetails } = require('../controllers/matchController');
const router = express.Router();

router.get('/', getMatchDetails);

module.exports = router;
