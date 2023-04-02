const form = document.getElementById("newItem");


form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(evento.target.elements["name"].value)
    console.log(evento.target.elements["quantity"].value)

    console.log("worked")
    console.log(event)

})
