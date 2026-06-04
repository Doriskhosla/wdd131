// Get saved review count...
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increase the review count by 1
reviewCount++;

// Store the updated count back in localStorage
localStorage.setItem("reviewCount", reviewCount);

//Show the review count on the page
document.querySelector("#count").textContent = reviewCount;

//footer year
document.querySelector("#year").textContent = new Date().getFullYear();

