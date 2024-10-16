const { fetchMatchData } = require('../services/rapidApiService');
const { db } = require('../config/firebaseConfig');

const getPlayerDetails = async (req, res) => {
    const playerId = req.params.id;
    try {
        const playerData = await fetchMatchData(`cricket/players/${playerId}`);
        await db.collection('players').doc(playerId).set(playerData);
        res.json(playerData);
    } catch (error) {
        console.error('Error fetching player details:', error);
        res.status(500).send('Error fetching player details');
    }
};

module.exports = { getPlayerDetails };
