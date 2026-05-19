const menuButton = document.querySelector("#menu");
const nav = document.querySelector("#navMenu");

menuButton.addEventListener("click", function () {


    // Toggle the display of the navigation menu
    nav.style.display =
        nav.style.display === "flex" ? "none" : "flex";

    // Toggle icon

    menuButton.textContent =
        menuButton.textContent === "☰" ? "✖" : "☰";
});

// Close nav when a link is clicked
document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {

        nav.style.display = "none";
        menuButton.textContent = "☰";
    });
});

//footer Dynamic Year
document.getElementById("CurrentYear").textContent = new Date().getFullYear();

//footer Last Modified
document.getElementById("lastModified").textContent = document.lastModified;