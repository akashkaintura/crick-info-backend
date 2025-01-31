const WebSocket = require('ws');
const { fetchMatchData } = require('../services/rapidApiService');

const setupWebSocket = () => {
    const wss = new WebSocket.Server({ port: 8080 });

    wss.on('connection', (ws) => {
        console.log('New client connected for live updates');

        ws.on('message', async (message) => {
            const matchId = message;
            const matchData = await fetchMatchData(`cricket/matches/${matchId}`);
            ws.send(JSON.stringify(matchData));
        });

        ws.on('close', () => console.log('Client disconnected from live updates'));
    });

    return wss;
};

module.exports = { setupWebSocket };
