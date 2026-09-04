//input WWSSLL output WW,SS,LL

let inputString: string = String(prompt(":"));
let output = inputString[0]

for (let i = 1; i < inputString.length; i++) {
    if (inputString[i] === inputString[i - 1]) {
        output += `${inputString[i - 1]}`
    } else {
        output += "," + `${inputString[i]}`
    }
}

console.log(output)