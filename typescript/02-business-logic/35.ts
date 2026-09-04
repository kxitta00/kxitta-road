// 31/7 โจทย์ระดับก้าวหน้า: "ระบบค้นหาสินค้าขายดีอันดับ 2" (Second Best Seller)

import { isThrowStatement } from "typescript";

interface ProductSales {
    name: string;
    salesCount: number; //ยอดขาย (จำนวนชิ้น)
}

function findSecondBest(products: ProductSales[]): string {

    if (products.length < 2) {
        return "Insufficient Data";
    }

    //ขายดีอันดับ1
    let sales1Name = -1;
    let top1Name = "";

    //ขายดีอันดับ2
    let sales2Name = -1;
    let top2Name = "";

    for (const items of products) {
        if (items.salesCount > sales1Name) {
            sales2Name = sales1Name;
            top2Name = top1Name;
            sales1Name = items.salesCount;
            top1Name = items.name;
        } else if (items.salesCount > sales2Name) {
            sales2Name = items.salesCount;
            top2Name = items.name
        }

    }
    return (`Runner Up ${top1Name} with ${sales1Name} sales
Runner Up ${top2Name} with ${sales2Name} sales`)

}




const storeSales: ProductSales[] = [
    { name: "iPhone", salesCount: 150 },  // อันดับ 1
    { name: "AirPods", salesCount: 200 }, // อันดับ 1 ใหม่! (200) -> iPhone ตกไปอยู่อันดับ 2 (150)
    { name: "iPad", salesCount: 120 },    // น้อยกว่า 150 -> ไม่ติด Top 2
    { name: "MacBook", salesCount: 180 }  // มากกว่า 150 แต่ชายน้อยกว่า 200 -> กลายเป็นอันดับ 2 ใหม่! (180)
];
// ผลลัพธ์อันดับ 1 คือ AirPods (200)
// ผลลัพธ์อันดับ 2 คือ MacBook (180)
console.log(findSecondBest(storeSales));
// Output: Runner Up: MacBook with 180 sales