// เขียนโปรแกรมรับชื่อ นามสกุล และอายุผู้ใช้
//input Somchai output  Soe5
//      Jaidee
//      45
//      
//      Jhon             j18h
//      Smith
//      18

let firstName: string = String(prompt("F:"));
let lastName: string = String(prompt("L:"));
let age: number = Number(prompt("Age:"));
let ageStr: string = String(age)

let output: string = "";

if (firstName.length > 5 && lastName.length > 5) {
    output = firstName.substring(0, 2) + lastName[lastName.length - 1] + ageStr[ageStr.length - 1]
} else {
    output = firstName[0]! + ageStr + lastName[lastName.length - 1]
}

console.log(output)