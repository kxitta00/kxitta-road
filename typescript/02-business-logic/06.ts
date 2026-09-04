// โจทย์ตารางสูตรคูณ 13/7 Morning 

function multiplicationTable(): void {
    let inputNum1: number = Number(prompt(": ") ?? 0);
    let outputNumber = 0;
    if (isNaN(inputNum1) || inputNum1 < 0) {
        console.log("unknown")
    } else {
        for (let i = 1; i <= 12; i++) {
            outputNumber = (inputNum1 * i)
            if (outputNumber >= 50) {
                console.log(`${inputNum1} x ${i} = ${outputNumber} (เยอะ)`)
            } else {
                console.log(`${inputNum1} x ${i} = ${outputNumber}`)
            }
        }
    }
}
multiplicationTable()
