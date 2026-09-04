//Double Word Detector HELLLOO

let inputWord: string = String(prompt(":"))
let countDoubleWord: number = 0;

for (let i = 1; i < inputWord.length; i++) {
    if (inputWord[i] === inputWord[i - 1]) {
        countDoubleWord++
    }
}

console.log(countDoubleWord)