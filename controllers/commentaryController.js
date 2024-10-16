const { fetchMatchScorecard, generateCommentary } = require('../services/commentaryService');

const getLiveCommentary = async (req, res) => {
    const { matchId } = req.params;
    try {
        const scorecard = await fetchMatchScorecard(matchId);
        const commentary = generateCommentary(scorecard);
        res.json({ commentary });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getLiveCommentary };
