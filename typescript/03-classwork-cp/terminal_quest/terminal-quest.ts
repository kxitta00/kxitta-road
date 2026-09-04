import type { Player } from "./charector"; //ไปเอา Typer Player จากไฟล์ charector.ts
import { printMapInterface } from "./map-interface"; //ไปเอา function printMapInterface จากไฟล์ map-interface
import { syntaxiaAction } from "./action-syntaxia"; //ไปเอา function syntaxiaAction จากไฟล์ action-syntaxia.ts
import { getMapInput } from "./user-input"; //ไปเอา function getMapInput จากไฟล์ user-input
import { Map } from "./map"; //ไปเอา enum Map จากไฟล์ map
import { localHostTownAction } from "./action-localHostTown"; //ไปเอา funciton localHostTownAction จาก ไฟล์ action-localHostTown.ts มา
import { infiniteLoopForestAction } from "./action-infiniteLoopForest";
import { nullFortressAction } from "./action-nullFortress";

export async function runTerminalQuest(player: Player): Promise<void> { //ฟังก์ชัน รับพารามีเตอร์ player มาจากไฟล์ main บรรทัดสุดท้ายและส่งออกหน้าจอ
    while (player.hp > 0) { //while loop ถ้าเลือดผู้เล่นยังมากกว่า 0
        console.clear(); //ล้างหน้าจอ
        if (player.latestAction) //ถ้ามีข้อความใน latestAction ให้ log ออกมา
            console.log(`📝  Latest action: ${player.latestAction}\n`); //น่าเอาไปถามอาจาร์ย if ไม่มีเครื่องหมายปีกกาแต่จริงๆรู้แล้ว

        const map = player.currentMap; //กำหนดให้ตัวแปร map คือ แมพของผู้เล่น
        printMapInterface(map, player); //ยัด map และ player เข้าไปในฟังก์ชัน printMapInterface จากไฟล์ map-interface

        const userInput = getMapInput(map, player);

        switch (map) {
            case Map.SYNTAXIA:
                syntaxiaAction(userInput, player);
                break;
            case Map.LOCALHOST_TOWN:
                await localHostTownAction(userInput, player);
                break;
            case Map.INFINITE_LOOP_FOREST:
                infiniteLoopForestAction(userInput, player);
                break;
            case Map.NULL_FORTRESS:
                nullFortressAction(userInput, player);
                break;
        }
    }
    console.clear();
    console.log("💀 GAME OVER! คุณพ่ายแพ้ในการผจญภัย...");
}

//3