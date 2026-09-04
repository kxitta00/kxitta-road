//โจทย์นับคะแนน 12/7 Morning / 01

let inputStudent: number = Number(prompt("กรอกจำนวนนักเรียน: ") ?? 0);

//ตัวแปรนับคะแนน
let passScore = 0; //คนผ่าน
let failScore = 0; //คนไม่ผ่าน


//ลูปรับคะแนน0
if (isNaN(inputStudent) || inputStudent <= 0) {
    console.log("ข้อมูลไม่ถูกต้อง!! กรุณากรอกใหม่");
} else {
    for (let i = 0; i < inputStudent; i++) {
        let inputScore: number = Number(prompt(`กรอกคะแนนนักเรียนคนที่ ${i + 1}: `) ?? 0);
        if (isNaN(inputScore) || inputScore > 100 || inputScore < 0) {
            console.log("คะแนนไม่ถูกต้อง!! กรุณากรอกใหม่")
            break;
        } else {
            if (inputScore >= 50) {
                passScore++
            } else {
                failScore++
            }
        }
    }

    console.log(`จำนวนนักเรียน: ${inputStudent}`);
    console.log(`นักเรียนสอบผ่าน: ${passScore}`);
    console.log(`นักเรียนสอบไม่ผ่าน: ${failScore}`);

}

