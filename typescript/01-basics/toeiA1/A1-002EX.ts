let money: number = Number(prompt(""));

let ten: number = Math.floor(money / 10); // 28 หาร 10 = 2.8
let five: number = Math.floor((money - ten * 10) / 5); // 28 ลบ 2 คูณ 10 หาร 5 = 1.6
let two: number = Math.floor((money - ten * 10 - five * 5) / 2); // 28 ลบ 2 คูณ 10 ลบ 1 คูณ 5 หาร 2 =
let one: number = Math.floor((money - ten * 10) - five * 5 - two * 2);

console.log("เหรียญ 10 มีจำนวน: " + ten)
console.log("เหรียญ 5 มีจำนวน: " + five)
console.log("เหรียญ 2 มีจำนวน: " + two)
console.log("เหรียญ 1 มีจำนวน: " + one)