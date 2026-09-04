// input LLPPLPP output 2

let input: string = String(prompt(":"));
let transitionCount: number = 0;

for (let i = 1; i < input.length; i++) {
    if (input[i - 1] === 'L' && input[i] === 'P') { // 
        transitionCount++
    }
}

console.log(transitionCount)