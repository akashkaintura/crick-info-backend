const { fetchMatchData } = require('../services/rapidApiService');
const { db } = require('../config/firebaseConfig');

const getMatchDetails = async (req, res) => {
    try {
        const matchData = await fetchMatchData('cricket/matches');
        await db.collection('matches').doc(matchData.id).set(matchData);
        res.json(matchData);
    } catch (error) {
        console.error('Error fetching match details:', error);
        res.status(500).send('Error fetching match details');
    }
};

const streamLiveMatchData = (wss) => {
    setInterval(async () => {
        const matchData = await fetchMatchData('cricket/matches/live');
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(matchData));
            }
        });
    }, 30000);
};

module.exports = { getMatchDetails, streamLiveMatchData };
