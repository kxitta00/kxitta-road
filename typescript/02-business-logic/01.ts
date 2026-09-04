//คำนวณราคาสินค้าในตะกร้า 11/7

//รับจำนวน n ชิ้นสินค้า
let inputItem: number = Number(prompt("กรอกจำนวนสินค้า: ") ?? 0);

//ฟังก์ชันหาส่วนลด
function calculateDiscount(total: number): number {
    if (total >= 1000) {
        return total * 0.10;
    } else if (total >= 500) {
        return total * 0.05;
    } else {
        return 0;
    }
}

//เช็ค Eror User
if (isNaN(inputItem) || inputItem <= 0) {
    console.log("ข้อมูลไม่ถูกต้อง! กรุณากรอกใหม่")
} else {
    //รวมราคาสินค้า นับชิ้นสินค้า
    let totalPrice = 0;
    //ลูปหาราคารวมสินค้า
    for (let i = 0; i < inputItem; i++) {
        let inputPrice: number = Number(prompt(`กรอกราคาสินค้าชิ้นที่ ${i + 1}:`) ?? 0);
        totalPrice += inputPrice
    }

    //นำฟังก์ชันมาใช้
    let discount = calculateDiscount(totalPrice)
    //ราคาหลังตัดส่วนลด
    let sum = totalPrice - discount

    //แสดงผลรวมและส่วนลด 
    console.log("================================")
    console.log(`สินค้าจำนวน ${inputItem} ชิ้น`)
    console.log(`ยอดรวมสินค้า ${totalPrice} บาท`)
    //แสดงผลส่วนลด
    if (totalPrice >= 1000) {
        console.log(`ส่วนลด10%: ${discount} บาท`);
    } else if (totalPrice >= 500) {
        console.log(`ส่วนลด5%: ${discount} บาท`);
    } else {
        console.log("ไม่มีส่วนลด");
    }
    console.log(`ยอดสุดธิ: ${sum}`)
    console.log("================================")
}
