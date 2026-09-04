import { type Player } from "./charector";
import { Map } from "./map";
import { LocalHostTownOption } from "./map-interface";


export function localHostTownAction(key: string, player: Player): void {
    const action = LocalHostTownOption[key as keyof typeof LocalHostTownOption];
    switch (action) {
        case LocalHostTownOption.GOTO_GYM:
            throw new Error(` not implemented yet: ${key} in LocalHostTown`);
            break;
        case LocalHostTownOption.GOTO_HOTEL:
            throw new Error(` not implemented yet: ${key} in LocalHostTown`);
            break;
        case LocalHostTownOption.GOTO_SYNTAXIA:
            player.currentMap = Map.SYNTAXIA;
            break;
        default:
            throw new Error(` not implemented yet: ${key} in LocalHostTown`);
    }
}
