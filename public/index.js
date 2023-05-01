console.log("Este JS va a ser interpretado por el NAVEGADOR")

const btnCreate = document.getElementById("create")
const btnGet = document.querySelector("#get")
const input = document.getElementsByTagName("input")
console.log({ input, btnCreate, btnGet })

btnCreate.addEventListener("click", function () {
  console.log("CLICK!")
  fetch("/api/tasks", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ name: input.value }),
  })
})

btnGet.addEventListener("click", function () {
  fetch("/api/tasks")
})
