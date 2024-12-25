const multer = require("multer");
const firebaseStorage = require("multer-firebase-storage");
const firebase = require("./firebase.config");
const serviceAcc = require("../drive-project-d0bed-firebase-adminsdk-c2nh3-ea47f5ff82.json");

const storage = firebaseStorage({
  credentials: firebase.credential.cert(serviceAcc),
  bucketName: "drive-project-d0bed.appspot.com",
  unique: true,
});

const upload = multer({
  storage: storage,
});

module.exports = upload;
