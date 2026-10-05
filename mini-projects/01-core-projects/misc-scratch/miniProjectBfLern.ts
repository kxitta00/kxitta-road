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
const searchName: string | null = prompt("กรอกชื่อนักเรียนที่ต้องการดูรายงานคะแนน: ");

// ด่านเช็คความปลอดภัย (Type Narrowing) ว่าผู้ใช้ไม่ได้กดยกเลิกกล่องข้อความ
if (searchName !== null) {

    console.log("===เริ่มต้นค้นหารายงานของ: " + searchName + " ===");
    let isFound = false;

    // ใช้ for of loop วนลูปสแกนนักเรียนทีละคนในห้องเรียน
    for (const student of classroom) { //กำหนดตัวแปรชั่วคราว student ทำหน้าที่เป็นตัวแทนเข้าไปเช็ค ข้อมูลนักเรียนแต่ละคนตามรอบ loop 

        //ตรวจสอบเงื่อนไขชื่อ (แปลงตัวเล็กตัวใหญ่ให้หยวนๆกันได้)
        //toLocaleLowerCase() แปลงพิมใหญ่เป็นพิมพ์เล็ก Jhon = jhon
        if (student.name.toLocaleLowerCase() === searchName.toLocaleLowerCase()) {
            isFound = true;

            // Logic ดึงคะแนนจาก Tuple มาบวกกันเพื่อหาคะแนนรวม
            const totalScore = student.scores[0] + student.scores[1];

            // Logic ตัดเกรดและเลือกผลประเมิน(EvaluationStatus) ด้วย if-else
            let evaluation: EvaluationStatus;
            if (totalScore >= 90) {
                evaluation = 'Super Excellent';
            } else if (totalScore >= 80) {
                evaluation = "Excellent";
            } else if (totalScore >= 50) {
                evaluation = "Standard";
            } else {
                evaluation = "Needs Improvement";
            }

            // Logic ใช้ switch case  แยกการพิมพ์ข้อความเตือน/ยินดี ตามผลประเมินที่ได้
            console.log("ชื่อนักเรียน: " + student.name)
            console.log("คะแนนกลางภาค: " + student.scores[0])
            console.log("คะแนนปลายภาค: " + student.scores[1])
            console.log("คะแนนรวมทั้งหมด: " + totalScore + " คะแนน");

            switch (evaluation) {
                case "Super Excellent":
                    console.log("-> คำแนะนำ: เก่งเกินมนุษย์")
                    break;
                case "Excellent":
                    console.log("-> คำแนะนำ: เก่งมาก! รักษามาตรฐานนี้ไว้");
                    break;
                case "Standard":
                    console.log("-> คำแนะนำ: ผ่านเกณฑ์พื้นฐาน ขยันเพิ่มอีกนิดจะดีมาก");
                    break;
                case "Needs Improvement":
                    console.log("-> คำแนะนำ: ต่ำกว่าเกณฑ์มาตรฐาน ควรเข้าชั้นเรียนเสริมด่วน");
                    break;
            }

            //Logic ใช้ Ternary Operator บรรทัดเดียวเช็คว่านักเรียนคนนี้มีป้ายกำกับพิเศษ (tags) หรือไม่
            // if else ย่อ เรียกว่า ternary operator เงื่อนไข  ?  ทำถ้าเงื่อนไขเป็นจริง  :  ทำถ้าเงื่อนไขเป็นเท็จ
            const tagMessage = student.tags.length > 0 ? "หมายเหตุพิเศษ: " + student.tags.join(" | ") : "หมายเหตุพิเศษ: ไม่มี";
            console.log(tagMessage);

            break; // เมื่อเจอคนที่เราค้นหาแล้ว ให้สั่ง break เพื่อหยุดลูปการทำงานทันทีตามสไลด์

        }
    }

    // ปิดท้ายระบบ: ถ้าวิ่งลูปจนจบลูปแล้วไม่เจอชื่อที่ค้นหาเลย
    if (!isFound) { //!isFound เป็นเท็จเพราะหาข้อมูลไม่เจอจะมาเข้าเงื่อนไขนี้
        console.log("ไม่พบข้อมูลนักเรียน " + searchName + " ในระบบ");
    }
    // else ตัวนี้ต้องคู่กับ "if (searchName !== null)" ตัวแรกสุดของโค้ด
} else {
    console.log("คุณได้ยกเลิกขบวนการค้นหา")
}
