//19/7  โจทย์สำหรับเช้าวันพรุ่งนี้: "ระบบคำนวณเงินโบนัสสะสมของพนักงานขาย" (Accumulated Sales Bonus Calculator)

console.clear();
//ยอดขายในแต่ละวัน
const dialySales: number[] = [120, 80, 150];
const notTragetDiaySales: number[] = [100];
const bonusSalesTarget: number = 100;

//เพื่อคำนวณเงินรางวัลพิเศษประจำสัปดาห์ของพนักงานขาย
function calculateSalesBonus(salesList: number[], bonusSalesTarget: number): number {

    //ยอดขายที่ได้โบนัส
    const salesBonusList: number[] = [];
    //เช็คอาเร์ยและหายอดขายที่ได้โบนัส
    if (salesList.length != 0) {
        for (const checkBonus of salesList) {
            if (checkBonus > bonusSalesTarget) {
                salesBonusList.push(checkBonus)
            }
        }
    }
    //โบนัส
    let bonus: number[] = [];
    //หาโบนัสส
    for (let i = 0; i < salesBonusList.length; i++) {
        bonus.push(salesBonusList[i]! - bonusSalesTarget);
    }

    //หาผลรวมโบนัสทั้งหมด
    let sumBonus = 0; //เก็บโบนัส
    for (const findBonus of bonus) {
        sumBonus += findBonus * 10
    }

    return sumBonus



}
const output = calculateSalesBonus(dialySales, bonusSalesTarget)
console.log(`ได้โบนัสทั้งหมด = ${output}`)