// 23/7  โจทย์: "ระบบคัดเกรดพนักงานและคำนวณโบนัสประจำปี" (Bonus & Grade Calculator)

function calculateBonus(scores: number[], baseSalary: number): string {
    //ดักข้อมูลผิด
    if (scores.length === 0) {
        return "Invalid Score";
    } else if (baseSalary <= 0) {
        return "Invalid Salary";
    }
    //รวมคะแนนทั้งหมด
    let totalScore: number = 0;
    for (const count of scores) {
        totalScore += count
    }
    //สร้างตัวแปรมาเก็บคาเฉลี่ย
    let avgScore: number = 0;
    //หาค่าเฉลี่ยน
    avgScore = totalScore / scores.length

    //สร้างตัวแปรมาไว้เก็บเกรด;
    let grade: string = "";
    //สร้างตัวแปรไว้เก็บเงินเดือนที่ได้โบนัส
    let salaryBonus: number = 0;
    //หาโบนัสให้
    if (avgScore >= 80) {
        grade = "A";
        salaryBonus = baseSalary * 2;
    } else if (avgScore >= 70) {
        grade = "B";
        salaryBonus = baseSalary * 1;
    } else if (avgScore >= 60) {
        grade = "C";
        salaryBonus = baseSalary * 0.5;
    } else {
        grade = "F";
        salaryBonus = 0;
    }
    return (`Average: [${avgScore}], Grade: [${grade}], Bonus: [${salaryBonus}]`)
}

console.log(calculateBonus([80, 90, 85], 30000));