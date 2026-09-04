
//11/8 โจทย์ข้อ 45: "ระบบจัดอันดับ 3 บัญชีที่มีเงินฝากสุทธิสูงสุด (Top Net Deposit Accounts Analytics)"
interface Transaction {
    accountName: string; //ชื่อบัญชี
    type: "DEPOSIT" | "WITHDRAW" | "TRANSFER_OUT"; //ประเภท
    amount: number; //จำนวนเงิน
    isFlagged?: boolean; //ธุรกรรมต้องสงสัยหรือไม่ true ให้ข้าม
}

function findTop3NetDeposits(accountTrans: Transaction[]): string {

    //ส่วนดักข้อมูลเข้า
    const accountNames: string[] = [];
    for (const check of accountTrans) {
        if (!check.isFlagged) {
            if (!accountNames.includes(check.accountName)) {
                accountNames.push(check.accountName);
            }
        }
    }
    //END LOOP

    if (accountNames.length < 3) {
        return "Insufficient Financial Data"
    }

    //ส่วนคำณวน
    const totalMoney: { [name: string]: number } = {};
    for (const checkMoney of accountTrans) {
        let money = checkMoney.amount;
        if (!checkMoney.isFlagged) {
            if (!totalMoney[checkMoney.accountName]) {
                totalMoney[checkMoney.accountName] = 0
            } if (checkMoney.type === "DEPOSIT") {
                totalMoney[checkMoney.accountName]! += money
            } else {
                totalMoney[checkMoney.accountName]! -= money;
            }
        }
    }
    //END LOOP

    //ส่วนจัดอันดับ
    let top1AccountAmount: number = -1;
    let top1AccountName: string = "";

    let top2AccountAmount: number = -1;
    let top2AccountName: string = "";

    let top3AccountAmount: number = -1;
    let top3AccountName: string = "";

    for (const name of accountNames) {
        let moneyFindTop: number = totalMoney[name]!;
        if (top1AccountAmount < moneyFindTop) {
            top3AccountAmount = top2AccountAmount;
            top3AccountName = top2AccountName;
            top2AccountAmount = top1AccountAmount;
            top2AccountName = top1AccountName;
            top1AccountAmount = moneyFindTop;
            top1AccountName = name;
        } else if (top2AccountAmount < moneyFindTop) {
            top3AccountAmount = top2AccountAmount;
            top3AccountName = top2AccountName;
            top2AccountAmount = moneyFindTop;
            top2AccountName = name;
        } else if (top3AccountAmount < moneyFindTop) {
            top3AccountAmount = moneyFindTop;
            top3AccountName = name;
        }
    }
    //END LOOP
    return (`🏦 1st: ${top1AccountName} ($${top1AccountAmount.toFixed(2)}) | 🥈 2nd: ${top2AccountName} ($${top2AccountAmount.toFixed(2)}) | 🥉 3rd: ${top3AccountName} ($${top3AccountAmount.toFixed(2)})`)
}
const monthlyTransactions: Transaction[] = [
    { accountName: "Alice", type: "DEPOSIT", amount: 5000 },                 // +5000
    { accountName: "Bob", type: "DEPOSIT", amount: 8000 },                   // +8000
    { accountName: "Alice", type: "WITHDRAW", amount: 1000 },                // -1000
    { accountName: "Alice", type: "DEPOSIT", amount: 2000, isFlagged: true },// ข้าม! (Flagged) -> ยอดสุทธิ Alice = 4000
    { accountName: "Bob", type: "TRANSFER_OUT", amount: 1500 },             // -1500
    { accountName: "Bob", type: "DEPOSIT", amount: 1000 },                   // +1000 -> ยอดสุทธิ Bob = 7500
    { accountName: "Charlie", type: "DEPOSIT", amount: 3000 },               // +3000
    { accountName: "Charlie", type: "WITHDRAW", amount: 500 },               // -500 -> ยอดสุทธิ Charlie = 2500
    { accountName: "David", type: "DEPOSIT", amount: 6000 },                 // +6000
    { accountName: "David", type: "TRANSFER_OUT", amount: 500 }              // -500 -> ยอดสุทธิ David = 5500
];


console.log(findTop3NetDeposits(monthlyTransactions));
// Output: 🏦 1st: Bob ($7500) | 🥈 2nd: David ($5500) | 🥉 3rd: Alice ($4000)

// console.log(findTop3NetDeposits([
//     { accountName: "Alice", type: "DEPOSIT", amount: 1000 },
//     { accountName: "Bob", type: "DEPOSIT", amount: 500, isFlagged: true }
// ]));
// Output: Insufficient Financial Data
