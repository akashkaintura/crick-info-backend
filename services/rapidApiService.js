const axios = require('axios');

const fetchMatchData = async (endpoint) => {
    try {
        const response = await axios.get(`https://rapidapi.com/${endpoint}`, {
            headers: {
                'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                'X-RapidAPI-Host': 'YOUR_API_HOST'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data from RapidAPI:', error);
        throw error;
    }
};

module.exports = { fetchMatchData };
