// 31/7  โจทย์: "ระบบคัดเลือกนักวิ่งเข้าทีมแข่งrelay 2 คนแรก" (Fastest Runners Finder)

interface Runner {
    name: string;
    timeSeconds: number; //เวลาที่วิ่งได้ยิ่งน้อยยิ่งดี
}

function findTwoFastest(runnerList: Runner[]): string {
    if (runnerList.length < 2) {
        return "Not Enough Runners"
    }

    let fastest1Time = 9999;
    let fastest1Name = "";

    let fastest2Time = 9999;
    let fastest2Name = "";

    for (const runnersCheck of runnerList) {
        if (runnersCheck.timeSeconds < fastest1Time) {
            fastest2Time = fastest1Time;
            fastest2Name = fastest1Name;
            fastest1Time = runnersCheck.timeSeconds;
            fastest1Name = runnersCheck.name;
        } else if (fastest2Time > runnersCheck.timeSeconds) {
            fastest2Time = runnersCheck.timeSeconds
            fastest2Name = runnersCheck.name
        }
    }

    return (`1st: ${fastest1Name} (${fastest1Time})
2nd: ${fastest2Name} (${fastest2Time}) `)
}






const runnerList: Runner[] = [
    { name: "Somchai", timeSeconds: 12.5 },  // อันดับ 2 (12.5s)
    { name: "Somsak", timeSeconds: 10.8 },   // เร็วสุด! อันดับ 1 (10.8s)
    { name: "Sombat", timeSeconds: 14.2 },   // ช้าสุด 
    { name: "Sompong", timeSeconds: 11.2 }   // อันดับ 2 ใหม่! (11.2s เร็วกว่า Somchai)
];
// ผลลัพธ์อันดับ 1 คือ Somsak (10.8s)
// ผลลัพธ์อันดับ 2 คือ Sompong (11.2s)
console.log(findTwoFastest(runnerList));
// Output: 1st: Somsak (10.8s), 2nd: Sompong (11.2s)