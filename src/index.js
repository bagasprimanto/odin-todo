import { load as home } from "./home.js"
import { load as menu } from "./menu.js"
import { load as contactUs } from "./contact-us.js"

const btnHome = document.querySelector(".btn.nav-home");
const btnMenu = document.querySelector(".btn.nav-menu");
const btnContactUs = document.querySelector(".btn.nav-contactUs");
const content = document.querySelector("div#content");

btnHome.addEventListener("click", loadHome);
btnMenu.addEventListener("click", loadMenu);
btnContactUs.addEventListener("click", loadContactUs);

function clearContent() {
    content.innerHTML = "";
}

function loadHome() {
    clearContent();
    home();
}

function loadMenu() {
    clearContent();
    menu();
}

function loadContactUs() {
    clearContent();
    contactUs();
}

// Call home page load initially
home();
console.log("Hello world!");