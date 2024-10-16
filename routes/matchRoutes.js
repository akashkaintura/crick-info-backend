const express = require('express');
const { getMatchDetails } = require('../controllers/matchController');
const router = express.Router();

router.get('/matches', getMatchDetails);

module.exports = router;
