const form = document.getElementById("newItem");
const list = document.getElementById("list");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((element) =>{
    newElement(element)
})

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = event.target.elements["name"]
    const quantity = event.target.elements["quantity"]

    const currentItem = {
        "name": name.value,
        "quantity": quantity.value
    }

    newElement(currentItem)

    itens.push(currentItem)

    localStorage.setItem("itens", JSON.stringify(itens))

    name.value = ""
    quantity.value = ""
})

function newElement(item) {
    const newItem = document.createElement("li")
    newItem.classList.add("item")

    const itemNumber = document.createElement("strong")
    itemNumber.innerHTML = item.quantity

    newItem.appendChild(itemNumber)
    newItem.innerHTML += item.name

    list.appendChild(newItem)

}
