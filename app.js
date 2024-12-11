const express = require("express")
const userRouter = require("./routes/user.routes")

const app = express()

app.set("view engine", "ejs")


app.use("/users", userRouter)

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(3000, () => {
    console.log("Server Listening on to port 3000")
})