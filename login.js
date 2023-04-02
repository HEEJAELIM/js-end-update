const formLogin = document.querySelector("#form-login");
const formId = formLogin.querySelector("#form-id");
const formPassword = formLogin.querySelector("#form-password");
const login = document.querySelector("#login");

const IDV = localStorage.getItem("id-Key")
const HIDDEN = "hidden";

function submit(event) {
    event.preventDefault();
    const id= formId.value;
    const ID = localStorage.setItem("id-Key", id)
    view()
    login.innerText = `Hi ${id}`
}

function view() {
    formLogin.classList.add(HIDDEN);
    login.classList.remove(HIDDEN);
}

if(IDV === null) {
    formLogin.addEventListener("submit", submit)
} else {
    view()
    login.innerText = `Hi ${IDV}`
}