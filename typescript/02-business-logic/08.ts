//โจทย์ หาคะแนนเฉลี่ยของเฉพาะคนที่สอบผ่าน 14/7

let studentsScore: number[] = [40, 50, 35, 60, 65]

function calculateAverageScore(score: number[]): number {
    let studentsPassingScore: number[] = []
    for (const checkScore of score) {
        if (checkScore >= 50) {
            studentsPassingScore.push(checkScore)
        }
    }

    let sumScore = 0;
    let averageScore = 0;

    for (let i = 0; i < studentsPassingScore.length; i++) {
        sumScore += studentsPassingScore[i] ?? 0;
    }
    averageScore = sumScore / studentsPassingScore.length
    return Number(averageScore.toFixed(2));

}

let sum = calculateAverageScore(studentsScore)
console.log(`ค่าเฉลี่ยคะแนน: ${sum}`)

