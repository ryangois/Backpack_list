const form = document.getElementById("newItem");
const list = document.getElementById("list");
const itens = [];

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = event.target.elements["name"]
    const quantity = event.target.elements["quantity"]

    newElement(name.value, quantity.value)

    name.value = ""
    quantity.value = ""
})

function newElement(name, quantity) {
    const newItem = document.createElement("li")
    newItem.classList.add("item")

    const itemNumber = document.createElement("strong")
    itemNumber.innerHTML = quantity

    newItem.appendChild(itemNumber)
    newItem.innerHTML += name

    list.appendChild(newItem)

    const currentItem = {
        "name": name,
        "quantity": quantity

    }

    itens.push(currentItem)

    localStorage.setItem("item", JSON.stringify(itens))
}
