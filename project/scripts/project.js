
// ===== HAMBURGER MENU =====
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("#navMenu");

if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
        nav.classList.toggle("show");
        menuButton.textContent = menuButton.textContent === "☰" ? "✖" : "☰";
    });

    document.querySelectorAll("#navMenu a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("show");
            menuButton.textContent = "☰";
        });
    });
}

// ===== FOOTER YEAR =====
const yearElement = document.getElementById("CurrentYear");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ===== LAST MODIFIED =====
const modifiedElement = document.getElementById("lastModified");
if (modifiedElement) {
    modifiedElement.textContent = document.lastModified;
}

