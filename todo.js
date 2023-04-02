const formList = document.querySelector("#form-list");
const formWrite = formList.querySelector("#form-write");
const list = document.querySelector("#list");

let book = [];


function save() {
    localStorage.setItem("list-key", JSON.stringify(book))
}

function submit(event) {
    event.preventDefault();
    const listN = formWrite.value
    formWrite.value = "";
    const listNewObj = {
        text: listN,
        id: Date.now()
    }
    viewList(listNewObj)
    book.push(listNewObj)
    save()
}

function viewList(listNewObj) {
    const li = document.createElement("li")
    list.appendChild(li)
    const span = document.createElement("span")
    li.appendChild(span)
    span.innerText = listNewObj.text
    const button = document.createElement("button")
    li.appendChild(button)
    button.innerText = "🆑"
    button.addEventListener("click", onDelete)
}

function onDelete(event) {
    const liD = event.target.parentElement;
    liD.remove();
    save()
}

formList.addEventListener("submit", submit)

const bookList = JSON.parse(localStorage.getItem("list-key"));


if(bookList !== null) {
    book = bookList;
    bookList.forEach(viewList);
}