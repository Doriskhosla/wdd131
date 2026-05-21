const temp = 8;
const speed = 10;

function calculateWindChill(temp, speed) {
    return (
        13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

let windChill = "N/A";

if (temp <= 10 && speed > 4.8) {
    windChill = calculateWindChill(temp, speed) + " °C";
}

document.getElementById("wind-Chill").textContent = windChill;

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;


