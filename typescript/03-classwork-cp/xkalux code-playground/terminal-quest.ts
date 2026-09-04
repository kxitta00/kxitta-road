import type { Player } from "./charector";
import { printMapInterface } from "./map-interface";
import { syntaxiaAction } from "./action-syntaxia";
import { getMapInput } from "./user-input";
import { Map } from "./map";
import { localHostTownAction } from "./action-localHostTown";

export function runTerminalQuest(player: Player): void {
    while (player.hp > 0) {
        console.clear();
        if (player.latestAction)
            console.log(`📝  Latest action: ${player.latestAction}\n`);

        const map = player.currentMap;
        printMapInterface(map, player);

        const userInput = getMapInput(map, player);

        switch (map) {
            case Map.SYNTAXIA:
                syntaxiaAction(userInput, player);
                break;
            case Map.LOCALHOST_TOWN:
                localHostTownAction(userInput, player);
                break;
            case Map.INFINITE_LOOP_FOREST:
                throw new Error(` not implemented yet: ${userInput} in ${map}`);
                break;
            case Map.NULL_FORTRESS:
                throw new Error(` not implemented yet: ${userInput} in ${map}`);
                break;
        }
    }
}