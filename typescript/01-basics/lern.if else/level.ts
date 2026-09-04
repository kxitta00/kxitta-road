//ฟังก์ชันรับแต้ม XP เข้ามา แล้วบอกว่าตอนนี้ "เลเวลอะไร"
function checkLevel(xp: number): number {
    if (xp >= 300) {
        return 4; //แต้ม 300 ได้เวล 4
    }
    else if (xp >= 200) {
        return 3; //แต้มถึง200 ได้เวล3
    }
    else if (xp >= 100) {
        return 2; //แต้มถึง100 ได้เวล2
    }
    else {
        return 1; //นอกเหนือจากนั้น (แต้ม0-99) เริ่มต้นที่เลเวล 
    }
}

// ส่วนรับค่าและแสดงผล

const inputXP = prompt("กรุณากนอกแต้ม XP ปัจจุบันของคุณ: ");
const myXP = Number(inputXP);

const myLevel = checkLevel(myXP)

console.log(`------------------------------`);
console.log(`คุณมีแต้ม XP ทั้งหมด: ${myXP} แต้ม`);
console.log(`เลเวลชองคุณตอนนี้คือ: Lv.${myLevel}`);