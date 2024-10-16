const express = require('express');
const dotenv = require('dotenv');
const wss = require('./utils/websocket');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const matchRoutes = require('./routes/matchRoutes');
const commentaryRoutes = require('./routes/commentaryRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Cricbuzz Clone Backend!');
});

// Route definitions
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/commentary', commentaryRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
