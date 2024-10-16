const admin = require('firebase-admin');
const { getAuth } = require('firebase-admin/auth');

const signUpUser = async (email, password) => {
    const auth = getAuth();
    try {
        const user = await auth.createUser({
            email,
            password,
        });
        return user;
    } catch (error) {
        throw new Error('Error signing up user:', error.message);
    }
};

const loginUser = async (email, password) => {
    // Authentication with Firebase for client-side is typically done with Firebase SDK on the frontend
    // Implementing server-side custom auth token generation if needed
};

module.exports = { signUpUser, loginUser };
