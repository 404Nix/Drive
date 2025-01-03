const express = require("express");
const userRouter = require("./routes/user.routes");
const indexRouter = require("./routes/indexa.routes")
const dotenv = require("dotenv");
dotenv.config();
const connection = require("./config/db");
connection();
const cookieParser = require('cookie-parser');

const app = express();

app.set("view engine", "ejs");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRouter);
app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Server Listening on to port 3000");
});
