import { type Player } from "./charector";
import { Map } from "./map";
import { getKeyOptions, getMapOptions } from "./map-interface";

export function getMapInput(map: Map, player: Player): string {
    const options: string[] = getMapOptions(map);

    const optionIndexs: string[] = []
    for (const index in options) {
        const indexNumber = Number(index) + 1
        optionIndexs.push(indexNumber.toString())
    }

    const input: string = prompt(`>> เลือกคำสั่ง (${optionIndexs.join(', ')}): `) as string;

    if (optionIndexs.includes(input) === false) {
        console.log(`⚠️  ตัวเลขที่คุณป้อนไม่ถูกต้อง!`);
        return getMapInput(map, player);
    }

    const inputIndex = Number(input) - 1;
    player.latestAction = `คุณเลือก: ${options[inputIndex]}`;
    const key = getKeyOptions(map, inputIndex) ?? '';
    return key;
}