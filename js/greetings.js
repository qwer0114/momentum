const loginForm = document.querySelector("#login-form");
const loginBox = document.querySelector("#login-box")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const loginLabel = document.querySelector("#login-form label");
const content = document.querySelector("#content");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginBox.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginBox.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    content.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);

}

function paintGreetings(username) {
    loginBox.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    content.classList.remove(HIDDEN_CLASSNAME);
}

