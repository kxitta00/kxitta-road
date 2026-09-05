//1. 
// type Student = {
//   name: string;
//   score: number;
// };

// const studetns: Student[] = [
//   { name: "Alice", score: 45 },
//   { name: "Bob", score: 78 },
//   { name: "Charlie", score: 90 },
//   { name: "David", score: 52 },
//   { name: "Eve", score: 38 }
// ];

// function filterStudent(student: Student[]): string[] {
//   const passStudents = student.filter((student) => student.score >= 50);
//   const studentNames = passStudents.map((item) => item.name)
//   return studentNames
// }

// console.log(filterStudent(studetns))


//2.
// type Product = {
//   name: string;
//   price: number;
//   inStock: boolean;
// };

// const product: Product[] = [
//   { name: "Keyboard", price: 1200, inStock: true },
//   { name: "Mouse", price: 600, inStock: false },
//   { name: "Monitor", price: 4500, inStock: true },
//   { name: "Pad", price: 300, inStock: true },
//   { name: "Headset", price: 1500, inStock: false }
// ];

// function getDiscountedProducts(items: Product[]): string[] {
//   const discountProducts: Product[] = items.filter((item) => item.inStock === true && item.price >= 1000);
//   const discount: string[] = discountProducts.map((item) => `${item.name}: ${item.price * 0.9} บาท`)
//   return discount
// }

// console.log(getDiscountedProducts(product))

//3.
// type Employee = {
//   id: string;
//   name: string;
//   department: "IT" | "HR" | "SALES";
//   salary: number;
//   yearsOfExperience: number;
// };

// const employees: Employee[] = [
//   { id: "E01", name: "Alice", department: "IT", salary: 35000, yearsOfExperience: 3 },
//   { id: "E02", name: "Bob", department: "HR", salary: 28000, yearsOfExperience: 1 },
//   { id: "E03", name: "Charlie", department: "IT", salary: 60000, yearsOfExperience: 5 },
//   { id: "E04", name: "David", department: "SALES", salary: 32000, yearsOfExperience: 4 },
//   { id: "E05", name: "Eve", department: "IT", salary: 25000, yearsOfExperience: 1 }
// ];

// type BonusSummary = {
//   name: string;
//   bonus: number;
// };

// function calculateItBonuses(staffs: Employee[]): BonusSummary[] {
//   return staffs
//     .filter((s) => s.department === "IT" && s.yearsOfExperience >= 2)
//     .map((s) => ({
//       name: s.name,
//       bonus: s.salary * 2,
//     }));
// }

// console.log(calculateItBonuses(employees));

//4.
// type Order = {
//   orderId: string;
//   customerName: string;
//   totalAmount: number;
//   status: "PENDING" | "COMPLETED" | "CANCELLED";
//   isVip: boolean;
// };

// const orders: Order[] = [
//   { orderId: "ORD-001", customerName: "Kxitta", totalAmount: 1500, status: "COMPLETED", isVip: true },
//   { orderId: "ORD-002", customerName: "Somchai", totalAmount: 450, status: "PENDING", isVip: false },
//   { orderId: "ORD-003", customerName: "John", totalAmount: 3200, status: "COMPLETED", isVip: false },
//   { orderId: "ORD-004", customerName: "Anna", totalAmount: 800, status: "CANCELLED", isVip: true },
//   { orderId: "ORD-005", customerName: "Bob", totalAmount: 2100, status: "COMPLETED", isVip: true }
// ];

// type VipReceipt = {
//   id: string;
//   greeting: string;
//   finalPrice: number;
// };

// function generateVipReceipts(allOrders: Order[]): VipReceipt[] {
//   return allOrders
//     .filter((item) => item.status === "COMPLETED" && item.isVip)
//     .map((item) => ({
//       id: item.orderId, greeting: `ขอบคุณ คุณ ${item.customerName}`, finalPrice: item.totalAmount * 0.95,
//     }));
// }

