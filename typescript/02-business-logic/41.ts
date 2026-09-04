//7/8 📝 โจทย์ข้อ 41: "ระบบวิเคราะห์ Top 3 พนักงานขายยอดเยี่ยมประจำเดือน (Top Sales Rep Analytics)"
interface SalesDeal {
    repName: string; //ชื่อพนักงาน
    amount: number; //ยอดขายของออเดอร์นั้น
    status: "COMPLETED" | "CANCELLED"; //สถานะออร์เดอร์
    bonusRate?: number; //เปอร์เซ็นต์โบนัสพิเศษ (เช่น 10 คือ +10%)
}

function findTop3SalesReps(deals: SalesDeal[]): string {
    //ส่วนเก็บชื่อและเช็คเงื่อนไข
    const nameDealer: string[] = [];
    for (let i = 0; i < deals.length; i++) {
        if (!nameDealer.includes(deals[i]?.repName!) && deals[i]?.status !== "CANCELLED") {
            nameDealer.push(deals[i]?.repName!);
        }
    }

    //ส่วนดักข้อมูล
    if (nameDealer.length < 3) {
        return "Insufficient Sales Data";
    }

    //ส่วนหายอดขายรวมให้แต่ละคน
    const dealerTotal: { [name: string]: number } = {};
    for (const checkDealer of deals) {
        if (checkDealer.status !== "CANCELLED") {
            let dealerAmount = checkDealer.amount;

            if (checkDealer.bonusRate === 10) {
                dealerAmount = dealerAmount * 1.1
            }

            if (!dealerTotal[checkDealer.repName]) {
                dealerTotal[checkDealer.repName] = dealerAmount
            } else {
                dealerTotal[checkDealer.repName]! += dealerAmount
            }
        }
    }

    //ส่วนหาอันดับ
    let salesONE = -1;
    let repNameONE = "";

    let salesTWO = -1;
    let repNameTWO = "";

    let salesTHREE = -1;
    let repNameTHREE = "";

    for (const name of nameDealer) {
        let totalSales = dealerTotal[name]!;
        if (salesONE < totalSales) {
            salesTHREE = salesTWO;
            repNameTHREE = repNameTWO;
            salesTWO = salesONE;
            repNameTWO = repNameONE;
            salesONE = totalSales;
            repNameONE = name;
        } else if (salesTWO < totalSales) {
            salesTHREE = salesTWO;
            repNameTHREE = repNameTWO;
            salesTWO = totalSales;
            repNameTWO = name;
        } else if (salesTWO < totalSales) {
            salesTHREE = totalSales;
            repNameTHREE = name;
        }
    }
    return (`🏆 1st: ${repNameONE} (${salesONE}) | 🥈 2nd: ${repNameTWO} (${salesTWO}) | 🥉 3rd: ${repNameTHREE} (${salesTHREE})`)
}





const monthlyDeals: SalesDeal[] = [
    { repName: "Alex", amount: 1000, status: "COMPLETED", bonusRate: 10 }, // 1000 + 10% = 1100
    { repName: "Sarah", amount: 2000, status: "COMPLETED" },                // 2000
    { repName: "Sarah", amount: 1000, status: "CANCELLED" },               // ข้าม! (CANCELLED)
    { repName: "Alex", amount: 500, status: "COMPLETED" },                 // 500 -> ยอดรวม Alex = 1600
    { repName: "John", amount: 800, status: "COMPLETED" },                 // 800 -> ยอดรวม John = 800
    { repName: "Sarah", amount: 1500, status: "COMPLETED", bonusRate: 10 },// 1500 + 10% = 1650 -> ยอดรวม Sarah = 3650
    { repName: "Emma", amount: 2500, status: "COMPLETED" }                 // 2500 -> ยอดรวม Emma = 2500
];


console.log(findTop3SalesReps(monthlyDeals));
// Output: 🏆 1st: Sarah ($3650) | 🥈 2nd: Emma ($2500) | 🥉 3rd: Alex ($1600)

// console.log(findTop3SalesReps([
//     { repName: "Alex", amount: 1000, status: "COMPLETED" },
//     { repName: "Sarah", amount: 500, status: "CANCELLED" }
// ]));
// Output: Insufficient Sales Data
