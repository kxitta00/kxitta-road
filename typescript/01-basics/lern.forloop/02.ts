//input WWSSSWW output 3

let inputString: string = String(prompt(""));
let groupCount: number = 1;


for (let i = 1; i < inputString.length; i++) {
    if (inputString[i] != inputString[i - 1]) {
        groupCount++
    }
}

console.log(groupCount)