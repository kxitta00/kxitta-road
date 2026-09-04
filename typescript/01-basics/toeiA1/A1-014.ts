// เขียนโปรแกรมรับค่าจำนวนเต็มสามค่าจากแป้นพิมพ์และแสดงผลค่าน้อยที่สุด
// ข้อมูลเข้า จำนวนเต็ม 3 ขึ้นบรรทัดเใหม่
// แสดงผลจำนวนเต็มที่มีค่าน้อยที่สุด

let inputNum1: number = (Number(prompt("Enter Number:")));
let inputNum2: number = (Number(prompt("Enter Number:")));
let inputNum3: number = (Number(prompt("Enter Number:")));

let min: number = Math.min(inputNum1, inputNum2, inputNum3);
console.log(min)