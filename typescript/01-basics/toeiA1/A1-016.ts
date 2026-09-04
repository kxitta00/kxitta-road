// เขียนโปรแกรมรับรหัสนักศึกษา 8 หลัก แล้วตรวจสอบรหัสประจำตัวคณะสารสนเทศ
// โดยที่ถ้ารหัสหลักที่ 3 และ 4 คือ '1' และ '6' แสดงผลว่า yes นอกนนั้น no
// input 61161111 output yes
// inpput 61031234 output no

let inputStudentID: string = String(prompt("StudentID:"));

if (inputStudentID[2] === "1" && inputStudentID[3] === "6") {
    console.log("yes");
} else {
    console.log("no");
}


