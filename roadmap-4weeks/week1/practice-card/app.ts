// ปุ่ม Favorite (Class: .btn-favorite) x
// ปุ่มลดจำนวน (Class: .minus-btn) x
// ตัวเลขจำนวน (Class: .quantity) x
// ปุ่มเพิ่มจำนวน (Class: .plus-btn) x
// ตัวเลขราคาปัจจุบัน (Class: .price-current) x
import { type CartItem } from "./types";

const btnFavorite = document.querySelector<HTMLButtonElement>(".btn-favorite")!;
const quantity = document.querySelector(".quantity") as HTMLElement;
const currentPrice = document.querySelector(".price-current") as HTMLElement;
const stepper = document.querySelector<HTMLElement>('.stepper')!;
const btnAddToCart = document.querySelector<HTMLButtonElement>('.add-to-cart-btn');

const unitPrice: number = 149.00
let currentQuantity: number = 1;
let total: number = 0;
let cart: CartItem[] = [];





btnFavorite.addEventListener('click', () => {
  btnFavorite.classList.toggle('active')
})

function updateUi(): void {
  quantity.textContent = `${currentQuantity}`
  total = currentQuantity * unitPrice
  currentPrice.textContent = `$${total.toFixed(2)}`
}

stepper.addEventListener('click', (e: MouseEvent) => {
  const button = (e.target as HTMLElement).closest('button');
  if (!button) return;
  const action = button.dataset.action
  if (action === 'plus') {
    currentQuantity++
    updateUi()
  } else if (action === 'minus') {
    if (currentQuantity === 1) return;
    currentQuantity--
    updateUi()
  }
})

btnAddToCart?.addEventListener('click', () => {
  // เช็คว่ามีของ ID 'shoes-01' อยู่ใน cart หรือยัง
  const existingItem = cart.find(item => item.id === 'shoes-01'); //ไปตรวจสอบใน cart โดยส่งตัวแทน item เข้าไปเช็คว่าใน array cart มี item.id === 'shoes-01' มั้ย? ถ้ามีก็ส่งคืนชุดข้อมูลมันกลับมาถ้าไม่มีเลยส่งคืน undefinde
  if (existingItem) { //ใน existingItem มีข้อมูลมั้ย? หรือเป็น undefined
    //ใช่มีข้อมูล
    cart = cart.map(item => { //นำ array มาก้างออกโดยใช้ item เข้าไปตรวจ ใน item.id ทุกตัวโดยหาตัวที่มีชื่อว่า 'shoes-01' ถ้าเจอให้บวกจำนวนที่เพิ่มในหน้าเว็บเข้าไป
      if (item.id === 'shoes-01') {
        return { ...item, quantity: item.quantity + currentQuantity } //โอเคเจอเราสร้างข้อมูลใหม่แล้วโยนข้อมูลเดิมเข้าไปโดยบวกค่าจำนวนที่ user เพิ่มเข้ามาทบเข้าไป
      }
      return item //ส่งคืนข้อมูลทั้งสองกรณีคือข้อมูลที่แก้ไขแล้วกับไม่เจออะไรเลยส่งข้อมูลเดิมกลับ
    })
  } else {
    //ไม่มีข้อมูล
    const newItem: CartItem = { //สร้างข้อมูลใหม่ขึ้นมา
      id: 'shoes-01',
      name: 'Nike Force 1 Low EasyOn LV8 3',
      price: unitPrice,
      quantity: currentQuantity
    };
    cart = [...cart, newItem] //แล้วสร้างอาเรย์ใหม่โดยโยนชุดข้อมูลใหม่เข้าไป
  }
  console.log('Cart ปัจจุบัน:', cart); //สั้งแสดงผลเพื่อเช็ค

})