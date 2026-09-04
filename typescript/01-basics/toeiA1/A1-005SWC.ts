// รับค่าเดือน
let inputMonth: number = Number(prompt("Enter Month:"));
// รับค่าวัน
let inputDay: number = Number(prompt("Enter Day:"));
// ตัวแปรรอเก็บผลลัพธ์
let season: string | null = "";

switch (inputMonth) {
    // เดือน 1, 2, ,3 ให้เป็น winter
    case 1:
    case 2:
    case 3:
        season = "winter";
        break;

    //เดือน4, 5, 6, ให้เป็น spring
    case 4:
    case 5:
    case 6:
        season = "spring";
        break;

    //เดือน 7, 8, 9, ให้เป็น summer
    case 7:
    case 8:
    case 9:
        season = "summer";
        break;

    //เดือน 10, 11, 12 ให้เป็น fall
    case 10:
    case 11:
    case 12:
        season = "fall";
        break;

    default:
        season = "unknown"; //ป้องกันกรณีป้อนเดือนที่ไม่มีอยู่จริง
}

// ตรวจสอบเงื่อนไขพิเศษ เดือนที่หาร 3 ลงตัวและตั้งแต่วันที่ 21 เป็นต้นไป
if (inputMonth % 3 === 0 && inputDay >= 21) {
    if (season === "winter") {
        season = "spring";
    } else if (season === "sping") {
        season = "summer";
    } else if (season === "summer") {
        season = "fall";
    } else if (season === "fall") {
        season = "winter";
    }
}

console.log(`season:${season}`)
