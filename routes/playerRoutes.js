const express = require('express');
const { getPlayerDetails } = require('../controllers/playerController');
const router = express.Router();

router.get('/players/:id', getPlayerDetails);

module.exports = router;
