// 17/7 ข้อ 1 (แบบคืนค่า): "ระบบวิเคราะห์สถานะชั่วโมงทำงานของพนักงาน" (Return Value)
const workHours: number[] = [40, 35, 45, 20]; //เก็บชั่วโมงการทำงาน

function analyzeWorkStatus(hours: number[]): string[] {
    const statusWork: string[] = []
    for (const checkStatus of hours) {
        if (checkStatus > 40) {
            statusWork.push("OT");
        } else if (checkStatus === 40) {
            statusWork.push("Full-time");
        } else {
            statusWork.push("Part-time");
        }
    }
    return statusWork;
}

const output = analyzeWorkStatus(workHours);
console.log(output)

