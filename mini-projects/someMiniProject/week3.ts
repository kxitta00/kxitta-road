// โครงสร้างเข้มงวด
type ProductID = string | number; //สร้างType Alias และระบุ Union Type |
enum Catagory { Electronics, Fashion, Home } // สร้าง enum กำหนดหมวดหมู่สินค้า (Category)

interface Product { // กำหนดให้ intf.product ต้องกำหนด 4 ค่านี้เท่านั้นตอนเรียกใช้
    id: ProductID;
    name: string;
    specs: [number, string]; // Tupple ล็อก data type ข้างในต้องกำหนดให้ตรงตามช่องที่ระบุ
    tags: string[]; // Array สามารถกรอก data type อะไรก็ได้และเก็บข้อมูลอะไรก็ได้
}

type OrderStatus = 'Pending' | 'Paid' | 'Shipped'; //Literal Types บังคับให้ตัวแปรนี้เก็บแค่สามค่านี้

interface Order { // กำหนดให้ intf.oder ต้องกำหนด 2 ค่านี้เท่านั้นตอนเรียกใช้
    product: Product;
    status: OrderStatus; // Literal Type
}

// สร้างข้อมูลจำลอง
const myOrders: Order[] = [
    {
        product: { id: 101, name: 'Smartphone', specs: [0.2, '5G Available'], tags: ['tech', '2026'] },
        status: "Paid"
    },
    {
        product: { id: 'PROD-02', name: 'T-Shirt', specs: [0.1, 'Cotton 100%'], tags: ['Fashion', 'summer'] },
        status: 'Pending'
    },
];

console.log("--- รายการสินค้าที่ยังค้างจ่าย (Pending)---");

for (const order of myOrders) {
    if (order.status === 'Pending') {
        console.log("- " + order.product.name);
    }
}