let inputYear: number = Number(prompt("Year: "));
let inputCC: number = Number(prompt("CC: "));

if (inputYear <= 0 || inputCC <= 0) {
    console.log("Error")
} else {

    if (inputYear <= 1990) {
        if (inputCC <= 1500) {
            console.log("1250");
        } else if (inputCC <= 2000) {
            console.log("1400");
        } else {
            console.log("2000");
        }
    } else if (inputYear >= 1991 && inputYear <= 1999) {
        if (inputCC <= 1500) {
            console.log("1100");
        } else if (inputCC <= 2000) {
            console.log("1300");
        } else {
            console.log("1700");
        }
    } else {
        if (inputCC <= 1500) {
            console.log("1000");
        } else if (inputCC <= 2000) {
            console.log("1200");
        } else {
            console.log("1500");
        }
    }
}