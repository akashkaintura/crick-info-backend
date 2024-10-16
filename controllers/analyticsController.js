const { calculateRunRate, calculatePartnerships } = require('../services/analyticsService');
const { fetchMatchScorecard } = require('../services/commentaryService');

const getMatchAnalytics = async (req, res) => {
    const { matchId } = req.params;
    try {
        const scorecard = await fetchMatchScorecard(matchId);
        const runRateData = calculateRunRate(scorecard);
        const partnershipData = calculatePartnerships(scorecard);
        res.json({ runRateData, partnershipData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getMatchAnalytics };
