
let inputDay: number = Number(prompt("Enter Day: "));
let inputMont: number = Number(prompt("Enter Mont: "));

// สร้างไว้เก็บผลลัพท์
let season: string = "";

if (inputMont === 1 || inputMont === 2 || inputMont === 3) {
    season = "winter";
} else if (inputMont === 4 || inputMont === 5 || inputMont === 6) {
    season = "spring";
} else if (inputMont === 7 || inputMont === 8 || inputMont === 9) {
    season = "summer";
} else if (inputMont === 10 || inputMont == 11 || inputMont == 12) {
    season = "fall";
}

if (inputMont % 3 === 0 && inputDay >= 21) {

    if (season === "winter") {
        season = "spring";
    } else if (season === "spring") {
        season = "summer";
    } else if (season === "summer") {
        season = "fall"
    } else if (season === "fall") {
        season = "winter";
    }
}

console.log(`season: ${season}`)
