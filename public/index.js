fetch("/api/v1/todo")
  .then((response) => {
    console.log("response", response)
  })
  .catch((err) => {
    console.log("err", err)
  })
