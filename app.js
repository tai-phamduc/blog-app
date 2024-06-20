const express = require("express")
const app = express()
const blogRoute = require("./routes/blogRoute")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const handleError = require("./middelwares/errorHandlerMiddleware")

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Mongodb connected at ", process.env.MONGODB_URI))
  .catch(() => console.log("Cannot connect to mongodb at ", process.env.MONGODB_URI))

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get("/", (req, res) => {
  res.json({ message: "Welcome to our blog backend"})
})

app.use("/api/blogs", blogRoute)

app.use(handleError)

app.listen(5000, () => console.log("Port 5000 has been started"))

module.exports = app