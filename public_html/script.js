// Sample data for products
const products = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 25 },
];

// Function to display products
function displayProducts() {
    const productsSection = document.getElementById("products");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productDiv);
    });
}

// Function to add product to cart (dummy function for now)
function addToCart(productId) {
    alert(`Product ${productId} added to cart`);
}

// Display products when the page loads
window.onload = displayProducts;
