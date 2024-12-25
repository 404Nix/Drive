const express = require("express");
const router = express.Router();
const upload = require("../config/multer.config");
const file = require('../model/file.model')

router.get("/home", (req, res) => {
  res.render("home");
});

router.post('/upload', upload.single('file'), async(req, res) => {
  const newFile = await file.create({
    path: req.file.path,
    originalName: req.file.originalname,
  })
})

module.exports = router;
