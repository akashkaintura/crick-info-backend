const { signUpUser } = require('../services/firebaseService');

const signUp = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await signUpUser(email, password);
        res.status(201).json({ uid: user.uid, message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { signUp };
