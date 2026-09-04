//18/7  โจทย์ยามเช้า: "ระบบนับยอดขายชานมไข่มุก" (Milk Tea Sales Counter)

const teas: string[] = ["Milk Tea", "Green Tea", "Milk Tea", "Coffee", "Milk Tea"];

function countMilkTeaOrders(orderList: string[]): number {
    let countMilkTea = 0;
    for (const checkMilktea of orderList) {
        if (checkMilktea === "Milk Tea") {
            countMilkTea++
        }
    }
    return countMilkTea
}


let output = countMilkTeaOrders(teas)
console.log(`มีชานมทั้งหมด: ${output} แก้ว`)