require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT

app.use(express.static("public"))

app.get("/api/users", function (req, res) {
  res.send(["Usuario 1", "Usuario 2"])
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})
