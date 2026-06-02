let count = Number(localStorage.getItem("reviewCount")) || 0;

count++;

localStorage.setItem("reviewCount", reviewcount);

document.querySelector("#count").textContent = reviewcount;