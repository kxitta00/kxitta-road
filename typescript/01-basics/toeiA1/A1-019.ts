
let num1: number = Number(prompt("num1:"));
let num2: number = Number(prompt("num2:"));
let num3: number = Number(prompt("num3:"));

if (num1 === num2 && num2 === num3) {
    console.log("all the same");
} else if (num1 !== num2 && num2 !== num3 && num1 !== num3) {
    console.log("all different");
} else {
    console.log("neither");
}
