// ===== PRODUCTS DATA =====
const products = [
    {
        id: 1,
        name: "Custom T-Shirts",
        description: "High-quality cotton shirts with custom printing for events, businesses, and teams.",
        price: 25,
        image: "images/coolcolors.jpg"
    },
    {
        id: 2,
        name: "Embroidered Polo Shirts",
        description: "Professional embroidered polos perfect for staff uniforms and branding.",
        price: 40,
        image: "images/polos.jpg"
    },
    {
        id: 3,
        name: "Screen print hoodies and DTG designed",
        description: "Premium custom hoodies. Choose between bold screen print or detailed DTG.",
        price: 45,
        image: "images/hoodies.jpg"
    },
    {
        id: 4,
        name: "Promotional Hats",
        description: "Custom hats designed for marketing campaigns and giveaways.",
        price: 18,
        image: "images/hats.jpg"
    },
    {
        id: 5,
        name: "Vinyl Stickers",
        description: "Durable waterproof stickers for branding, laptops, bottles, and promotions.",
        price: 10,
        image: "images/promotionals.jpg"
    }
];

// ===== DISPLAY FUNCTION =====
function displayProducts() {
    const container = document.getElementById("productList");
    container.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        //created image with fixed dimensions
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        img.loading = "lazy";

        // Add width and height to prevent layout shift
        img.width = 400; // adjust to real image width
        img.height = 400; // adjust to real image height

        card.appendChild(img);

        card.innerHTML += `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <strong>$${product.price}</strong>
            <button>View Details</button>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", displayProducts);
