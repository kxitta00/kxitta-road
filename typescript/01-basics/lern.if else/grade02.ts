//ฟังก์ชันคำณวนเกรด

function calculateGrade(score: number): string {
    if (score > 100 || score < 0) {
        return "คะแนนไม่ถูกต้อง! กรุณากรอกใหม";
    } else if (score >= 80) {
        return "A";
    } else if (score >= 75) {
        return "B+";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 65) {
        return "C+";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

const input = prompt("กรุณากรอกคะแนนของคุณ :");
const score = Number(input);

const grade = calculateGrade(score);

console.log(`----------------------`);
console.log(`คะแนนที่กรอกคือ:${score}`);
console.log(`เกรดของคุณคือ:${grade}`);
console.log(`----------------------`);