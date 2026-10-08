// app.ts
var btnFavorite = document.querySelector(".btn-favorite");
var sizeDisplay = document.querySelector("#size-status");
var sweetDisplay = document.querySelector("#sweetness-status");
var iceDisplay = document.querySelector("#ice-status");
var btnOption = document.querySelectorAll(".btn-option");
var quantityDisplay = document.querySelector(".stepper-value");
var stepperContainer = document.querySelector(".stepper");
var btnAdCart = document.querySelector(".btn-add-cart");
var totalDisplay = document.querySelector("#total-price");
var basePrice = 95;
var extraPrice = 0;
var quantity = 1;
var size = "Select cup size" /* choose */;
var sweet = "Choose sweetness level" /* choose */;
var ice = "Select ice level" /* choose */;
var cart = [];
var total = 0;
function clearUI() {
  size = "Select cup size" /* choose */;
  sweet = "Choose sweetness level" /* choose */;
  ice = "Select ice level" /* choose */;
  total = 0;
  quantity = 1;
  extraPrice = 0;
  btnOption.forEach((b) => b.classList.remove("active"));
}
function updateUI() {
  total = (basePrice + extraPrice) * quantity;
  quantityDisplay.textContent = String(quantity);
  totalDisplay.textContent = `${total}฿`;
  sizeDisplay.textContent = size;
  sweetDisplay.textContent = sweet;
  iceDisplay.textContent = ice;
}
updateUI();
btnFavorite?.addEventListener("click", () => {
  btnFavorite.classList.toggle("active");
});
stepperContainer.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (btn?.dataset.action === "plus") {
    quantity++;
  } else if (btn?.dataset.action === "minus") {
    if (quantity > 1) {
      quantity--;
    }
  }
  updateUI();
});
btnOption.forEach((btn) => btn.addEventListener("click", () => {
  const group = btn.closest(".option-group");
  group?.querySelectorAll(".btn-option").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  const groupType = group?.dataset.group;
  const val = btn.dataset.value;
  if (groupType === "size") {
    switch (val) {
      case "regular":
        size = "regular 16 oz" /* regular */;
        extraPrice = 0;
        break;
      case "large":
        size = "large 22 oz" /* large */;
        extraPrice = 15;
        break;
    }
  }
  if (groupType === "sweetness") {
    switch (val) {
      case "0%":
        sweet = "0% ไม่หวาน" /* zeroPercent */;
        break;
      case "25%":
        sweet = "25% หวานน้อยมาก" /* twentyfivePrecent */;
        break;
      case "50%":
        sweet = "50% หวานน้อย" /* fiftyPrecent */;
        break;
      case "100%":
        sweet = "100% หวานปกติ" /* oneHundredPrecent */;
        break;
    }
  }
  if (groupType === "ice") {
    switch (val) {
      case "low":
        ice = "ใส่น้ำแข็งน้อย" /* low */;
        break;
      case "medium":
        ice = "ใส่นำแข็งปกติ" /* normal */;
        break;
      case "no-ice":
        ice = "ไม่ใส่น้ำแข็ง" /* noIce */;
        break;
    }
  }
  updateUI();
}));
btnAdCart?.addEventListener("click", () => {
  const orderId = crypto.randomUUID();
  if (size === "Select cup size" /* choose */) {
    alert("กรุณาเลือกขนาดแก้วก่อนสั่งซื้อ!");
    return;
  }
  if (sweet === "Choose sweetness level" /* choose */ || ice === "Select ice level" /* choose */) {
    alert("กรุณาเลือกระดับความหวานและน้ำแข็งให้ครบถ้วน!");
    return;
  }
  const newOrder = {
    id: orderId,
    name: "BrownSugarBobaLatte",
    size,
    sweet,
    ice,
    quantity,
    totalprice: total
  };
  cart = [...cart, newOrder];
  alert("ทำรายการสำเร็จ!!");
  console.log("Cart ปัจจุบัน:", cart);
  clearUI();
  updateUI();
});
