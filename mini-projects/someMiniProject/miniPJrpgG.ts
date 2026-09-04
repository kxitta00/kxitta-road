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
    states: [number, number]; //พลังโจทตีพลังป้องกัน
    skills: string[];
    element: Element; //ผูกกับ enum ข้างบน
}

//สร้างข้อมูลจำลองตัวละคร
const rpgGameChar: Character[] = [
    {
        id: 1005,
        name: "lnwza 007",
        states: [100, 50], //พลังโจมตี พลังป้องกัน 150
        skills: ["เงาอัสนี", "พายุดาบ"],
        element: Element.Fire
    },
    {
        id: 1006,
        name: "Kxitta 007",
        states: [35, 60], //พลังโจมตี พลังป้องกัน 95
        skills: ["ทลายปฐพี", "หมัดอัคคีผลาญ"],
        element: Element.Earth
    },
    {
        id: 1007,
        name: "Ohm lnmza",
        states: [35, 30], //พลังโจมตี พลังป้องกัน 65
        skills: ["คลื่นวารีทะลวงศึกล้ำ", "กระสุนสมุทรกลืนชีพ"],
        element: Element.Water
    },
    {
        id: 1008,
        name: "Sarathep 007",
        states: [24, 25], //พลังโจมตี พลังป้องกัน 49
        skills: ["ศรพายุตัดมิติ", "คมเขี้ยวสลาตันสังหาร"],
        element: Element.Wind
    }
];

// logic วิเคราะห์พลังและให้ฉายา
const searchName: string | null = prompt("กรอกชื่อตัวละครที่ต้องการดูสเตตัส: ");
if (searchName !== null) { //ระบบกันคนกรอกความว่างเปล่า

    console.log("===เริ่มต้นการค้นหาสเตตัสของ: " + searchName + "===");
    let isFound = false;

    //ใช้for loop คนหาทีละคน
    for (const rpgChar of rpgGameChar) {
        if (rpgChar.name.toLocaleLowerCase() === searchName.toLocaleLowerCase()) {
            isFound = true;
            // ดึงคะแนนมาบวกกัน
            const totalPower = rpgChar.states[0] + rpgChar.states[1];

            // คำณวนพลังและให้ฉายา ด้วย if else
            let statusChar: RarityStatus;
            if (totalPower >= 100) {
                statusChar = "Legendary";
            } else if (totalPower >= 50) {
                statusChar = "Rare";
            } else {
                statusChar = "Common";
            }

            // logic ใช้ SW. พิมข้อความสเตตัสทั้งหมด
            console.log("ID ตัวละคร: " + rpgChar.id);
            console.log("ชื่อตัวละคร: " + rpgChar.name);
            console.log("พลังโจมตี: " + rpgChar.states[0]);
            console.log("พลังป้องกัน: " + rpgChar.states[0]);
            console.log("พลังรวม: " + totalPower);

            switch (statusChar) {
                case "Legendary":
                    console.log("->คลาส: Legendary")
                    break;
                case "Rare":
                    console.log("->คลาส: Rare")
                    break;
                case "Common":
                    console.log("->คลาส: Common")
                    break;
            }

            //logic ใช้ Ternary Operator แสดงสกิล
            const showSkill = rpgChar.skills.length > 0 ? "Skill: " + rpgChar.skills.join(" | ") : "Skill: ไม่พบ";
            console.log(showSkill);
        }
    }

    //ปิดท้ายระบบ ถ้าลูปแล้วยังไม่เจอชื่อคนที่ค้นหาเลย
    if (!isFound) {
        console.log("ไม่พบข้อมูลตัวละคร " + searchName + " ในระบบ");
    }
} else {
    console.log("คุณได้ยกเลิกการค้นหา")
}
