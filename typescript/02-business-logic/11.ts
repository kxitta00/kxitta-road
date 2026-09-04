// 15/7 หาผลคูณของเฉพาะเลขคี่ตั้งแต่ 1 ถึง N

let inputNum: number = Number(prompt(": ") ?? 0);

function multiplyOdds(num: number): string {
    let output = 1;
    let nums: number[] = [];
    if (isNaN(num) || num <= 0) {
        return "ข้อมูลไม่ถูกต้อง!!";
    }
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            output *= i
            nums.push(i)
        }
    }
    let numPush = nums.join(" x ")
    return `${numPush} = ${output}`
}

let outputShow = multiplyOdds(inputNum)
console.log(outputShow)