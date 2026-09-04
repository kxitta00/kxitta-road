import { Map } from "./map";

export enum Action {
    EXPLORE = "explore",
    ATTACK = "attack",
    DEFEND = "defend"
}

export type Monster = {
    name: string;
    hp: number;
    atk: number;
    matk: number;
    def: number;
    mdef: number;
    exp: number;
}

export type Player = Monster & {
    maxHp: number;
    gold: number;
    action: Action;
    currentMap: Map;
    latestAction?: string;
}

export function createPlayer(name: string, maxHp: number = 100): Player {
    return {
        name: name,
        hp: maxHp,
        maxHp: maxHp,
        atk: 1,
        matk: 1,
        def: 1,
        mdef: 1,
        exp: 10,
        gold: 1500,
        action: Action.EXPLORE,
        currentMap: Map.SYNTAXIA
    };
}

export function getCharectorInfo(charector: Player): string {
    return `${charector.name} | HP: ${charector.hp}/${charector.maxHp} | ATK: ${charector.atk} | M.ATK: ${charector.matk} | DEF: ${charector.def} | M.DEF: ${charector.mdef} | EXP: ${charector.exp} | Gold: ${charector.gold}G`;
}   