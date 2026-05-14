// Product data
let products = [
  { name: "Phone", category: "electronics", price: 15000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300" },
  { name: "Laptop", category: "electronics", price: 50000, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300" },
  { name: "T-Shirt", category: "clothing", price: 500, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300" },
  { name: "Jeans", category: "clothing", price: 1200, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300" }
];

// Display products
function displayProducts(items) {
  let container = document.getElementById("product-container");
  container.innerHTML = "";

  items.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price}</p>
        <p>${product.category}</p>
      </div>
    `;
  });
}

// Filter function
function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    let filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

// Initial display
displayProducts(products);