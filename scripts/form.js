const select = document.querySelector("#productName");
const products = [
    {
        id: "fc-1888",
        name: "Custom T-shirts",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Embroidered Polo Shirts",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Promotional Caps",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Logo Mugs",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Custom Jackets",
        averagerating: 5.0
    }
];

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
});