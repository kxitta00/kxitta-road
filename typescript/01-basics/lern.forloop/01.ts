// input WWWSSS output WS

let inputString: string = String(prompt("Enter Text:")) //รอรับตัวอักษรจาก user 
let output: string = inputString[0]!;

//สร้างfor loop
for (let i = 1; i < inputString.length; i++) {
    if (inputString[i] != inputString[i - 1]) {
        output += inputString[i];
    }
}

console.log(output)