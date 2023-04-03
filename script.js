const form = document.getElementById("newItem");
const list = document.getElementById("list");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((element) => {
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

    const exists = itens.find(element => element.name === name.value)

    if (exists) {
        currentItem.id = exists.id

        updateElement(currentItem)

        itens[exists.id] = currentItem
    } else {
        currentItem.id = itens.length
        newElement(currentItem)

        itens.push(currentItem)
    }



    localStorage.setItem("itens", JSON.stringify(itens))

    name.value = ""
    quantity.value = ""
})

function newElement(item) {
    const newItem = document.createElement("li")
    newItem.classList.add("item")

    const itemNumber = document.createElement("strong")
    itemNumber.innerHTML = item.quantity
    itemNumber.dataset.id = item.id
    newItem.appendChild(itemNumber)

    newItem.innerHTML += item.name

    newItem.appendChild(deleteElement())

    list.appendChild(newItem)

}

function updateElement(item) {
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantity
}

function deleteElement() {
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "X"

    deleteButton.addEventListener("click", function () {
        deleteCurrentElement(this.parentNode)
    })

    return deleteButton
}

function deleteCurrentElement(tag) {
    tag.remove()
}