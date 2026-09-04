let test: number = Number(prompt("Enter your Test Score: "))
let mid: number = Number(prompt("Enter your Mid Score: "))
let final: number = Number(prompt("Enter your Final Score: "))

let maxTest: number = 10
let maxMid: number = 40
let maxFinal: number = 50

if (test >= maxTest / 2 && mid >= maxMid / 2 && final >= maxFinal / 2) {
    console.log("pass");
} else {
    console.log("fail");
}