// console.log(generateVipReceipts(orders));

// 5.
// type Product = {
//   id: number;
//   name: string;
//   category: "ELECTRONICS" | "CLOTHING" | "FOOD";
//   price: number;
//   stock: number;
//   rating: number;
// };

// const products: Product[] = [
//   { id: 1, name: "Mechanical Keyboard", category: "ELECTRONICS", price: 2500, stock: 3, rating: 4.8 },
//   { id: 2, name: "Organic Apple", category: "FOOD", price: 60, stock: 50, rating: 4.2 },
//   { id: 3, name: "Oversized T-Shirt", category: "CLOTHING", price: 450, stock: 12, rating: 4.0 },
//   { id: 4, name: "Gaming Mouse", category: "ELECTRONICS", price: 1800, stock: 0, rating: 4.6 },
//   { id: 5, name: "Denim Jacket", category: "CLOTHING", price: 1200, stock: 4, rating: 4.5 },
//   { id: 6, name: "Noise Cancelling Headphone", category: "ELECTRONICS", price: 4200, stock: 15, rating: 4.9 },
//   { id: 7, name: "Leather Backpack", category: "CLOTHING", price: 1500, stock: 8, rating: 4.2 },
// ];

// type FeaturedProductCard = {
//   title: string;
//   priceWithVat: number;
//   badge: "BEST_SELLER" | "NORMAL";
//   isLowStock: boolean;
// };

// function getFeaturedProducts(items: Product[]): FeaturedProductCard[] {
//   return items
//     .filter((item) => item.stock > 0 && item.category !== "FOOD" && item.price >= 1000)
//     .map((item) => ({
//       title: `[${item.category}] ${item.name}`,
//       priceWithVat: item.price * 1.07,
//       badge: item.rating >= 4.5 ? "BEST_SELLER" : "NORMAL",
//       isLowStock: item.stock <= 5,
//     }))
// }

// console.log(getFeaturedProducts(products));

//6.
const rawTransactions: string[] = [
  "TXN-101,2026-09-01,TRANSFER,50000,SUCCESS",
  "TXN-102,2026-09-01,PAYMENT,450,SUCCESS",
  "TXN-103,2026-09-02,TRANSFER,120000,SUCCESS",
  "TXN-104,2026-09-02,WITHDRAW,5000,FAILED",
  "TXN-105,2026-09-03,TRANSFER,85000,SUCCESS",
  "TXN-106,2026-09-03,PAYMENT,20000,SUCCESS",
  "TXN-107,2026-09-04,TRANSFER,3000,SUCCESS",
];

type Transaction = {
  txnId: string;
  date: string;
  type: string;
  amount: number; // สังเกต: ต้องแปลงจาก string เป็น number
  status: string;
};

type HighValueAlert = {
  alertTitle: string; // เช่น "[ALERT] TXN-101: TRANSFER"
  amount: number;
  riskLevel: "HIGH" | "CRITICAL"; // ถ้า amount >= 100,000 ให้เป็น "CRITICAL" นอกนั้น "HIGH"
};

function auditTransactions(rawLogs: string[]): HighValueAlert[] {
  const parts: string[][] = rawLogs.map((a) => a.split(","));
  const audit: Transaction[] = parts.map((p) => ({
    txnId: p[0] ?? "",
    date: p[1] ?? "",
    type: p[2] ?? "",
    amount: Number(p[3] ?? 0),
    status: p[4] ?? "",
  }));

  return audit
    .filter((item) => item.type === "TRANSFER" && item.status === "SUCCESS" && item.amount >= 50000)
    .map((item) => ({
      alertTitle: `[ALERT] ${item.txnId}: ${item.type}`,
      amount: item.amount,
      riskLevel: item.amount >= 100000 ? "CRITICAL" : "HIGH",
    }))

}

console.log(auditTransactions(rawTransactions));
