
// รับค่าเดือน
let inputMonth: number = Number(prompt("Enter Month:"));
// รับค่าวัน
let inputDay: number = Number(prompt("Enter Day:"));
// ตัวแปรรอรับผลลัพธ์
let seasons: string | null = "";

if (inputMonth === 1 || inputMonth === 2 || inputMonth === 3) {
    seasons = "winter";
} else if (inputMonth === 4 || inputMonth === 5 || inputMonth === 6) {
    seasons = "spring";
} else if (inputMonth === 7 || inputMonth === 8 || inputMonth === 9) {
    seasons = "summer";
} else if (inputMonth === 10 || inputMonth === 11 || inputMonth === 12) {
    seasons = "fall";
}

if (inputMonth % 3 === 0 && inputDay >= 21) {
    if (seasons === "winter") {
        seasons = "spring";
    } else if (seasons === "spring") {
        seasons = "summer";
    } else if (seasons === "summer") {
        seasons = "fall";
    } else if (seasons === "fall") {
        seasons = "winter";
    }
}

console.log(`season:${seasons}`)