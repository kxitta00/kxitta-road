function calculateGrade(point: number): string {
    if (point > 100 || point < 0) {
        return "คะแนนไม่ถูกต้อง!! กรุณากรอกคะแนนใหม่";
    } else if (point >= 80) {
        return "4";
    } else if (point >= 70) {
        return "3";
    } else if (point >= 60) {
        return "2";
    } else if (point >= 50) {
        return "1";
    } else {
        return "F";
    }
}


let input: number = Number(prompt("กรุณากรอกคะแนนของคุณ:"));
let grade = calculateGrade(input);

console.log(`-----------------------`)
console.log(`คะแนนของคุณคือ: ${input}`)
console.log(`เกรดของคุณคือ: ${grade}`)
console.log(`-----------------------`)