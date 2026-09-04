//22/7 โจทย์: ระบบวิเคราะห์ประวัติและประเมินสถานะพนักงาน (Employee Performance & Status Evaluator)

//สร้างฟังก์ชัน
function evaluateEmployee(scores: number[]): string {
    //ดักข้อมูลเปล่า
    if (scores.length === 0) {
        return "No Data Available";
    }
    //ตัวแปรไว้เก็บค่าต่างๆ
    let status: string = ""; //เก็บสถานะ
    let netScore: number = 0; //เก็บคะแนนความดีทั้งหมด
    let penaltyCount: number = 0; //จำนวนครั้งที่ถูกตัดคะแนน
    let worstPenalty = scores[0]; //คะแนนที่โดนหักหนักที่สุด

    //สร้างลูป for of เพื่อเข้าไปเช็คแต่ละแต้มในอาเรย์
    for (const checkScore of scores) {
        //รวมคะแนนดี
        if (checkScore > 0) {
            netScore += checkScore
        }

        //นับจำนวนครั้งที่ลบคะแนน
        if (checkScore < 0) {
            netScore += checkScore
            penaltyCount++
        }
        //หาคะแนนที่โดนหักหนักที่สุด
        if (checkScore < 0) {
            worstPenalty = checkScore;
        }
        //ให้สเตตัส
        if (penaltyCount >= 3 || netScore < 0) {
            status = "Needs Improvement"
        } else if (netScore >= 50 && penaltyCount == 0) {
            status = "Excellent"
        } else {
            status = "Normal"
        }
    }
    return (`Net score: ${netScore}, Penalties: ${penaltyCount}, Worst Penalty: ${worstPenalty}, Status: ${status}`);

}

//test case 1 ปกติ
// console.log(evaluateEmployee([15, -5, 25, -20, 10]));
// Test Case 2: ผลงานโดดเด่น ไม่โดนตัดคะแนนเลย
console.log(evaluateEmployee([20, 30, 15]));