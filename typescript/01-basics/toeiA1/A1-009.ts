let inputMid: number = Number(prompt("Enter Your MidScore:"));
let inputFinal: number = Number(prompt("Enter Your FinalScore"));

let sumScore = inputMid + inputFinal

if (inputMid + inputFinal >= 50) {
    console.log(sumScore);
    console.log("pass");
} else {
    console.log(sumScore);
    console.log("fail");
}
