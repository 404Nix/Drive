const express = require("express")
const userRouter = require("./routes/user.routes")
const userModel = require('./model/users')
const connection = require('./config/db')

const app = express()


app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/users", userRouter)


app.listen(3000, () => {
    console.log("Server Listening on to port 3000")
})