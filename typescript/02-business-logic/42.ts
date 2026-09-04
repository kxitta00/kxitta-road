//8/8 โจทย์ข้อ 42: "ระบบจัดอันดับ 3 ไรเดอร์ยอดเยี่ยมประจำสัปดาห์ (Top Delivery Drivers Analytics)"

//กำหนดโครงสร้างของไรเดอร์แต่ละรอบ
interface DeliveryLog {
    driverName: string; //ชื่อไรเดอร์
    distanceKm: number; //ระยะทาง กิโลเมตร
    tipAmount?: number; //เงินทิป (ถ้ามี)
    isRushHour?: boolean; //ส่งช่วงเร่งด่วนหรือไม่ ถ้า ture + 20%
}

function findTop3Drivers(driverS: DeliveryLog[]): string {

    //1.ส่วนเช็คไรเดอร์
    let riderNames: string[] = [];
    for (const riderCheck of driverS) {
        if (!riderNames.includes(riderCheck.driverName)) {
            riderNames.push(riderCheck.driverName);
        }
    }
    //End loop

    if (riderNames.length < 3) {
        return "Insufficient Driver Data";
    }
    //-----//

    //2.ส่วนรวมค่ารอบไรเดอร์แต่ละคน 
    //ถ้า isRushHour ค่าส่งบวกเพิ่ม 20% และถ้ามี tipAmount ให้นำไปบวกเพิ่มกับยอดรวม
    const riderTotal: { [name: string]: number } = {};
    for (const riders of driverS) {
        let rider_earnings: number = riders.distanceKm * 20;


        if (riders.isRushHour === true) {
            rider_earnings = rider_earnings * 1.2;
        }

        let tip: number = riders.tipAmount ?? 0;
        rider_earnings += tip;

        if (!riderTotal[riders.driverName]) {
            riderTotal[riders.driverName] = rider_earnings
        } else {
            riderTotal[riders.driverName]! += rider_earnings
        }
    }
    //End loop
    //-----//

    //3.ส่วนหาอันดับท้อป3ให้ไรเดอร์
    let top1RiderName: string = "";
    let top1RiderRevenue: number = -1;

    let top2RiderName: string = "";
    let top2RiderRevenue: number = -1;

    let top3RiderName: string = "";
    let top3RiderRevenue: number = -1;

    for (const findeRider of riderNames) {
        let riderRevenue = riderTotal[findeRider]!;
        if (top1RiderRevenue < riderRevenue) {
            top3RiderName = top2RiderName;
            top3RiderRevenue = top2RiderRevenue;
            top2RiderName = top1RiderName;
            top2RiderRevenue = top1RiderRevenue;
            top1RiderName = findeRider;
            top1RiderRevenue = riderRevenue;
        } else if (top2RiderRevenue < riderRevenue) {
            top3RiderName = top2RiderName;
            top3RiderRevenue = top2RiderRevenue;
            top2RiderName = findeRider;
            top2RiderRevenue = riderRevenue;
        } else if (top3RiderRevenue < riderRevenue) {
            top3RiderName = findeRider
            top3RiderRevenue = riderRevenue
        }
    }
    //End loop
    //-----//

    return (`🛵 1st: ${top1RiderName} (${top1RiderRevenue} THB) | 🥈 2nd: ${top2RiderName} (${top2RiderRevenue} THB) | 🥉 3rd: ${top3RiderName} (${top3RiderRevenue} THB)`)
}

//ข้อมูลจำลอง
const weeklyDeliveries: DeliveryLog[] = [
    { driverName: "Somchai", distanceKm: 5, tipAmount: 50, isRushHour: true }, // (5*20)*1.2 + 50 = 170
    { driverName: "Somsak", distanceKm: 15, tipAmount: 100, isRushHour: true },// (15*20)*1.2 + 100 = 460
    { driverName: "Somchai", distanceKm: 10 },                                  // 10*20 = 200 -> ยอดรวม Somchai = 370
    { driverName: "Mana", distanceKm: 3, tipAmount: 20 },                      // (3*20) + 20 = 80
    { driverName: "Piti", distanceKm: 12, tipAmount: 30, isRushHour: true },   // (12*20)*1.2 + 30 = 318
    { driverName: "Somsak", distanceKm: 8 }                                    // 8*20 = 160 -> ยอดรวม Somsak = 620
];

console.log(findTop3Drivers(weeklyDeliveries));
// Output: 🛵 1st: Somsak (620 THB) | 🥈 2nd: Somchai (370 THB) | 🥉 3rd: Piti (318 THB)

// console.log(findTop3Drivers([
//     { driverName: "Somchai", distanceKm: 5 },
//     { driverName: "Somsak", distanceKm: 10 }
// ]));
// Output: Insufficient Driver Data
