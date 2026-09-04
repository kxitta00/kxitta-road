// 2/8 📝 โจทย์: "ระบบจัดอันดับ 3 ลูกค้ายอดซื้อสูงสุดประจำเดือน" (Top 3 Spenders Analytics)

interface CustomerOrder {
    customerName: string;
    itemPrice: number; //ราคาตอชิ้น
    quantity: number; //จำนวนที่ซื้อ
}

function findTop3Spenders(oders: CustomerOrder[]): string {
    if (oders.length < 3) {
        return "Not Enough Orders";
    }

    let totalPaid: number = 0; //ไว้เก็บยอดรวม

    let totalPaidONE = -1;    //ยอดรวมคนที่ได้อันดับ1
    let customerNameONE = "";  //ชื่อคนที่ได้อันดับ1

    let totalPaidTWO = -1;     //ยอดรวมคนที่ได้อันดับ2
    let customerNameTWO = "";   //ชื่อคนที่ได้อันดับ2

    let totalPaidTHREE = -1;     //ยอดรวมคนที่ได้อันดับ3
    let customerNameTHREE = "";  //ชื่อคนที่ได้อันดับ3


    for (const checkCustomer of oders) {
        totalPaid = checkCustomer.itemPrice * checkCustomer.quantity;

        if (totalPaid > totalPaidONE) {
            totalPaidTHREE = totalPaidTWO;
            customerNameTHREE = customerNameTWO;
            totalPaidTWO = totalPaidONE;
            customerNameTWO = customerNameONE;

            totalPaidONE = totalPaid;
            customerNameONE = checkCustomer.customerName;
        } else if (totalPaidTWO < totalPaid) {
            totalPaidTHREE = totalPaidTWO;
            customerNameTHREE = customerNameTWO;
            totalPaidTWO = totalPaid;
            customerNameTWO = checkCustomer.customerName;
        } else if (totalPaidTHREE < totalPaid) {
            totalPaidTHREE = totalPaid
            customerNameTHREE = checkCustomer.customerName
        }

    }
    return (`Output: VIP 1: ${customerNameONE} (${totalPaidONE} THB), VIP 2: ${customerNameTWO} (${totalPaidTWO} THB), VIP 3: ${customerNameTHREE} (${totalPaidTHREE} THB)`)
}

const monthlyOrders: CustomerOrder[] = [
    { customerName: "Alice", itemPrice: 500, quantity: 2 }, // ยอดรวม = 1000 (VIP 3)
    { customerName: "Bob", itemPrice: 1500, quantity: 3 },   // ยอดรวม = 4500 (VIP 1)
    { customerName: "Charlie", itemPrice: 800, quantity: 1 }, // ยอดรวม = 800 (ไม่ติด Top 3)
    { customerName: "David", itemPrice: 1000, quantity: 2 }   // ยอดรวม = 2000 (VIP 2)
];

console.log(findTop3Spenders(monthlyOrders));
// Output: VIP 1: Bob (4500 THB), VIP 2: David (2000 THB), VIP 3: Alice (1000 THB)


// console.log(findTop3Spenders([]));
// Output: Not Enough Orders