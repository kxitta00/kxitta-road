//12 / 8 โจทย์ข้อ 46: "ระบบสร้างรายงานสรุปธุรกรรมทางการเงินประจำวัน (Daily Financial Summary Report Engine)"

//โครงสร้างข้อมูลเข้า Input
interface Transaction {
    txId: string;
    accountName: string;
    type: "DEPOSIT" | "WITHDRAW" | "TRANSFER_OUT";
    amount: number;
    isFlagged?: boolean;
}

//โครงสร้างข้อมูลออก Output Object
interface FinanciaReport {
    netVaultBalance: number; //ยอดเงินคงเหลือทั้งระบบ
    totalDeposits: number; //ยอดเงินฝากรวมทั้งหมดในระบบ
    totalWithdrawals: number; //ยอดเงินถอน/โอนออกรวมทั้งระบบ
    flaggedCount: number; //จำนวนรายการธุรกรรมต้องสงสัย
    topDepositAccount: string; //ชื่อบัญชีที่มียอดเงินฝากสูงสุดอันดับ 1
}


function generateFinancialReport(transaction: Transaction[]): FinanciaReport {

    //ส่วนดักข้อมูลและนับ isF
    let flaggedCount: number = 0; //จำนวน Account ที่ flag

    const accountName: string[] = [];
    for (const tran of transaction) {
        if (tran.isFlagged === true) {
            flaggedCount++
        } else if (!accountName.includes(tran.accountName)) {
            accountName.push(tran.accountName);
        }
    }
    //END LOOP

    if (accountName.length < 1) {
        return {
            netVaultBalance: 0,
            totalDeposits: 0,
            totalWithdrawals: 0,
            flaggedCount: flaggedCount,
            topDepositAccount: "Not Found"
        };
    }
    //END

    //ส่วนคำณวนหาค่าเงินรวมต่่างๆ
    const totalDepositMoney: { [name: string]: number } = {}; //ยอดเงินฝากรวมแต่ละคน
    let totalDeposits: number = 0; //ยอดฝากรวม
    let totalWithdrawals: number = 0; //ยอดถอนรวม
    for (const tranCheck of transaction) {

        if (tranCheck.isFlagged === true) continue;
        let moneyDeposit = tranCheck.amount

        if (!totalDepositMoney[tranCheck.accountName]) {
            totalDepositMoney[tranCheck.accountName] = 0;
        }

        if (tranCheck.type === "DEPOSIT") {
            totalDepositMoney[tranCheck.accountName]! += moneyDeposit
            totalDeposits += tranCheck.amount
        } else if (tranCheck.type === "WITHDRAW" || tranCheck.type === "TRANSFER_OUT") {
            totalWithdrawals += tranCheck.amount
        }

    }
    //END LOOP
    //END


    //ส่วนหาคนที่มีเงินฝากรวมสูงสุด
    let topDepositAccountAmount: number = -1; //บัญชีที่มียอดสูงสุด
    let topDepositAccountName: string = ""; //ชื่อบัญชีที่มียอดสูงสุด
    for (const name of accountName) {
        let money = totalDepositMoney[name]!;
        if (topDepositAccountAmount < money) {
            topDepositAccountAmount = money;
            topDepositAccountName = name
        }
    }
    //END

    let netVaultBalance: number = totalDeposits - totalWithdrawals //ยอดคงเหลือ
    //END

    //Output
    return {
        netVaultBalance: netVaultBalance,
        totalDeposits: totalDeposits,
        totalWithdrawals: totalWithdrawals,
        flaggedCount: flaggedCount,
        topDepositAccount: topDepositAccountName
    }
}



const dailyTransactions: Transaction[] = [
    { txId: "T01", accountName: "Alice", type: "DEPOSIT", amount: 5000 },                 // +5000 (Alice = 5000)
    { txId: "T02", accountName: "Bob", type: "DEPOSIT", amount: 8000 },                   // +8000 (Bob = 8000)
    { txId: "T03", accountName: "Alice", type: "WITHDRAW", amount: 1000 },                // -1000 (Alice = 4000)
    { txId: "T04", accountName: "Alice", type: "DEPOSIT", amount: 2000, isFlagged: true },// Flagged! (ข้าม & flaggedCount +1)
    { txId: "T05", accountName: "Bob", type: "TRANSFER_OUT", amount: 1500 },             // -1500 (Bob = 6500)
    { txId: "T06", accountName: "Bob", type: "DEPOSIT", amount: 1000 },                   // +1000 (Bob = 7500)
    { txId: "T07", accountName: "Charlie", type: "DEPOSIT", amount: 3000 },               // +3000 (Charlie = 3000)
    { txId: "T08", accountName: "Charlie", type: "WITHDRAW", amount: 500 }               // -500  (Charlie = 2500)
];

console.log(generateFinancialReport(dailyTransactions));
/* 📤 ผลลัพธ์ที่ต้องการ (Expected Output Object):
{
  netVaultBalance: 14000,     // (ฝากรวม 17,000 - ถอน/โอนรวม 3,000)
  totalDeposits: 17000,       // 5000 + 8000 + 1000 + 3000
  totalWithdrawals: 3000,     // 1000 + 1500 + 500
  flaggedCount: 1,            // T04 โดน Flag ไป 1 รายการ
  topDepositAccount: "Bob"    // Bob มียอดสุทธิสูงสุด (7500)
}
*/
