// Current year
const currentYear = new Date().getFullYear();

document.getElementById('current-year').textContent = currentYear;

// Last modified date
document.getElementById('last-modified').textContent = "lastModified:" + document.lastModified;
