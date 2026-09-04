//27/7 โจทย์: "ระบบสรุปสถิตินักวิ่ง" (Runner Performance Tracker)

function analyzeRunner(distance: number[]): string {

    //ดักตัวที่ไม่มีข้อมูล
    if (distance.length === 0) {
        return "No Runnig Data"
    }

    let totalDistance: number = 0; //เก็บระยะทางรวม
    let maxDistace: number = distance[0]!; //วิ่งไกลสุด
    let countPassDay: number = 0; //วันที่วิ่งผ่าน / วิ่งเกิน 5km ขึ้นไป
    let statusDay: string = ""; //เก็บสเตตัส

    for (const checkRunnerDistace of distance) {
        totalDistance += checkRunnerDistace; //รวมกิโลที่วิ่ง

        if (checkRunnerDistace > maxDistace) { //หาวันที่วิ่งเยอะสุด
            maxDistace = checkRunnerDistace;
        }

        if (checkRunnerDistace >= 5) { //นับวันที่วิ่งเกิน5km
            countPassDay++
        }

    }

    //หาStatus
    if (countPassDay >= 3) {
        statusDay = "Fit"
    } else if (countPassDay >= 1) {
        statusDay = "Normal"
    } else {
        statusDay = "Needs traning"
    }

    return (`Total : ${totalDistance} Max : ${maxDistace} Passed : ${countPassDay} Status : ${statusDay}`)
}


console.log(analyzeRunner([2, 4, 6, 3, 1]));