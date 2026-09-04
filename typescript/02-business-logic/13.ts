// 15/7 "ระบบประกาศผลสอบรายบุคคล"

let studentsScore: number[] = [45, 60, 75, 30] //คะแนนนักเรียน

function calculateStudentsScore(nums: number[]): void {
    let countStudents = 0;
    for (const checkScore of nums) {
        countStudents++
        if (checkScore >= 50) {
            console.log(`Student ${countStudents}: Passed`);
        } else {
            console.log(`Student ${countStudents}: Failed`);
        }
    }
}

calculateStudentsScore(studentsScore)