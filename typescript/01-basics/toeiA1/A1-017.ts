
//คน1
let y1: number = Number(prompt(":"));
let m1: number = Number(prompt(":"));
let d1: number = Number(prompt(":"))

//คน2
let y2: number = Number(prompt(":"));
let m2: number = Number(prompt(":"));
let d2: number = Number(prompt(":"))

//นำมาประกาศตัวแปรใหม่ โดยใช้ new date (Mต้อง - 1เพราะมกราเริ่มที่0)
let date1 = new Date(d1, m1 - 1, y1);
let date2 = new Date(d2, m1 - 1, y2);

if (date1 < date2) {
    console.log("2");
} else if (date1 > date2) {
    console.log("1");
} else {
    console.log("0");
}
// new date คือการแปลงวันเดือนปีเป็นเลข มิลลิวินาที เกิดก่อน ค่าเลขน้อยกว่า เกิดหลังค่าเลขเยอะกว่า