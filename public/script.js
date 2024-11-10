const modal = document.getElementById("myModal")
const openModalBtn = document.getElementById("openModalBtn")
const closeModalBtn = document.getElementById("closeModalBtn")
const form = document.getElementById("todoForm")
let updateStatus = false
let updateId

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

  if (updateStatus) {
    fetch(`/todo/${updateId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then(() => {
        modal.style.display = "none"
        window.location.reload()
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  } else {
    fetch("/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then(() => {
        modal.style.display = "none"
        window.location.reload()
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }
})

function handleEdit(id, name, shortDescription, expiredAt) {
  modal.style.display = "block"

  document.getElementById("name").value = name
  document.getElementById("shortDescription").value = shortDescription
  document.getElementById("expiredAt").value = new Date(expiredAt).toISOString().slice(0, 16)

  document.getElementById("todoItemBtn").innerHTML = "Update"

  updateStatus = true
  updateId = id
}

function handleDone(id) {
  fetch(`/todo/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      status: "DONE"
    })
  })
    .then(() => window.location.reload())
    .catch((error) => {
      console.error("Error:", error)
    })
}

function handleDelete(id) {
  fetch(`/todo/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(() => window.location.reload())
    .catch((error) => {
      console.error("Error:", error)
    })
}
