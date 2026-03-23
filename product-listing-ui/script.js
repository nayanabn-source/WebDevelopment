// Product data
let products = [
  { name: "Phone", category: "electronics", price: 15000, image: "https://via.placeholder.com/150" },
  { name: "Laptop", category: "electronics", price: 50000, image: "https://via.placeholder.com/150" },
  { name: "T-Shirt", category: "clothing", price: 500, image: "https://via.placeholder.com/150" },
  { name: "Jeans", category: "clothing", price: 1200, image: "https://via.placeholder.com/150" }
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