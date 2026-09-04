import { openInEditor } from "bun";

let num: number = Number(prompt(":"));
let Op: string = String(prompt(":"));

let reV: number = Number(String(num).split("").reverse().join(""));
let output: number = 0

if (Op === "+") {
    output = num + reV
} else if (Op === "*") {
    output = num * reV
} else if (Op === "+") {
    output = num + reV
}

console.log(`${num} ${Op} ${reV} = ${output}`);