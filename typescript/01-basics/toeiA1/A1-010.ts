let inputAge: number = Number(prompt("Enter your Age: "));
let inputChar: string | null = prompt("Enter Your Char: ");

// เงื่อนไขแรกอายุ 0-18 เก็บ 20
// อายุ 20 เก็บ 50

let age = "";

if (inputAge >= 20) {
    age = "50";
} else if (inputAge <= 18) {
    age = "20";
}

// เงื่อนไขที่สองสถานะ S,s เก็บ 20 
// สถานะ a เก็บ 50

if (inputChar === "a") {
    age = "50";
} else if (inputChar === "s" || inputChar === "S") {
    age = "20";
}

console.log(age)
