const express = require('express');
const { getLiveCommentary } = require('../controllers/commentaryController');
const router = express.Router();

router.get('/:matchId', getLiveCommentary);

module.exports = router;
