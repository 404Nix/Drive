const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [3, "Username must be 3 letters long!"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minlength: [13, "Email must be 13 letters long!"],
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: [5, "Password must be 5 letters long!"],
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
