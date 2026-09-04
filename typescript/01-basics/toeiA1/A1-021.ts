let inputYear: number = Number(prompt(": "));

if (inputYear <= 1582) {
    if (inputYear % 4 === 0) {
        console.log("yes")
    } else {
        console.log("no")
    }
} else {
    if (inputYear % 400 === 0) {
        console.log("yes");
    } else if (inputYear % 100 === 0) {
        console.log("no");
    } else if (inputYear % 4 === 0) {
        console.log("yes");
    } else {
        console.log("no")
    }
}