//9/8 📝 โจทย์ข้อ 43: "ระบบวิเคราะห์ 3 สตรีมเมอร์ยอดเงินโดเนทสุทธิสูงสุด (Top Streamer Analytics)"

interface DonationLog {
    streamerName: string;           // ชื่อสตรีมเมอร์
    amount: number;                 // จำนวนเงินโดเนท
    status: "SUCCESS" | "REFUNDED"; // สถานะโดเนท
    isSuperChat?: boolean;          // เป็น SuperChat หรือไม่ (ถ้า true ได้โบนัส +15%)
}

function findTop3Streamers(streamers: DonationLog[]): string {

    //ส่วนเช็คข้อมูล
    const streamerNames: string[] = [];     //เก็บชื่อสตรีมเมอร์
    for (const checkStreamerAndStatus of streamers) {
        if (checkStreamerAndStatus.status === "SUCCESS") {
            if (!streamerNames.includes(checkStreamerAndStatus.streamerName)) {
                streamerNames.push(checkStreamerAndStatus.streamerName);
            }
        }
    }
    //END LOOP

    if (streamerNames.length < 3) {
        return "Insufficient Streamer Data"
    }
    //----//

    //ส่วนคำณวนเงินโดเนท
    const streamerTotal: { [name: string]: number } = {}; //ไว้เก็บชื่อและยอดเงินที่รวมมาแล้ว
    for (const streamer of streamers) {
        if (streamer.status === "SUCCESS") {
            let donateTotal: number = streamer.amount
            if (streamer.isSuperChat === true) {
                donateTotal = donateTotal * 1.15;
            }
            if (!streamerTotal[streamer.streamerName]) {
                streamerTotal[streamer.streamerName] = donateTotal
            } else {
                streamerTotal[streamer.streamerName]! += donateTotal
            }
        }

    }
    //END LOOP
    //----//


    let top1StreamerDonate = -1;
    let top1StreamerName = "";

    let top2StreamerDonate = -1;
    let top2StreamerName = "";

    let top3StreamerDonate = -1;
    let top3StreamerName = "";
    //ส่วนหาอันดับ
    for (const name of streamerNames) {
        let donate = streamerTotal[name]!;
        if (top1StreamerDonate < donate) {
            top3StreamerDonate = top2StreamerDonate;
            top3StreamerName = top2StreamerName;
            top2StreamerDonate = top1StreamerDonate;
            top2StreamerName = top1StreamerName;
            top1StreamerDonate = donate;
            top1StreamerName = name;
        } else if (top2StreamerDonate < donate) {
            top3StreamerDonate = top2StreamerDonate;
            top3StreamerName = top2StreamerName;
            top2StreamerDonate = donate
            top2StreamerName = name
        } else if (top3StreamerDonate < donate) {
            top3StreamerDonate = donate
            top3StreamerName = name
        }
    }
    //END LOOP
    //----//
    return (`💎 1st: ${top1StreamerName} ($${top1StreamerDonate.toFixed(2)}) | 🥈 2nd: ${top2StreamerName} ($${top2StreamerDonate.toFixed(2)}) | 🥉 3rd: ${top3StreamerName} ($${top3StreamerDonate.toFixed(2)})`)
}


//ข้อมูลจำลอง
const monthlyDonations: DonationLog[] = [
    { streamerName: "KaiCenat", amount: 1000, status: "SUCCESS", isSuperChat: true }, // 1000 * 1.15 = 1150
    { streamerName: "IShowSpeed", amount: 2000, status: "SUCCESS" },                  // 2000
    { streamerName: "IShowSpeed", amount: 1000, status: "REFUNDED" },                 // ข้าม! (REFUNDED)
    { streamerName: "KaiCenat", amount: 500, status: "SUCCESS" },                     // 500 -> ยอดรวม KaiCenat = 1650
    { streamerName: "Ninja", amount: 800, status: "SUCCESS" },                        // 800 -> ยอดรวม Ninja = 800
    { streamerName: "IShowSpeed", amount: 1000, status: "SUCCESS", isSuperChat: true },// 1000 * 1.15 = 1150 -> ยอดรวม IShowSpeed = 3150
    { streamerName: "Pokimane", amount: 1500, status: "SUCCESS", isSuperChat: true }  // 1500 * 1.15 = 1725 -> ยอดรวม Pokimane = 1725
];
//----//


console.log(findTop3Streamers(monthlyDonations));
// Output: 💎 1st: IShowSpeed ($3150) | 🥈 2nd: Pokimane ($1725) | 🥉 3rd: KaiCenat ($1650)

// console.log(findTop3Streamers([
//     { streamerName: "KaiCenat", amount: 1000, status: "SUCCESS" },
//     { streamerName: "IShowSpeed", amount: 500, status: "REFUNDED" }
// ]));
// Output: Insufficient Streamer Data
