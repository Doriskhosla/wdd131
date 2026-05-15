const menuBottom = document.querySelector("#menu");
const nav = document.querySelector("#navMenu");

menuBottom.addEventListener("click", function () {


    // Toggle the display of the navigation menu
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";

    // Toggle icon
    menuBottom.textContent =
        menuBottom.textContent === "☰" ? "✖" : "☰";


    // Toggle the display of the navigation menu
    nav.style.display =
        nav.style.display === "flex" ? "none" : "flex";

    // Toggle icon

    menuBottom.textContent =
        menuBottom.textContent === "☰" ? "✖" : "☰";
});

// Close nav when a link is clicked
document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {

        nav.style.display = "none";
        menuBottom.textContent = "☰";
    });
});