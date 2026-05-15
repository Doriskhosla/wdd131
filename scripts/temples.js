
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector("#navMenu");

menuButton.textContent = "☰";

menuButton.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
    menuButton.textContent = menuButton.textContent === "☰" ? "✖" : "☰";
});
