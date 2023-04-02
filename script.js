const form = document.getElementById("newItem");
const list = document.getElementById("list");

form.addEventListener("submit", (event) => {
    event.preventDefault()

    newElement(event.target.elements["name"].value, event.target.elements["quantity"].value)
})

function newElement(name, quantity) {
    console.log(name);
    console.log(quantity);

    const newItem = document.createElement("li");
    newItem.classList.add("item");

    const itemNumber = document.createElement("strong")
    itemNumber.innerHTML = quantity

    newItem.appendChild(itemNumber);
    newItem.innerHTML += name;

    list.appendChild(newItem);
}
