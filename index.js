const http = require("http")

function requestController() {
  // Lógica de nuestra función
  console.log("Hola mundo!!!!!!!")
}

// Configurar nuestro servidor
const server = http.createServer(requestController)

server.listen(4000)

// const http = require("http")
// const fs = require("fs")

// function sendFile(fileName, res) {
//   const filePath = "./public/" + fileName
//   fs.readFile(filePath, (err, htmlFile) => {
//     if (err) {
//       res.writeHead(500, { "Content-Type": "text/plain" })
//       res.end("Hubo un error en el servidor")
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" })
//       res.end(htmlFile)
//     }
//   })
// }

// function requestController(req, res) {
//   // Lógica de nuestra función
//   const url = req.url
//   const urlParts = url.split(".")
//   const fileExt = urlParts[urlParts.length - 1]
//   console.log({ url, fileExt })
//   if (url === "/") {
//     sendFile("index.html", res)
//   }

//   if (url === "/about") {
//     sendFile("about.html", res)
//   }

//   if (!["/about", "/"].includes(url)) {
//     sendFile("404.html", res)
//   }
// }

// // Configurar nuestro servidor
// const server = http.createServer(requestController)

// server.listen(4000)
