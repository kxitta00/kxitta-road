//13 / 8 📝 โจทย์ข้อ 47: "ระบบสรุปรายงานประสิทธิภาพพนักงานคอลเซ็นเตอร์ประจำสัปดาห์ (Call Center Performance Summary Engine)"

// ข้อมูลขาเข้า (Input)
interface CallLog {
    callId: string;
    agentName: string;                            // ชื่อพนักงานคอลเซ็นเตอร์
    durationMinutes: number;                     // ระยะเวลาคุยสาย (นาที)
    status: "RESOLVED" | "UNRESOLVED" | "DROPPED";// สถานะการให้บริการ
    rating?: number;                             // คะแนนประเมินความพึงพอใจลูกค้า (1-5 ดาว)
}

// รายงานสรุปขาออก (Output Object)
interface CallCenterReport {
    totalCalls: number;          // จำนวนสายทั้งหมดที่โทรเข้ามา
    resolvedRate: number;        // อัตราการแก้ปัญหาสำเร็จ (%)
    totalDroppedCalls: number;   // จำนวนสายที่หลุด/สายหลุดกลางคัน
    avgDurationMinutes: number;  // ระยะเวลาคุยสายเฉลี่ยรวมทั้งระบบ (นาที)
    topRatedAgent: string;       // ชื่อพนักงานที่ได้คะแนนประเมินเฉลี่ยสูงสุดอันดับ 1
}

function generateCallCenterReport(callLogs: CallLog[]): CallCenterReport {
    //เช็คข้อมูล
    if (callLogs.length < 1) {
        return {
            totalCalls: 0,
            resolvedRate: 0,
            totalDroppedCalls: 0,
            avgDurationMinutes: 0,
            topRatedAgent: "Not Found",
        };
    }
    //END

    //ประกาศตัวแปร
    let totalCalls: number = 0; //นับจำนวนการโทร
    let resolveCalls: number = 0; //นับจำนวนที่แก้ปัญหาสำเร็จ
    let totalDroppedCalls: number = 0; //นับจำนวนสายหลุด
    let totalDuration: number = 0; //รวมนาทีที่โทรทั้งหมด
    const agentTotalRating: { [name: string]: number } = {}; //เก็บ rating รวม
    const agentRatingCount: { [name: string]: number } = {}; //นับจำนวน rating ทั้งหมด

    //เริ่มต้นลูปคำณวนค่าต่างๆ
    for (const callLog of callLogs) {
        totalCalls += 1;
        totalDuration += callLog.durationMinutes

        if (callLog.status === "DROPPED") {
            totalDroppedCalls++;
        } else if (callLog.status === "RESOLVED") {
            resolveCalls++;
        }


        if (callLog.rating !== undefined) {
            if (!agentTotalRating[callLog.agentName]) {
                agentTotalRating[callLog.agentName] = 0;
            }
            if (!agentRatingCount[callLog.agentName]) {
                agentRatingCount[callLog.agentName] = 0;
            }
            agentTotalRating[callLog.agentName]! += callLog.rating;
            agentRatingCount[callLog.agentName]! += 1;

        }

    }
    //END LOOP

    let topRatedAgent: string = "";
    let topRateScore: number = -1;
    const agentScore: { [name: string]: number } = {};
    //หาพนักงานอันดับ 1
    for (const callId of Object.keys(agentTotalRating)) {
        let avgScore = agentScore[callId] = agentTotalRating[callId]! / agentRatingCount[callId]!;
        if (topRateScore < avgScore) {
            topRateScore = avgScore;
            topRatedAgent = callId;
        }
    }
    //END LOOP
    let resolvedRate: number = Number(((resolveCalls / totalCalls) * 100).toFixed(2)); //avgResolved
    let avgDurationMinutes: number = Number((totalDuration / totalCalls).toFixed(2)); //เฉลี่ยการโทรต่อสาย

    return {
        totalCalls: totalCalls,
        resolvedRate: resolvedRate,
        totalDroppedCalls: totalDroppedCalls,
        avgDurationMinutes: avgDurationMinutes,
        topRatedAgent: topRatedAgent
    }
}

const weeklyCallLogs: CallLog[] = [
    { callId: "C01", agentName: "Sarah", durationMinutes: 10, status: "RESOLVED", rating: 5 },
    { callId: "C02", agentName: "Alex", durationMinutes: 15, status: "RESOLVED", rating: 4 },
    { callId: "C03", agentName: "Sarah", durationMinutes: 5, status: "DROPPED" },               // ไม่มี rating
    { callId: "C04", agentName: "Alex", durationMinutes: 20, status: "UNRESOLVED", rating: 2 },
    { callId: "C05", agentName: "Sarah", durationMinutes: 12, status: "RESOLVED", rating: 5 },
    { callId: "C06", agentName: "John", durationMinutes: 8, status: "RESOLVED", rating: 4 }
];

console.log(generateCallCenterReport(weeklyCallLogs));
/* 📤 ผลลัพธ์ที่ต้องการ (Expected Output Object):
{
  totalCalls: 6,              // มีทั้งหมด 6 สาย
  resolvedRate: 66.67,        // แก้สำเร็จ 4 จาก 6 สาย (4/6 * 100 = 66.67%)
  totalDroppedCalls: 1,       // สายหลุด 1 สาย (C03)
  avgDurationMinutes: 11.67,  // คุยรวม 70 นาที / 6 สาย = 11.67 นาที
  topRatedAgent: "Sarah"      // Sarah ได้คะแนนเฉลี่ย 5.00 ดาว (Alex ได้ 3.00, John ได้ 4.00)
}
*/
