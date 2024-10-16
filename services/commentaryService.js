const axios = require('axios');
const { BASE_URL, HEADERS } = require('../config/apiConfig');

const fetchMatchScorecard = async (matchId) => {
    try {
        const response = await axios.get(`${BASE_URL}/match/${matchId}/scorecard`, { headers: HEADERS });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch match scorecard');
    }
};

const generateCommentary = (scorecard) => {
    const commentary = [];
    scorecard.overs.forEach(over => {
        over.balls.forEach(ball => {
            const ballDesc = `${ball.batsman} scores ${ball.runs} run(s) off ${ball.bowler}`;
            commentary.push(ballDesc);
        });
    });
    return commentary;
};

module.exports = { fetchMatchScorecard, generateCommentary };
