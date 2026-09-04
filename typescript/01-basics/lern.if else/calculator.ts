console.log("=== โปรแกรมเครื่องคิดเลข (รันบน Bun");

const input1 = prompt("กรุณากรอกตัวเลขที่ 1: ");
const operator = prompt("กรุณากรอกเครื่องหมาย (+,-,*,/) : ");
const input2 = prompt("กรุณากรอกตัวเลขที่ 2: ")

const number1: number = Number(input1)
const number2: number = Number(input2)

let result: number | string = 0;

if (operator === "+") {
    result = number1 + number2;
}
else if (operator === "-") {
    result = number1 - number2;
}
else if (operator === "*") {
    result = number1 * number2
}
else if (operator === "/") {
    if (number2 === 0) {
        result = "ข้อผิดพลาด: ไม่สามารถหารด้วยเลข 0 ได้!";
    } else {
        result = number1 / number2
    }
}
else {
    result = "ข้อผิดพลาด: เครื่องหมาไม่ถูกต้อง"
}

console.log("\n---------------------------");
console.log(`ผลลัพธ์: ${number1} ${operator} ${number2} = ${result}`);
console.log("---------------------------");