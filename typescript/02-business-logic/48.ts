//15/8 📝 โจทย์ข้อ 48: "ระบบสรุปรายงานยอดขายร้านชานมไข่มุก (Boba Tea Shop Sales Summary Engine)"

// ข้อมูลขาเข้า (Input)
interface OrderItem {
    orderId: string;
    menuName: string;                     // ชื่อเมนูชานม (เช่น "Thai Tea", "Boba Milk Tea")
    size: "S" | "M" | "L";                // ขนาดแก้ว
    price: number;                        // ราคาเต็มของแก้วนั้น
    hasTopping?: boolean;                 // ใส่ท็อปปิ้งหรือไม่ (ถ้า true บวกเพิ่ม +15 บาท!)
    isCancelled?: boolean;                // ถ้ายกเลิก (true) ให้ข้าม!
}

// รายงานสรุปขาออก (Output Object)
interface BobaReport {
    totalRevenue: number;          // ยอดขายเงินรวมสุทธิ (รวมราคาท็อปปิ้ง +15 แล้ว)
    totalCompletedOrders: number;   // จำนวนแก้วที่ขายได้สำเร็จ
    cancelledOrdersCount: number;   // จำนวนแก้วที่ถูกยกเลิก
    topSellingMenu: string;        // ชื่อเมนูชานมที่ขายได้จำนวนแก้วมากที่สุดอันดับ 1
}

function generateBobaReport(oders: OrderItem[]): BobaReport {
    //เช็คข้อมูล
    if (oders.length === 0) {
        return {
            totalRevenue: 0,
            totalCompletedOrders: 0,
            cancelledOrdersCount: 0,
            topSellingMenu: "No Sales",

        }
    }

    //ประกาศตัวแปร
    let totalRevenue: number = 0; //ราคารวมสุทธิ
    let totalCompletedOrders: number = 0; //นับออเดอร์ที่สั่งซื้อสำเร็จ
    let cancelledOrdersCount: number = 0; //นับออเดอร์ที่สั่งซื้อไม่สำเร็จ;
    const menuSalesCount: { [menuName: string]: number } = {} //นับแก้วแต่ละเมนูที่สั่งซื้อสำเร็จ

    let topSellingMenu = ""; //เมนูที่ขายดีที่สุด
    let maxSold: number = -1; //ราคารวมเมนูที่ขายได้เยอะที่สุด

    //logic
    for (const oder of oders) {
        let price = oder.price; //ราคา
        let itemPice = 0; //ราคาต่อแก้วผ่านการคำณวนมาแล้ว

        if (oder.isCancelled === true) {
            cancelledOrdersCount += 1;
            continue;
        } else {
            totalCompletedOrders += 1;
        }

        if (oder.hasTopping === true) {
            itemPice += price + 15;
        } else {
            itemPice += price
        }
        totalRevenue += itemPice;

        if (!menuSalesCount[oder.menuName]) {
            menuSalesCount[oder.menuName] = 0;
        }
        menuSalesCount[oder.menuName]! += 1;
    }

    //หาเมนูที่ขายดีอันดับ1 
    for (const name of Object.keys(menuSalesCount)) {
        let menuSales = menuSalesCount[name]!;
        if (maxSold < menuSales) {
            topSellingMenu = name;
            maxSold = menuSales;
        }
    }

    return {
        totalRevenue: totalRevenue,
        totalCompletedOrders: totalCompletedOrders,
        cancelledOrdersCount: cancelledOrdersCount,
        topSellingMenu: topSellingMenu,

    }
}

const dailyOrders: OrderItem[] = [
    { orderId: "B01", menuName: "Thai Tea", size: "M", price: 50, hasTopping: true },       // 50 + 15 = 65 (Thai Tea count = 1)
    { orderId: "B02", menuName: "Boba Milk Tea", size: "L", price: 65, hasTopping: true },  // 65 + 15 = 80 (Boba Milk Tea count = 1)
    { orderId: "B03", menuName: "Thai Tea", size: "S", price: 40, isCancelled: true },      // Cancelled! (cancelledOrdersCount +1)
    { orderId: "B04", menuName: "Green Tea", size: "M", price: 55, hasTopping: false },     // 55 (Green Tea count = 1)
    { orderId: "B05", menuName: "Thai Tea", size: "L", price: 60, hasTopping: false }       // 60 (Thai Tea count = 2)
];

console.log(generateBobaReport(dailyOrders));
/* 📤 ผลลัพธ์ที่ต้องการ (Expected Output Object):
{
  totalRevenue: 260,           // (65 + 80 + 55 + 60)
  totalCompletedOrders: 4,     // ขายสำเร็จ 4 แก้ว
  cancelledOrdersCount: 1,     // ยกเลิก 1 แก้ว (B03)
  topSellingMenu: "Thai Tea"   // Thai Tea ขายได้มากที่สุด (2 แก้ว)
}
*/
