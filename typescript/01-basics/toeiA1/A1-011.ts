// input(XYZZZ) = output(1X1Y3Z)
// input(ABCDE) = output(1A1B1C1D1E)

let dataChar: string = String(prompt()) //ประกาศตัวแปรรอรับค่าจากผู้ใช้

let output: string = "" //ประกาศตัวแปรรอรับค่า สมุดเปล่า
let count: number = 1 //ประกาศตัวแปรเอาไว้นับ

for (let i = 1; i < dataChar.length; i++) { //เงื่อนไข for loop เริ่มลูปที่ตัวอักษรที่ 2 (index 1) และวนไปทีละตัวจนถึงตัวอักษรสุดท้ายของข้อความ
    if (dataChar[i] === dataChar[i - 1]) { //เงื่อนไข if else ถ้าชุดข้อความที่ i[ตัวปัจจุบัน] ใช่ตัวเดียวกับ ชุดข้อความที่ index -1 [ข้อความก่อนหน้า] 
        count++                            // ให้นำค่า count เดิม มาบวกเพิ่มไปอีก 1 (สะสมจำนวนไปเรื่อยๆ)
    } else {
        output += `${count}${dataChar[i - 1]}` //นำจำนวนที่นับสะสมไว้ (count) มาแปะติดกับ ตัวอักษรก่อนหน้า (i - 1) แล้วจดต่อท้ายลงใน output +=(output = outputเดิม + ของใหม่)
        count = 1
    }
}
output += `${count}${dataChar[dataChar.length - 1]}` //ลูปจบแล้ว เก็บตกด้วยการเอา output ล่าสุดไปต่อท้ายด้วย count ที่เหลืออยู่ + ตัวอักษรตัวสุดท้ายของข้อความ
console.log(output) //แสดงผลข้อมูลทั้งหมด