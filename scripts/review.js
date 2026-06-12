// Get saved review count...
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increase the review count by 1
reviewCount++;

// Store the updated count back in localStorage
localStorage.setItem("reviewCount", reviewCount);

// Show the review count on the page (safe check)
const countEl = document.querySelector("#count");
if (countEl) {
    countEl.textContent = reviewCount;
}

// Footer year (safe check)
const yearEl = document.querySelector("#year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}