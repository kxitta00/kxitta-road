let age: number = Number(prompt(""));
let status: string = prompt("")!;

if (age <= 18 || status === "s" || status === "S") {
    console.log("20");
} else {
    console.log("50");
}