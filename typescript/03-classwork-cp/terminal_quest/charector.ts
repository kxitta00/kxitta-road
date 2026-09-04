import { Map } from "./map"; //ไปเอา enum Map จากไฟล์ map.ts 

export enum Action { //ส่งออก enum Action จากไฟล์นี้
    EXPLORE = "explore", //กำหนด property EXPLORE ให้ = "explore"
    ATTACK = "attack", //กำหนด property ATTACK ให้ = "attack"
    DEFEND = "defend" //กำหนด property DEFEND ให้ = "defend"
}

export type Monster = { //ส่งออก Type จากไฟล์นี้
    name: string;
    hp: number;
    atk: number;
    matk: number;
    def: number;
    mdef: number;
    exp: number;
}

export type Player = Monster & { //นำ Type Monster มาใช้ร่วมกับ Type Player และส่งออก Typer Player จากไฟล์นี้
    maxHp: number;
    gold: number;
    action: Action;
    currentMap: Map; //กำหนด type ให้ใช้ enum Map
    latestAction?: string;
}

export function createPlayer(name: string, maxHp: number = 100): Player { //ส่งออก function createPlayer จากไฟล์นี้
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
        action: Action.EXPLORE, //ให้ใช้ enum action และกำหนดเริ่มต้นให้เป็นโหมด EXPLORE
        currentMap: Map.SYNTAXIA //ให้ใช้ enum Map และกำหนดเริ่มต้นให้เป็นโหมด SYNTAXIA
    };
}

export function getCharectorInfo(charector: Player): string {  //ส่งออก function getCharectorInfo จากไฟล์นี้
    return `${charector.name} | HP: ${charector.hp}/${charector.maxHp} | ATK: ${charector.atk} | M.ATK: ${charector.matk} | DEF: ${charector.def} | M.DEF: ${charector.mdef} | EXP: ${charector.exp} | Gold: ${charector.gold}G`;
}

//2