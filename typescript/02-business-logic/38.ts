// 1/8 ข้อที่ 2 (หาค่ามากที่สุด Top 3 - MAX): "ระบบสรุป 3 อันดับสตรีมเมอร์ที่ได้โดเนทสูงสุด" (Top 3 Streamer Donors)

interface Donor {
    username: string;
    amount: number; // ยอดเงินโดเนท (บาท)
}

function findTop3Donors(donors: Donor[]): string {
    if (donors.length < 3) {
        return "Not Enough Donors";
    }

    let top1Name = "";
    let top1Money = -1;

    let top2Name = "";
    let top2Money = -1;

    let top3Name = "";
    let top3Money = -1;

    for (const checkUserDonate of donors) {
        if (top1Money < checkUserDonate.amount) {
            top3Money = top2Money;
            top3Name = top2Name;
            top2Money = top1Money;
            top2Name = top1Name;
            top1Money = checkUserDonate.amount;
            top1Name = checkUserDonate.username;
        } else if (top2Money < checkUserDonate.amount) {
            top3Money = top2Money;
            top3Name = top2Name;
            top2Money = checkUserDonate.amount;
            top2Name = checkUserDonate.username;
        } else if (top3Money < checkUserDonate.amount) {
            top3Money = checkUserDonate.amount;
            top3Name = checkUserDonate.username;
        }
    }

    return (`Gold: ${top1Name} (${top1Money}), Silver: ${top2Name} (${top2Money}), Bronze: ${top3Name} (${top3Money})`)
}



const donorList: Donor[] = [
    { username: "UserA", amount: 500 },   // Bronze (3rd)
    { username: "UserB", amount: 2000 },  // Gold (1st)
    { username: "UserC", amount: 1500 },  // Silver (2nd)
    { username: "UserD", amount: 200 }    // ไม่ติด Top 3
];
console.log(findTop3Donors(donorList));
// Output: Gold: UserB (2000), Silver: UserC (1500), Bronze: UserA (500)
