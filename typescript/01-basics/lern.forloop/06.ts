//input UUUDDUU  output 2

let inputStr: string = String(prompt(":"));
let changeCount: number = 0;

for (let i = 1; i < inputStr.length; i++) {
    if (inputStr[i] != inputStr[i - 1]) {
        changeCount++
    }
}

console.log(changeCount)