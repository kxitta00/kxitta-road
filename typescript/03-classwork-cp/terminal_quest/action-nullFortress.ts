import { type Player } from "./charector";
import { Map } from "./map"
import { NullFortressOption } from "./map-interface";

export function nullFortressAction(key: string, player: Player): void {
  const action = NullFortressOption[key as keyof typeof NullFortressOption];
  switch (action) {
    case NullFortressOption.FIGHT_NULL_POINTER:
      if (player.atk >= 5) {
        player.latestAction = "👑🎉 มหาศึกชี้ชะตา! คุณปราบราชาปีศาจ Null Pointer สำเร็จ! คุณกอบกู้อาณาจักร Syntaxia ได้แล้ว! (VICTORY!)";
      } else {
        player.hp -= 40;
        player.latestAction = "💀 Null Pointer แข็งแกร่งเกินไป! คุณโดนโจมตีอย่างหนัก เสีย HP 40! (ควรไปฟาร์ม EXP ในป่าและอัป ATK ที่ยิมก่อน!)";
      }
      break
    case NullFortressOption.GOTO_SYNTAXIA:
      player.currentMap = Map.SYNTAXIA;
  }
}