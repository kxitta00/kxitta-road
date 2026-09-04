let num1: number = Number(prompt(":"));
let num2: number = Number(prompt(":"));
let num3: number = Number(prompt(":"));

if (num1 < num2 && num2 < num3) {
    console.log("Increasing");
} else if (num1 > num2 && num2 > num3) {
    console.log("Decreasing")
} else {
    console.log("Neither")
}