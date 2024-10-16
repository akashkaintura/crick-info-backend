const { db } = require('../config/firebaseConfig');

const saveUserPreferences = async (req, res) => {
    const { uid, preferences } = req.body;
    try {
        await db.collection('users').doc(uid).set({ preferences }, { merge: true });
        res.status(200).json({ message: 'Preferences saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save preferences' });
    }
};

module.exports = { saveUserPreferences };
