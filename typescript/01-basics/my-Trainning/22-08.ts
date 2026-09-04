// //โจทย์: "ระบบประกาศผลสอบ (Exam Results)"

// const students = [{ name: "A", score: 45 },
// { name: "B", score: 80 },
// { name: "C", score: 65 }]

// const result = students.filter(students => students.score >= 50).map(students => students.name);

// console.log(result)

//โจทย์: "ระบบคัดสินค้าลดราคาพร้อมส่ง (Flash Sale Products)"
const products = [
  { name: "Keyboard", price: 1500, inStock: true },
  { name: "Mouse", price: 300, inStock: false },
  { name: "Monitor", price: 5000, inStock: true },
  { name: "Headphone", price: 800, inStock: true },
  { name: "USB Cable", price: 100, inStock: true }
];

let discounts = products.filter(products => products.inStock && products.price >= 500).map(products => `${products.name}: ${products.price * 0.9}`);

console.log(discounts)

