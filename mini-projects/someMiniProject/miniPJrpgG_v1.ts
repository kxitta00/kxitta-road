//ระบบคลังข้อมูลคาแรคเตอร์ในเกม RPG

//enum หมวดหมู่ธาตุ
enum Element { Fire, Water, Earth, Wind }

//Union type 
type CharacterID = string | number;

//Literal type ผลประเมิน
type RarityStatus = 'Legendary' | 'Rare' | 'Common';

//Object type โครงสร้างตัวละคร
interface Character {
    id: CharacterID;
    name: string;
    stats: [number, number]; //พลังโจทตีพลังป้องกัน
    skills: string[];
    element: Element; //ผูกกับ enum ข้างบน
}


//สร้างข้อมูลจำลองตัวละคร
const rpgGameChar: Character[] = [
    {
        id: 1005,
        name: "lnwza 007",
        stats: [100, 50], //พลังโจมตี พลังป้องกัน 150
        skills: ["เงาอัสนี", "พายุดาบ"],
        element: Element.Fire
    },
    {
        id: 1006,
        name: "Kxitta 007",
        stats: [35, 60], //พลังโจมตี พลังป้องกัน 95
        skills: ["ทลายปฐพี", "หมัดอัคคีผลาญ"],
        element: Element.Earth
    },
    {
        id: 1007,
        name: "Ohm lnmza",
        stats: [35, 30], //พลังโจมตี พลังป้องกัน 65
        skills: ["คลื่นวารีทะลวงศึกล้ำ", "กระสุนสมุทรกลืนชีพ"],
        element: Element.Water
    },
    {
        id: 1008,
        name: "Sarathep 007",
        stats: [24, 25], //พลังโจมตี พลังป้องกัน 49
        skills: ["ศรพายุตัดมิติ", "คมเขี้ยวสลาตันสังหาร"],
        element: Element.Wind
    }
];

let maxPower = 0;
let mvpName = "";

// logic วิเคราะห์พลังและให้ฉายา
console.log("==================================================");
console.log("   รายงานสรุปผลตัวละครทุกตัวในเกมนี้   ");
console.log("==================================================");

for (const charRpg of rpgGameChar) {
    const totalPower = charRpg.stats[0] + charRpg.stats[1];

    if (totalPower > maxPower) {
        maxPower = totalPower;
        mvpName = charRpg.name;
    }

    let statusRarity: RarityStatus;
    if (totalPower >= 100) {
        statusRarity = 'Legendary';
    } else if (totalPower >= 75) {
        statusRarity = 'Rare';
    } else {
        statusRarity = "Common";
    }

    console.log("ID ตัวละคร: " + charRpg.id);
    console.log("ชื่อตัวละคร: " + charRpg.name);

    switch (charRpg.element) {
        case Element.Fire:
            console.log("ธาตุ: ไฟ")
            break;
        case Element.Water:
            console.log("ธาตุ: น้ำ")
            break;
        case Element.Earth:
            console.log("ธาตุ: ดิน")
            break
        case Element.Wind:
            console.log("ธาตุ: ลม")
            break;
    }

    console.log("พลังโจมตี " + charRpg.stats[0]);
    console.log("พลังป้องกัน " + charRpg.stats[1]);
    console.log("พลังรวม: " + totalPower);

    switch (statusRarity) {
        case 'Legendary':
            console.log("->คลาส : Legendary")
            break;
        case 'Rare':
            console.log("->คลาส : Rare")
            break;
        case 'Common':
            console.log("->คลาส : Common")
            break;
    }

    const showSkill = charRpg.skills.length > 0 ? "Skill: " + charRpg.skills.join(", ") : "Skill: ไม่มี";
    console.log(showSkill)
    console.log("===================================================");
}

console.log("ตัวละครที่โหดสุดในทีม MVP: " + mvpName);
console.log("ค่าพลังรวมสูงสุด: " + maxPower + " แต้ม");
console.log("===================================================");