console.log("Este JS va a ser interpretado por el NAVEGADOR")

// Obtener elementos del HTML y guardarlos en constantes
const button = document.querySelector("button")
console.log({ button })

// Nutrir de funcionalidad a los botones
button.addEventListener("click", function () {
  console.log("CLICK!!")
  fetch("https://emprende-back.onrender.com/users", { mode: "no-cors" })
})
