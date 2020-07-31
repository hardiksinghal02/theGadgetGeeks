const firebase = require('firebase');

const admin = require('firebase-admin');

let serviceAccount = require('./thegadgetgeeks-68229-firebase-adminsdk-vgf47-93ff53b552.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();


var firebaseConfig = {
    apiKey: "AIzaSyBA0_niIHaSWU8SMETne-kD7hVtQNGX-0Y",
    authDomain: "thegadgetgeeks-68229.firebaseapp.com",
    databaseURL: "https://thegadgetgeeks-68229.firebaseio.com",
    projectId: "thegadgetgeeks-68229",
    storageBucket: "thegadgetgeeks-68229.appspot.com",
    messagingSenderId: "969753915361",
    appId: "1:969753915361:web:5ebdd0c9731feabf98eca0",
    measurementId: "G-QK5E3SVRY6"
};

firebase.initializeApp(firebaseConfig);


exports.admin = admin;
exports.firebase = firebase;
exports.db = db;
