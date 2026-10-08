import { Size, Sweetness, Ice } from "./types";
import { type CartItem } from "./types";

const btnFavorite = document.querySelector<HTMLButtonElement>(".btn-favorite");
const sizeDisplay = document.querySelector("#size-status") as HTMLElement;
const sweetDisplay = document.querySelector("#sweetness-status") as HTMLElement;
const iceDisplay = document.querySelector("#ice-status") as HTMLElement;
const btnOption = document.querySelectorAll<HTMLButtonElement>(".btn-option");
const quantityDisplay = document.querySelector(".stepper-value") as HTMLElement;
const stepperContainer = document.querySelector(".stepper") as HTMLElement;
const btnAdCart = document.querySelector<HTMLButtonElement>(".btn-add-cart")
const totalDisplay = document.querySelector("#total-price") as HTMLElement;

let basePrice: number = 95;
let extraPrice: number = 0;
let quantity = 1;
let size: Size = Size.choose;
let sweet: Sweetness = Sweetness.choose
let ice: Ice = Ice.choose
let cart: CartItem[] = [];
let total: number = 0;

function clearUI(): void {
  size = Size.choose
  sweet = Sweetness.choose
  ice = Ice.choose
  total = 0;
  quantity = 1;
  extraPrice = 0;
  btnOption.forEach(b => b.classList.remove('active'))
}

function updateUI(): void {
  total = (basePrice + extraPrice) * quantity;
  quantityDisplay.textContent = String(quantity)
  totalDisplay.textContent = `${total}฿`
  sizeDisplay.textContent = size;
  sweetDisplay.textContent = sweet;
  iceDisplay.textContent = ice
}
updateUI()

btnFavorite?.addEventListener('click', () => {
  btnFavorite.classList.toggle("active")
})

stepperContainer.addEventListener('click', (e: MouseEvent) => {
  const btn = (e.target as HTMLElement).closest('button');
  if (btn?.dataset.action === "plus") {
    quantity++
  } else if (btn?.dataset.action === "minus") {
    if (quantity > 1) {
      quantity--
    }
  }
  updateUI()
});

btnOption.forEach((btn) => btn.addEventListener('click', () => {
  const group = btn.closest<HTMLElement>('.option-group');
  group?.querySelectorAll('.btn-option').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const groupType = group?.dataset.group;
  const val = btn.dataset.value;
  if (groupType === "size") {
    switch (val) {
      case "regular":
        size = Size.regular;
        extraPrice = 0;
        break;
      case "large":
        size = Size.large;
        extraPrice = 15;
        break;
    }
  }

  if (groupType === "sweetness") {
    switch (val) {
      case "0%":
        sweet = Sweetness.zeroPercent;
        break;
      case "25%":
        sweet = Sweetness.twentyfivePrecent;
        break;
      case "50%":
        sweet = Sweetness.fiftyPrecent;
        break;
      case "100%":
        sweet = Sweetness.oneHundredPrecent;
        break;
    }
  }

  if (groupType === "ice") {
    switch (val) {
      case "low":
        ice = Ice.low;
        break;
      case "medium":
        ice = Ice.normal;
        break;
      case "no-ice":
        ice = Ice.noIce;
        break;

    }
  }
  updateUI()
}))

btnAdCart?.addEventListener('click', () => {
  const orderId = crypto.randomUUID();
  if (size === Size.choose) {
    alert("กรุณาเลือกขนาดแก้วก่อนสั่งซื้อ!");
    return;
  }
  if (sweet === Sweetness.choose || ice === Ice.choose) {
    alert("กรุณาเลือกระดับความหวานและน้ำแข็งให้ครบถ้วน!");
    return;
  }

  const newOrder: CartItem = {
    id: orderId,
    name: "BrownSugarBobaLatte",
    size: size,
    sweet: sweet,
    ice: ice,
    quantity: quantity,
    totalprice: total
  };
  cart = [...cart, newOrder]

  alert("ทำรายการสำเร็จ!!")
  console.log('Cart ปัจจุบัน:', cart);
  clearUI()
  updateUI()
});




