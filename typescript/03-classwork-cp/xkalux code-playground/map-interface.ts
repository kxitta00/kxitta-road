import { getCharectorInfo, type Player } from "./charector"
import { Map } from "./map"

export enum SyntaxaiOption {
    GOTO_LOCALHOST_TOWN = "เข้าสู่ Localhost Town (พักผ่อน/โรงยิม/เซฟเกม-โหลดเกม)",
    GOTO_INFINITE_LOOP_FOREST = "ออกลุย Infinite Loop Forest (ต่อสู้เก็บเลเวล)",
    GOTO_NULL_FORTRESS = "บุก The Null Fortress (ท้าทายราชาปีศาจ Null Pointer!)"
}


export enum LocalHostTownOption {
    GOTO_HOTEL = "เข้าสู่ โรงแรม (ฟื้น HP/MP)",
    GOTO_GYM = "เข้าสู่ โรงยิม (อัพเกรด atk, matk, def, mdef, hp)",
    SAVE_LOAD_GAME = "save/load เกม (บันทึก/โหลดเกม)",
    GOTO_SYNTAXIA = "กลับไปยัง Sytaxia (กลับไปยังจุดศูนย์กลางของอาณาจักร)"
}


export enum InfiniteLoopForestOption {
    FIGHT_MONSTER = "ต่อสู้กับ Monster (เก็บเลเวล)",
    GOTO_SYNTAXIA = "กลับไปยัง Sytaxia (กลับไปยังจุดศูนย์กลางของอาณาจักร)"
}


export enum NullFortressOption {
    FIGHT_NULL_POINTER = "ต่อสู้กับ Null Pointer (ท้าทายราชาปีศาจ Null Pointer!)",
    GOTO_SYNTAXIA = "กลับไปยัง Sytaxia (กลับไปยังจุดศูนย์กลางของอาณาจักร)"
}


function convertMapOptionsToString(map: Map): string {
    const options = getMapOptions(map)
    let output = ''

    for (let i = 0; i < options.length; i++) {
        output += `${i + 1}. ${options[i]}\n`
    }

    return output
}


export function getMapOptions(map: Map): string[] {
    switch (map) {
        case Map.SYNTAXIA:
            return Object.values(SyntaxaiOption);
        case Map.LOCALHOST_TOWN:
            return Object.values(LocalHostTownOption);
        case Map.INFINITE_LOOP_FOREST:
            return Object.values(InfiniteLoopForestOption);
        case Map.NULL_FORTRESS:
            return Object.values(NullFortressOption);
    }
}

export function getKeyOptions(map: Map, index: number): string | undefined {
    switch (map) {
        case Map.SYNTAXIA:
            return Object.keys(SyntaxaiOption)[index];
        case Map.LOCALHOST_TOWN:
            return Object.keys(LocalHostTownOption)[index];
        case Map.INFINITE_LOOP_FOREST:
            return Object.keys(InfiniteLoopForestOption)[index];
        case Map.NULL_FORTRESS:
            return Object.keys(NullFortressOption)[index];
    }
}

export function printMapInterface(map: Map, player: Player): void {
    const playerInfo = `${getCharectorInfo(player)}`
    const menu = convertMapOptionsToString(map)
    const text = `[ ${map} ]\n${playerInfo}\n\n${menu}`;

    console.log(text);
}