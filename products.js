const productCards = document.getElementById("productCards");
const cart = document.getElementById("cart");

let products = JSON.parse(localStorage.getItem("products")) || [];
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

const renderProducts = () => {
    productCards.innerHTML = "";
    products.forEach((product, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <p><strong>Product-title:</strong> ${product.title}</p>
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
            <p><strong>Category:</strong> ${product.category}</p>
        `;
        productCards.appendChild(card);
    });
};

const addToCart = (index) => {
    const product = products[index];
    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    renderCart();
};

const removeFromCart = (index) => {
    cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    renderCart();
};

renderProducts();
renderCart();