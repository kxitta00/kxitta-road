
let money: number = Number(prompt("Enter your money:"));

let ten: number = Math.floor(money / 10);
let five: number = Math.floor((money - ten * 10) / 5);
let two: number = Math.floor((money - ten * 10 - five * 5) / 2);
let one: Number = Math.floor((money - ten * 10) - five * 5 - two * 2);

console.log(`เหรียญ 10 มีจำนวน: ${ten}`)
console.log(`เหรียญ 5 มีจำนวน: ${five}`)
console.log(`เหรียญ 2 มีจำนวน: ${two}`)
console.log(`เหรียญ 1 มีจำนวน: ${one}`)



