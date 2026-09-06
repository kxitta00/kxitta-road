// ฟังกชันคำณวนเกรด

//  การสร้างฟังก์ชัน ชื่อ calculateGrade ให้พารามิเตอร์ score เก็บตัวเลข และส่งผลลัพธ์กลับออกมาเป็นข้อความ (เกรด)
function calculateGrade(score: number): string {
    if (score > 100 || score < 0) { //ลืมดักคะแนนถ้าเข้ามาน้อยกว่า 0 หรือมากกว่า 100
        return "คะแนนไม่ถูกต้อง! กรุณากรอกใหม่";
    } else if (score >= 80) {  //เราไม่ต้องใส่ && 
        return "A";
    } else if (score >= 75) { // 75 -> 79
        return "B+";
    } else if (score >= 70) { // 70 -> 74
        return "B";
    } else if (score >= 65) { // 65-> 69
        return "C+";
    } else if (score >= 60) { // 60 -> 64
        return "C";
    } else if (score >= 50) { // 50 -> 59
        return "D";
    } else {                //ถ้าคะแนนน้อยกว่า 50
        //หรือตั้งแต่ 49 ลงมา ->>
        return "F";
    }
}

// แสดงข้อความทักทายและรับค่าจากผู้ใช้ (ค่าที่ได้กลับมาจะเป็นตัวหนังสือ หรือ string)
const input = prompt("กรุณากรอกคะแนนของคุณ : ");

//แปลงข้อความผู้ใช้พิมพ์ให้กลายเป็น "ตัวเลข (number)" 
// ถ้าผู้ใช้ไม่ได้พิมพ์อะไรเลย ให้เปลี่ยนเป็นเลข 0 แทน
const score = Number(input);

//เอาคะแนนที่แปลงแล้ว ส่งเข้าไปคำณวนในฟังก์ชัน
const grade = calculateGrade(score);

//แสดงผลลัพธ์ออกทางหน้าจอ
console.log(`--------------------`)
console.log(`คะแนนที่กรอกคือ:${score}`);
console.log(`เกรดของคุณคือ: ${grade}`);
console.log(`--------------------`)