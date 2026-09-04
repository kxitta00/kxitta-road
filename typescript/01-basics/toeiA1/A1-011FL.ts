// input(XYZZZ) = output(1X1Y3Z)
// input(ABCDE) = output(1A1B1C1D1E)

let dataChar: string = String(prompt()); //ประกาศตัวแปรชื่อ... เพื่อรอรับข้อความจาก User
let output: string = ""; //ประกาศตัวแปรเป็นชนิดข้อความเอาไว้รอรับผลลัพธ์(ตัวเลขติดกับตัวอักษร)

let count: number = 1 //ประกาศตัวแปรเอาไว้นับเลข ต้องเริ่มที่1เสมอ

for (let i = 1; i < dataChar.length; i++) { //สร้างรูป for เพื่อวิ่งตรวจเช็คอักษรทีละตัว
    if (dataChar[i] === dataChar[i - 1]) {
        count++
    } else {
        output += `${count}${dataChar[i - 1]}`
        count = 1
    }
}

output += `${count}${dataChar[dataChar.length - 1]}`
console.log(output)