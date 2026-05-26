const temp = 8;
const speed = 10;

function calculateWindChill(temp, speed) {
    return (
        13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}
let windchill = 0;


document.getElementById("wind-chill").textContent = windchill;

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;


