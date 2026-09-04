//โจทย์หาคะแนนสูงสุด 12/7 / ฉบับใช้ Array

let studentsScore: number[] = [40, 60, 35, 70]


//สร้างฟังก์ชัน
function findHighestScore(score: number[]): number {
    let hightscore = 0;
    for (let i = 0; i < score.length; i++) {
        if (hightscore < score[i]!) {
            hightscore = score[i]!
        }
    }
    return hightscore
}

let output = findHighestScore(studentsScore)
console.log(`คะแนนสูงที่สุดคือ: ${output}`)