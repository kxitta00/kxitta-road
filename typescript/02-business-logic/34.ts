// 30/7  โจทย์: "ระบบวิเคราะห์คะแนนสอบของนักเรียน" (Student Exam Analytics)

import ts from "typescript";

interface Student {
    name: string; //ชื่อนักเรียน
    score: number; //คะแนน
    isPassed: boolean; //สถานะว่าสอบผ่านหรือไม่
}

function analyzeExam(students: Student[]): string {
    //ดักถ้าไม่มีข้อมูลนักเรียน
    if (students.length === 0) {
        return "No Student Data";
    }

    let avgScore: number = 0;
    let maxScore = students[0]!.score;
    let passedCount: number = 0;
    let topStudent = students[0]!.name;
    let status: string = "";

    for (const checkStudents of students) {
        avgScore += checkStudents.score

        if (checkStudents.isPassed === true) {
            passedCount++
        }

        if (checkStudents.score > maxScore) {
            maxScore = checkStudents.score;
            topStudent = checkStudents.name;
        }
    }
    //End loop
    //avg
    avgScore = avgScore / students.length

    let totalPercentPass = (passedCount / students.length) * 100;

    if (totalPercentPass >= 80) {
        status = "Excellent Class";
    } else if (totalPercentPass >= 50) {
        status = "Good Class";
    } else {
        status = "Needs Improvemet"
    }

    return (`Average: ${Math.floor(avgScore)}, Passed: ${passedCount}, Top Student: ${topStudent}, Class Satus: ${status}`)

}

//Mock data
const classroom: Student[] = [
    { name: "Alice", score: 85, isPassed: true },
    { name: "Bob", score: 45, isPassed: false },
    { name: "Charlie", score: 95, isPassed: true }, //คะแนนสูงที่สุด
    { name: "David", score: 78, isPassed: true },
];

console.log(analyzeExam(classroom));