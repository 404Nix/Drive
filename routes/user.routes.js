const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const userModel = require("../model/users.model");
const bcrypt = require("bcrypt");

router.get("/register", (req, res) => {
  res.render("register");
});

router.post(
  "/register",
  body("email").trim().isEmail().isLength({ min: 10 }),
  body("username").trim().isLength({ min: 3 }),
  body("password").trim().isLength({ min: 5 }),
  async (req, res) => {
    // console.log(req.body)

    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({
        error: error.array(),
        message: "Invalid data",
      });
    }

    // console.log(error)

    const { username, email, password } = req.body;
    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      username,
      email,
      password: hashpassword,
    });

    res.json(newUser);
  }
);

module.exports = router;
