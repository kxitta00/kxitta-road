import type { Player } from "./charector";
import { SyntaxaiOption } from "./map-interface";
import { Map } from "./map";

export function syntaxiaAction(key: string, player: Player): void {
    const action = SyntaxaiOption[key as keyof typeof SyntaxaiOption];
    switch (action) {
        case SyntaxaiOption.GOTO_LOCALHOST_TOWN:
            player.currentMap = Map.LOCALHOST_TOWN;
            break;
        case SyntaxaiOption.GOTO_INFINITE_LOOP_FOREST:
            player.latestAction = `คุณได้เข้าสู่ Infinite Loop Forest!`;
            player.currentMap = Map.INFINITE_LOOP_FOREST;
            break;
        case SyntaxaiOption.GOTO_NULL_FORTRESS:
            player.latestAction = `คุณได้เข้าสู่ Null Fortress!`;
            player.currentMap = Map.NULL_FORTRESS;
            break;
        default:
            throw new Error(` not implemented yet: ${key} in Syntaxia`);
    }
}

