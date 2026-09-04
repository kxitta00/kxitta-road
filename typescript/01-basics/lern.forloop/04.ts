//input A!BC!D!E output ACD

let inputString: string = String(prompt(":"));
let urgentTasks: string = "";

for (let i = 1; i < inputString.length; i++) {
    if (inputString[i] === '!') {
        urgentTasks += inputString[i - 1]
    }
}

console.log(urgentTasks)