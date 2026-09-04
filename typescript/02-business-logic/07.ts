// 14/7 morning

function findNumber(number: number): string {
    let output: number = 0;
    let numberList: number[] = []
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            output += i;
            numberList.push(i)
        }
    }
    let numJoin: string = numberList.join(" + ")
    return (`${numJoin} = ${output}`)
}

let inputNumber: number = Number(prompt(": ") ?? 0);
let outputShow = findNumber(inputNumber)
console.log(outputShow)