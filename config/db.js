const mongoose = require("mongoose");

const connection = mongoose
  .connect("mongodb://localhost:27017/drive")
  .then(console.log("connection established"));

module.exports = connection;
