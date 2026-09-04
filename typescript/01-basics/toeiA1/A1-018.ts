let num: number = Number(prompt(":"));
let roman: (string | null)[] = [" ", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]

if (num < 0) {
    console.log("Error : Please input positive number");
} else if (num === 0 || num > 9) {
    console.log("Error: Out of range")
} else {
    console.log(roman[num]);
}
