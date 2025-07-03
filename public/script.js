const products = [
  {
    name: "ASUS V16 Gaming Laptop",
    description: "Intel i7-240H, 64 GB DDR5 RAM, 4 TB SSD, RTX 3050, 16\" 144Hz Display, Matte Black",
    price: 1289,
    image: "images/asus-v16.jpg"
  },
  {
    name: "Lenovo LOQ 15 Gaming Laptop RTX 4070",
    description: "Ryzen 7 7435HS, 64GB RAM, 4TB SSD, G-SYNC, USB-C, Backlit Keyboard",
    price: 1549.99,
    image: "images/lenovo-loq15.jpg"
  },
  {
    name: "MSI Thin A15 Gaming AI Laptop",
    description: "Ryzen 9 8945HS, 64GB RAM, 4TB SSD, RTX 4060, 15.6\" 144Hz Display",
    price: 1449.00,
    image: "images/msi-a15.jpg"
  },
  {
    name: "Acer Nitro V 2024",
    description: "i7-13620H, 64GB RAM, 4TB SSD, RTX 4060, 15.6\" FHD 144Hz",
    price: 1389,
    image: "images/acer-nitrov.jpg"
  },
  {
    name: "HP Victus 15.6\" Gaming Laptop",
    description: "Ryzen 5 7535HS, 64GB RAM, 2TB SSD, Radeon RX 6550M, Silver",
    price: 759.99,
    image: "images/hp-victus.jpg"
  },
  {
    name: "TOPGRO 15.6\" Gaming Laptop",
    description: "i9-12900H, 32GB RAM, 1TB SSD, FHD Display, Fingerprint + Mouse",
    price: 1199,
    image: "images/topgro.jpg"
  },
  {
    name: "MSI Pulse 16 AI Gaming Laptop",
    description: "Ultra 9-185H, 64GB RAM, 4TB SSD, RTX 4070, 16\" QHD+",
    price: 2079,
    image: "images/msi-pulse16.jpg"
  }
];

let cart = [];

function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>$${product.price}</strong></p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;

    container.appendChild(card);
  });
}

function addToCart(index) {
  const item = products[index];
  cart.push(item);
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const totalText = document.getElementById("total");

  cartItems.innerHTML = "";

  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price}
      <button class="remove-btn" onclick="removeFromCart(${i})">Remove</button>
    `;
    cartItems.appendChild(li);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalText.textContent = `Total: $${total.toFixed(2)}`;

  renderCheckoutButton(total);
}

function renderCheckoutButton(total) {
  let checkoutSection = document.querySelector('.checkout');
  if (!checkoutSection) {
    checkoutSection = document.createElement('div');
    checkoutSection.className = 'checkout';
    document.querySelector('.cart').appendChild(checkoutSection);
  }

  if (total > 0) {
    checkoutSection.innerHTML = `<button onclick="checkout()">Proceed to Checkout</button>`;
  } else {
    checkoutSection.innerHTML = '';
  }
}

function checkout() {
  const confirmationMessage = `
✅ Order Confirmed!

Thank you for your purchase.

 Your gaming laptops will be shipped to Pakistan by December 05.
 You'll receive tracking info shortly.

🔥 Happy Gaming !
  `;

  alert(confirmationMessage);

  cart = [];
  renderCart();
}


renderProducts();
