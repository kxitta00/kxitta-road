// 3/8 "ระบบวิเคราะห์ Top 3 ลูกค้ายอดซื้อสูงสุด (กรณี 1 คนสั่งหลายครั้ง + สิทธิ์ VIP)"ึุ

interface Order {
    customerName: string;
    itemPrice: number;
    quantity: number;
    isVIP?: boolean;
}


function findTop3Spenders(orders: Order[]): string {

    //ส่วนเก็บชื่อในอาเรย์ที่ไม่ซ้ำไปเก็บไว้ในอีกอาเรย์เพื่อนำไปเช็ค
    let customerNameForCheck: string[] = []; //สำหรับเก็บรายชื่อที่ไม่ซ้ำ
    for (let i = 0; i < orders.length; i++) {
        if (!customerNameForCheck.includes(orders[i]?.customerName!)) {
            customerNameForCheck.push(orders[i]?.customerName!);
        }
    }

    //ส่วนดักถ้ามีข้อมูลไม่ถึง 3 คน
    if (customerNameForCheck.length < 3) {
        return "Insufficient Customer Data";
    }

    const customerTotals: { [key: string]: number } = {}; //ยอดรวมราคาสินค้าแต่ละคน

    //ส่วนรวมยอดเงินและหักส่วนลด 10% ถ้า isVip 
    for (const Order of orders) {
        let price = Order.itemPrice * Order.quantity
        if (Order.isVIP) { //ถ้า isVip ลด 10 %
            price = price * 0.9;
        }
        if (!customerTotals[Order.customerName]) {
            customerTotals[Order.customerName] = price;
        } else {
            customerTotals[Order.customerName]! += price;
        }
    }

    //ตัวแปรไว้เก็บชื่อลำดับ 1-3
    let totalPaidONE = -1;
    let customerNameONE = "";

    let totalPaidTWO = -1;
    let customerNameTWO = "";

    let totalPaidTHREE = -1;
    let customerNameTHREE = "";

    //ส่วนจัดอันดับ
    for (const customerName of customerNameForCheck) {
        let totalPaid = customerTotals[customerName]!;
        if (totalPaid > totalPaidONE) {
            totalPaidTHREE = totalPaidTWO;
            customerNameTHREE = customerNameTWO;
            totalPaidTWO = totalPaidONE;
            customerNameTWO = customerNameONE;
            totalPaidONE = totalPaid;
            customerNameONE = customerName;
        } else if (totalPaid > totalPaidTWO) {
            totalPaidTHREE = totalPaidTWO;
            customerNameTHREE = customerNameTWO;
            totalPaidTWO = totalPaid;
            customerNameTWO = customerName;
        } else if (totalPaid > totalPaidTHREE) {
            totalPaidTHREE = totalPaid;
            customerNameTHREE = customerName;
        }
    }
    return `🥇 1st: ${customerNameONE} (${totalPaidONE} THB) | 🥈 2nd: ${customerNameTWO} (${totalPaidTWO} THB) | 🥉 3rd: ${customerNameTHREE} (${totalPaidTHREE} THB)`;

}

const monthlyOrders: Order[] = [
    { customerName: "Alice", itemPrice: 500, quantity: 2, isVIP: true },   // (500*2) - 10% = 900
    { customerName: "Bob", itemPrice: 1500, quantity: 2 },                // 1500*2 = 3000
    { customerName: "Alice", itemPrice: 1000, quantity: 1 },               // 1000*1 = 1000  -> ยอดรวม Alice = 1900
    { customerName: "Charlie", itemPrice: 800, quantity: 1, isVIP: true }, // (800*1) - 10% = 720
    { customerName: "David", itemPrice: 2000, quantity: 2, isVIP: true },  // (2000*2) - 10% = 3600
    { customerName: "Bob", itemPrice: 500, quantity: 2 }                   // 500*2 = 1000  -> ยอดรวม Bob = 4000
];



console.log(findTop3Spenders(monthlyOrders));
// Output: 🥇 1st: Bob(4000 THB) | 🥈 2nd: David(3600 THB) | 🥉 3rd: Alice(1900 THB)

// console.log(findTop3Spenders([
//     { customerName: "Alice", itemPrice: 100, quantity: 1 },
//     { customerName: "Bob", itemPrice: 200, quantity: 1 }
// ]));
// Output: Insufficient Customer Data
