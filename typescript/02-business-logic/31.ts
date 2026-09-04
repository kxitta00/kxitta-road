// 28/7 โจทย์: "ระบบวิเคราะห์ยอดขายประจำวันของร้านค้า" (Daily Sales Analytics)

//interface เพื่อระบุว่าสสินค้า 1 ชิ้นต้องมีproperty อะไรบ้าง
interface SalesRecord {
    productName: string; //ชื่อ
    price: number;  //ราคาา
    quanlity: number; //จำนวนที่ขายได้
}

//สร้างฟังก์ชันไว้คำณวน
function analyzeSales(sales: SalesRecord[]): string {

    //เช็คว่าข้อมูลถูกต้อง หรือ มีข้อมูล
    if (sales.length === 0) {
        return "No Sales Data"
    }

    let totalRevenue: number = 0; //รายได้รวมทั้งหมด
    let maxSeller = sales[0]!.quanlity; //สินค้าที่ขายดีที่สุด
    let bestNameProduct = sales[0]!.productName;
    let hightValueCount: number = 0; //สินค้าที่มีราคามากกว่า1พัน
    let status: string = ""; //เก็บสเตตัส

    for (const checkProduct of sales) {
        totalRevenue += checkProduct.price * checkProduct.quanlity //หารายได้รวม

        if (checkProduct.quanlity > maxSeller) {
            maxSeller = checkProduct.quanlity //หาสินค้าที่ขายดีที่สุด
            bestNameProduct = checkProduct.productName
        }

        if (checkProduct.price * checkProduct.quanlity >= 1000) { // นับสินค้าที่ราคา1พันขึ้น
            hightValueCount++
        }
    }
    //end loop

    //หาสเตตัส
    if (totalRevenue >= 5000) {
        status = "Target Achieved";
    } else if (totalRevenue >= 2000) {
        status = "Moderate";
    } else {
        status = "Low Sales"
    }

    //คืนค่าเพื่อไปแสดงผล
    return (`Total Revenue : ${totalRevenue}, Best Seller: ${bestNameProduct}, High Value Items: ${hightValueCount}, Status: ${status}`);
}

//ข้อมูลจำลอง
const todaySales: SalesRecord[] = [
    { productName: "Keyboard", price: 1500, quanlity: 2 },
    { productName: "Mouse", price: 500, quanlity: 5 },
    { productName: "Mousepad", price: 200, quanlity: 3 }
];

//เรียกใช้ฟังก์ชันโดยข้อมูลจำลอง
console.log(analyzeSales(todaySales));


//เรียกใช้ฟังก์ชันโดยข้อมูลจำลองที่ไม่มีอะไรเพื่อน test
// console.log(analyzeSales([]));