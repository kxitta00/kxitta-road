// input XYZZZ output 1X1Y3Z

let inputStr: string = String(prompt(":"));
let output = "";

let count: number = 2
for (let i = 1; i < inputStr.length; i++) {
    if (inputStr[i] === inputStr[i - 1]) {
        count++
    } else {
        output += `${count}${inputStr[i - 1]}`
    }
}

output += `${count}${inputStr[inputStr.length - 1]}`
console.log(output)