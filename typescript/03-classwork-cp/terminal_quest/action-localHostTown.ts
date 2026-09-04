import { type Player } from "./charector";
import { Map } from "./map";
import { LocalHostTownOption } from "./map-interface";


export async function localHostTownAction(key: string, player: Player): Promise<void> {
    const action = LocalHostTownOption[key as keyof typeof LocalHostTownOption];
    switch (action) {
        case LocalHostTownOption.GOTO_GYM:
            if (player.gold >= 200 && player.exp >= 5) {
                player.gold -= 200;
                player.exp -= 5;
                //
                player.atk += 1;
                player.matk += 1;
                player.def += 1;
                player.mdef += 1;
                player.maxHp += 10;
                //
                player.latestAction = "คุณได้ฝึกซ้อมที่โรงยิม! ATK+1, M.ATK+1, DEF+1, M.DEF+1, MaxHP+10 (จ่าย 200G, 5 EXP)";
            } else {
                player.latestAction = "Gold หรือ EXP ของคุณไม่พอสำหรับการฝึกซ้อม! (ต้องการ 200G, 5 EXP)";
            }
            break;
        case LocalHostTownOption.GOTO_HOTEL:
            player.hp = player.maxHp; //ฮีลเลือดเต็ม
            player.gold -= 100; //หักเงินค่าที่พัก 50G
            player.latestAction = "คุณได้พักผ่อนที่โรงแรมจน HP ฟื้นฟูเต็มแล้ว! (จ่าย 100G)"
            break;
        case LocalHostTownOption.GOTO_SYNTAXIA:
            player.currentMap = Map.SYNTAXIA;
            break;
        case LocalHostTownOption.SAVE_LOAD_GAME:
            console.clear()
            console.log("\n--- ระบบจัดการเซฟเกม ---");
            console.log("1. เซฟเกม (Save Game)");
            console.log("2. เล่นต่อจากเซฟเดิม (Load Game)");
            console.log("3. กลับไปยังหน้า Localhost Town (Back)")
            const choice = prompt(">> เลือกคำสั่ง (1, 2, 3): ");

            const saveFile = Bun.file("save.json");
            const hasSave = await saveFile.exists();

            if (choice === "1") {
                Bun.write("save.json", JSON.stringify(player, null, 2));
                player.latestAction = "💾 บันทึกข้อมูลตัวละครลงไฟล์ save.json สำเร็จแล้ว!";
            } else if (choice === "2") {
                if (hasSave) {
                    const savedData = await saveFile.json();
                    Object.assign(player, savedData); // 👈 เอาข้อมูลเซฟเดิมมาทับตัวละครปัจจุบันทันที!
                    player.latestAction = "📂 โหลดข้อมูลเซฟล่าสุดสำเร็จแล้ว!";
                } else {
                    player.latestAction = "⚠️ ไม่พบไฟล์เซฟในเครื่อง!";
                }
            } else {
                player.latestAction = "คุณยกเลิกและกลับมาที่ Localhost Town"
                player.currentMap = Map.LOCALHOST_TOWN;
            }
            break;
        default:
            throw new Error(` not implemented yet: ${key} in LocalHostTown`);
    }
}
