const Firebase = require("firebase-admin");

const serviceAcc = require("../drive-project-d0bed-firebase-adminsdk-c2nh3-ea47f5ff82.json");
const firebase = Firebase.initializeApp({
  credential: Firebase.credential.cert(serviceAcc),
  storageBucket: "drive-project-d0bed.appspot.com",
});

module.exports = Firebase;
