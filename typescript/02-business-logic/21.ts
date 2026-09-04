//18/7 โจทย์: "ระบบวิเคราะห์คะแนนนักศึกษาดีเด่น" (High-Achiever Score Analyzer)

const studentsScore: number[] = [75, 85, 90, 60, 80, 45];
const studentsFailScore: number[] = [50, 60, 70, 75];

function analyzeClassScores(scores: number[]): number {
    const hightScore: number[] = [];
    for (const getHightScore of scores) {
        if (getHightScore >= 80) {
            hightScore.push(getHightScore)
        }
    }

    let sumScore = 0;
    for (let i = 0; i < hightScore.length; i++) {
        sumScore += hightScore[i] ?? 0
    }

    let avarageScore = 0;
    avarageScore = sumScore / hightScore.length

    return isNaN(avarageScore) ? 0 : avarageScore;
}

let output = analyzeClassScores(studentsFailScore)
console.log(`ค่าเฉลี่ยที่ได้: ${output} `)