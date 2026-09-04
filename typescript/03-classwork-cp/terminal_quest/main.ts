import { createPlayer } from "./charector"; //ไปเอาฟังก์ชัน createPlayer จากไฟล์ charector.ts 
import { Map } from "./map"; //ไปเอาEnum Map จากไฟล์ map.ts 
import { runTerminalQuest } from "./terminal-quest"; //ไปเอาฟังก์ชัน runTerminalQuest จากไฟล์ terminal-quest.ts 
import { type Player } from "./charector";

console.log("Welcome to Terminal Quest!"); //แสดงออกหน้าจอต้อนรับ

let player: Player;

// 💾 เช็คว่าในเครื่องมีไฟล์ save.json อยู่ไหม
const saveFile = Bun.file("save.json"); //ไปหาว่ามีไฟล์ save.json ใน hraddisk ไหม
const hasSave = await saveFile.exists(); //รอ hraddisk หาไฟล์ แล้วถามว่าเจอไหม

if (hasSave) {
  console.log("1. เริ่มเกมใหม่ (New Game)");
  console.log("2. เล่นต่อจากเซฟเดิม (Load Game)");
  const choice = prompt(">> เลือกคำสั่ง (1, 2): ");
  if (choice === "2") {
    player = await saveFile.json()
    player.latestAction = "📂 โหลดข้อมูลเซฟเกมสำเร็จ!"
  } else {
    const playerName = prompt("Enter your character's name: ") as string;
    player = createPlayer(playerName, 100);
  }

} else {
  const playerName = prompt("Enter your character's name: ") as string;
  player = createPlayer(playerName, 100);
}




runTerminalQuest(player); //นำผลลัพธ์จาก function createPlayer ไปยัดใส่ function runTerminalQuest ต่อ // 2 -> 3

//1