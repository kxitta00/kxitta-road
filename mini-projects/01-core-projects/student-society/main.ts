// ระบบเก็บข้อมูลตัดเกรดนักเรียน วิชาสังคม
//1. enum type interface

enum ClassRoom { M603, M606, M609 }

type StudentID = number | string;

type Grade = '' | '0' | '1' | '2' | '3' | '4'; // ต่ำกว่า 50 = 0 / 50ขึ้น ไม่เกิน59 = 1 / 60 ขึ้นไม่เกิน 69 = 2 / 70 ขึ้นไม่เกิน 79 = 3 / 80 ขั้นไป 4

interface Student {
    id: StudentID; //รหัสนักเรียน
    name: string; //ชื่อ
    score: [number, number, number]; // คะแนน: คะแนนเก็บ50/50, คะแนนกลาางภาค10/10, คะแนนปลายภาค25/25
    grade: Grade; //เกรด
    classroom: ClassRoom //ห้อง 6/3, 6/6, 6/9
}

// ข้อมูลนักเรียน
const StudentInfo: Student[] = [
    {
        id: 29999,
        name: "Sarathep Namla",
        score: [50, 10, 20], //80 คะแนนเก็บ, คะแนนกลาางภาค, คะแนนปลายภาค
        grade: '',
        classroom: ClassRoom.M603
    },
    {
        id: 30001,
        name: "Krittamet Nanthasit",
        score: [50, 5, 15], //70 คะแนนเก็บ, คะแนนกลาางภาค, คะแนนปลายภาค
        grade: '',
        classroom: ClassRoom.M606
    },
    {
        id: 30004,
        name: "Anawat Sudhod",
        score: [40, 10, 15], //65 คะแนนเก็บ, คะแนนกลาางภาค, คะแนนปลายภาค
        grade: '',
        classroom: ClassRoom.M609
    },
]

// ระบบเพิ่มนักเรียนและข้อมูลนักเรียน
console.log("========== ยินดีตอนรับสู่ระบบคำณวนเกรดและเก็บข้อมูลนักเรียน(วิชาสังคม) =================")
console.log("-> ดูข้อมูลนักเรียนและเกรดที่ถูกคำณวนแล้วพิมพ์ 0, -> ต้องการเพิ่มข้อมูลนักเรียนพิมพ์ 1")
let inputNext = prompt("กรอกเลขเพื่อดำเนินกาต่อ (0-1): ");

if (inputNext === "1") {
    let newID = prompt("กรอกรหัสนักเรียน: ");
    let newName = prompt("กรอกชื่อนักเรียน: ");
    let newTest = Number(prompt("กรอกคะแนนเก็บนักเรียน: "));
    let newMid = Number(prompt("กรอกคะแนนกลางภาคนักเรียน: "));
    let newFinal = Number(prompt("กรอกคะแนนปลายภาคนักเรียน: "));

    //ระบุห้อง
    console.log("กรุณาระบุห้องนักเรียน(3 = M6/3, | 6 = M6/6, | 9 = M6/9");
    let inputNewClassRoom = prompt("ระบุเลข (3, 6, 9): ");
    let newClassroom = ClassRoom.M603
    switch (inputNewClassRoom) {
        case '6':
            newClassroom = ClassRoom.M606
            console.log("ห้อง: ม.6/6")
            break;
        case '9':
            newClassroom = ClassRoom.M609
            console.log("ห้อง: ม.6/9")
            break;
        case '3':
            console.log("ห้อง: ม.6/3")
            break;
    }

    //เพิ่มนักเรียนและตรวจข้อความ
    if (newID && newName) {
        const newStudentInfo: Student = {
            id: newID,
            name: newName,
            score: [newTest, newMid, newFinal],
            grade: '',
            classroom: newClassroom,
        };

        StudentInfo.push(newStudentInfo);
        console.log(`========== เพิ่มข้อมูลนักเรียน: ${newName} สำเร็จ!!==========`)
    }

} else { //กรณีกด 0
    // Logic คำณวนคะแนนเก็บทั้งหมด // หาเกรด // หาชื่อนักเรียนและคะแนนสูงสุด // หาค่าเฉลี่ยนนักเรียนทั้งหมด

    //หาคะแนนรวม
    function calculateScore(test: number, mid: number, final: number): number {
        let totalScore = test + mid + final
        return totalScore;
    }

    //หาเกรด
    function CalculateGrade(score: number): Grade { // ต่ำกว่า 50 = 0 / 50ขึ้น ไม่เกิน59 = 1 / 60 ขึ้นไม่เกิน 69 = 2 / 70 ขึ้นไม่เกิน 79 = 3 / 80 ขั้นไป 4
        if (score >= 80) {
            return '4';
        } else if (score >= 70) {
            return '3';
        } else if (score >= 60) {
            return '2';
        } else if (score >= 50) {
            return '1';
        } else {
            return '0';
        }
    }

    //หาชื่อนักเรียนที่ได้คะแนนเยอะที่สุด 

    function findHightScoreName(student: Student): string {

    }


}




