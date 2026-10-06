// app.ts
var btnFavorite = document.querySelector(".btn-favorite");
var quantity = document.querySelector(".quantity");
var currentPrice = document.querySelector(".price-current");
var stepper = document.querySelector(".stepper");
var btnAddToCart = document.querySelector(".add-to-cart-btn");
var unitPrice = 149;
var currentQuantity = 1;
var total = 0;
var cart = [];
btnFavorite.addEventListener("click", () => {
  btnFavorite.classList.toggle("active");
});
function updateUi() {
  quantity.textContent = `${currentQuantity}`;
  total = currentQuantity * unitPrice;
  currentPrice.textContent = `$${total.toFixed(2)}`;
}
stepper.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button)
    return;
  const action = button.dataset.action;
  if (action === "plus") {
    currentQuantity++;
    updateUi();
  } else if (action === "minus") {
    if (currentQuantity === 1)
      return;
    currentQuantity--;
    updateUi();
  }
});
btnAddToCart?.addEventListener("click", () => {
  const existingItem = cart.find((item) => item.id === "shoes-01");
  if (existingItem) {
    cart = cart.map((item) => {
      if (item.id === "shoes-01") {
        return { ...item, quantity: item.quantity + currentQuantity };
      }
      return item;
    });
  } else {
    const newItem = {
      id: "shoes-01",
      name: "Nike Force 1 Low EasyOn LV8 3",
      price: unitPrice,
      quantity: currentQuantity
    };
    cart = [...cart, newItem];
  }
  console.log("Cart ปัจจุบัน:", cart);
});
