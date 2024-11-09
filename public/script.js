const modal = document.getElementById("myModal")
const openModalBtn = document.getElementById("openModalBtn")
const closeModalBtn = document.getElementById("closeModalBtn")
const form = document.getElementById("todoForm")

openModalBtn.onclick = function () {
  modal.style.display = "block"
}

closeModalBtn.onclick = function () {
  modal.style.display = "none"
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

// handle form data
form.addEventListener("submit", function (event) {
  event.preventDefault()

  const formData = {
    name: document.getElementById("name").value,
    shortDescription: document.getElementById("shortDescription").value,
    expiredAt: document.getElementById("expiredAt").value
  }
  console.log("formData", formData)

  fetch("/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then((response) => response.json())
    .then((data) => {
      modal.style.display = "none"
      window.location.reload()
    })
    .catch((error) => {
      console.error("Error:", error)
    })
})
