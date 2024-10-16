const express = require('express');
const dotenv = require('dotenv');
const matchRoutes = require('./routes/matchRoutes');
const playerRoutes = require('./routes/playerRoutes');
const { setupWebSocket } = require('./utils/websocket');
const { streamLiveMatchData } = require('./controllers/matchController');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/matches', matchRoutes);
app.use('/api/players', playerRoutes);

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const wss = setupWebSocket(server);
streamLiveMatchData(wss);
