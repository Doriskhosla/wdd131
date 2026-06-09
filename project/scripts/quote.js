// Get saved Request for quote count...
let quoteCount = Number(localStorage.getItem("quoteCount")) || 0;

// Increase the count by 1
quoteCount++;

// Store updated count
localStorage.setItem("quoteCount", quoteCount);

// Show the count on the page
document.querySelector("#quote").textContent = quoteCount;

// Footer year
document.querySelector("#year").textContent = new Date().getFullYear();