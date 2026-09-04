let test: number = Number(prompt("กรุณากรอกคะแนนแบบฝึกหัด:")); //แบบฝึกหัดเต็ม10
let mid: number = Number(prompt("กรุณากรอกคะแนนกลางภาค:")); //กลางภาค40
let final: number = Number(prompt("กรุณากรอกคะแนนปลายยภาค:")); //ปลายภาค50

let maxTest: number = 10
let maxMid: number = 40
let maxFinal: number = 50

if (test >= maxTest / 2 && mid >= maxMid / 2 && final >= maxFinal / 2) {
    console.log("pass")
} else {
    console.log("fail")
}