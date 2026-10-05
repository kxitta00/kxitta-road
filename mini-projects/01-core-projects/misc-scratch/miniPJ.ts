//ระบบตัดเกรดและวิเคราะห์คะแนนนักเรียน Student Grading Dashboard


//enum หมวดหมู่วิชา
enum Subject { Math, Science, English }

// Union Type คุมรหัสนักเรียน
type StudentID = string | number;

// Literal Type ผลประเมิณ
type EvaluationStatus = 'Super Excellent' | 'Excellent' | 'Standard' | 'Needs Improvement'; //ยอดเยี่ยยมมาก ยอดเยี่ยม มาตฐาน ต้องปรับปรุง

// Object type โครงสร้างข้อมูลนักเรียน
interface Student {
    id: StudentID;
    name: string;
    scores: [number, number]; // tuple: คะแนนกลางภาค คะแนนปลายภาค
    tags: string[]; // Array:
    subject: Subject; // ดึง enum มาใช้
}

//สร้างข้อมูลจำลองนักเรียนในระบบ
const classroom: Student[] = [ //ตัวแปรนี้จะต้องเก็บข้อมูลเป็น อาร์เรย์ (รายการ) ที่ข้างในต้องเป็นข้อมูลของนักเรียน (Student) เท่านั้น ห้ามนำข้อมูลประเภทอื่นมาใส่
    {
        id: 1001,
        name: "สมชาย ใจดี",
        scores: [45, 40], // กลางภาค ปลายภาค รวม85
        tags: ["หัวหน้าห้อง", "เด็กเรียน"],
        subject: Subject.Math
    },
    {
        id: "STU-02",
        name: "สมหญิง รักดี",
        scores: [20, 25], // mid final sum45
        tags: ["นักกีฬา"],
        subject: Subject.Science
    },
    {
        id: 1003,
        name: "John doe",
        scores: [30, 35], // mid final sum 65
        tags: ["นักเรียนแลกเปลี่ยน"],
        subject: Subject.English
    },
    {
        id: 1004,
        name: "Sarathep Namla",
        scores: [45, 45],
        tags: ["นักเรียนแลกเปลี่ยนอังกฤษ"],
        subject: Subject.English
    },
];

// Logic วิเคราะห์และตัดเกรด
console.log("==================================================");
console.log("   รายงานสรุปผลการเรียนของนักเรียนทุกคนในห้องเรียน   ");
console.log("==================================================");

for (const student of classroom) {
    const totalScore = student.scores[0] + student.scores[1];

    let evaluation: EvaluationStatus;
    if (totalScore >= 90) {
        evaluation = 'Super Excellent'
    } else if (totalScore >= 80) {
        evaluation = 'Excellent'
    } else if (totalScore >= 50) {
        evaluation = 'Standard'
    } else {
        evaluation = 'Needs Improvement'
    }


    console.log("รหัสนักเรียน: " + student.id);
    console.log("ชื่อนักเรียน:" + student.name);
    console.log("คะแนนรวมทั้งหมด: " + totalScore + " คะแนน");

    switch (evaluation) {
        case 'Super Excellent':
            console.log("-> ยอดมนุษย์")
            break;
        case 'Excellent':
            console.log("-> ผลการประเมิน: [Excellent] ดีเยี่ยม! รักษามาตรฐานไว้")
            break;
        case 'Standard':
            console.log("-> ผลการประเมิน: [Standard] ผ่านเกณฑ์พื้นฐาน ขยันเพิ่มอีกนิดจะดีมาก")
            break;
        case 'Needs Improvement':
            console.log("-> ผลการประเมิน: [Needs Improvement] ต่ำกว่าเกณฑ์ ควรเรียนเสริมด่วน")
    }

    const tagMessage = student.tags.length > 0 ? "หมายเหตุ: " + student.tags.join(", ") : "หมายเหตุ: ไม่มี";
    console.log(tagMessage);
    console.log("---------------------------------------------------------");
}