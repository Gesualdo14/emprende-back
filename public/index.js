console.log("Este JS va a ser interpretado por el NAVEGADOR")

const button = document.getElementById("mi-boton")
console.log(button)

button.addEventListener("click", function () {
  console.log("CLICK!")
  fetch("/api/users")
})
