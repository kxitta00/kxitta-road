import { type Player } from "./charector";
import { Map } from "./map";
import { InfiniteLoopForestOption } from "./map-interface";

export function infiniteLoopForestAction(key: string, player: Player): void {
  const action = InfiniteLoopForestOption[key as keyof typeof InfiniteLoopForestOption];
  switch (action) {
    case InfiniteLoopForestOption.FIGHT_MONSTER:
      player.exp += 15;
      player.gold += 80;
      player.hp -= 10;
      player.latestAction = "⚔️ คุณได้ต่อสู้กับ Monster ในป่า! ได้รับ +15 EXP, +80G (เสีย HP 10)";
      break;
    case InfiniteLoopForestOption.GOTO_SYNTAXIA:
      player.currentMap = Map.SYNTAXIA;
      break;
  }
}