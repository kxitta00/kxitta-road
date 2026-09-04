//โจทย์หาคะแนนสูงสุด 12/7 / 02

//สร้างฟังก์ชัน
function findHighestScore(): number {
    let hightScore: number = 0;
    let inputStudents: number = Number(prompt("กรอกจำนวนนักเรียน: ") ?? 0);
    if (isNaN(inputStudents) || inputStudents <= 0) {
        console.log("ข้อมูลผิดพลาด!! กรุณากรอกใหม่")
    } else {
        for (let i = 0; i < inputStudents; i++) {
            let inputScore: number = Number(prompt(`กรอกคะแนนนักเรียนคนที่ ${i + 1}: `) ?? 0);
            if (isNaN(inputScore) || inputScore > 100 || inputScore < 0) {
                console.log("ข้อมูลผิดพลาด!! กรุณากรอกใหม่")
                break;
            } else {
                if (inputScore > hightScore) {
                    hightScore = inputScore
                }
            }
        }
    }
    return hightScore
}

let output = findHighestScore()
console.log(`คะแนนนักเรียนที่สูงที่สุด: ${output}`)