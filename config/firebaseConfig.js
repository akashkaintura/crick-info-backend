const admin = require('firebase-admin');
const serviceAccount = require('../credentials-firebase.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});

const db = admin.firestore();
const auth = admin.auth();

module.exports = { db, auth };
