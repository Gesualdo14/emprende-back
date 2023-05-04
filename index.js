require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT

// Servir archivos estáticos
app.use((req, res, next) => {
  const referer = req.headers.referer
  console.log({ method: req.method, referer })
  next()
})
app.use(express.static("public"))

// COnfigurar RUTAS
app.get("/", function (req, res) {
  res.send("Hello World!")
})

app.get("/users", function (req, res) {
  res.send([{ name: "Martin" }, { name: "Francisco" }])
})

// Poner a escuchar la APP en un puerto
app.listen(port, function () {
  console.log(`Example app listening on port ${port}. Dirname: ${__dirname}`)
})
