const mongoose = require("mongoose");

function connectionTodb() {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("connection established");
  });
}

// console.log(process.env.MONGO_URL)

module.exports = connectionTodb;
