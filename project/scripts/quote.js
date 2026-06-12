
let quoteCount = Number(localStorage.getItem("quoteCount")) || 0;


quoteCount++;


localStorage.setItem("quoteCount", quoteCount);

// This part goes right after localStorage logic

const quoteDisplay = document.querySelector("#quoteCountDisplay");
if (quoteDisplay) {
    quoteDisplay.textContent = quoteCount;
}

// Footer year (safe)
const yearEl = document.getElementById("CurrentYear");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}