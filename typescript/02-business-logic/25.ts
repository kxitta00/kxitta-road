//21/7  โจทย์ก่อนนอน: "ระบบตรวจสอบประวัติคะแนนความประพฤติ" (Employee Conduct Auditor)

//เก็บคะแนนความประพฤติ
const conductScore: number[] = [10, -5, 20, -15, 5];
//จำลองอาเรย์ว่าง
const mockData: number[] = [];

//สร้างฟังก์ชัน
function calculateConductScore(scores: number[]): string {
    let goodScore = 0;
    let coutNotGoodScores = 0;
    //ตรวจว่าอาเรย์มีข้อมูลมั้ย
    if (scores.length === 0) {
        return "No Conduct Records";
    }

    //ลูปเช็คคะแนนในอาเรย์ทุกตัว
    for (const chackScore of scores) {
        //บวกเพิ่มคะแนนบวก
        if (chackScore > 0) {
            goodScore += chackScore;
        }
        //นับครั้งคะแนนลบ
        if (chackScore < 0) {
            coutNotGoodScores++;
        }
    }

    return (`Final Score: [${goodScore}], Penalties: [${coutNotGoodScores}]`)
}

let output = calculateConductScore(conductScore);
console.log(output);