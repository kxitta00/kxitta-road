//1/8 ข้อที่ 1 (หาค่าน้อยที่สุด Top 3 - MIN): "ระบบคัดเลือก 3 นักเล่นเกมที่ใช้เวลาแข่งน้อยที่สุด" (Game Speedrun Top 3)

interface Player {
    name: string;
    clearTimeSeconds: number; // เวลาที่ใช้เคลียร์ด่าน (วินาที)
}

function findTop3Speedrun(player: Player[]): string {
    if (player.length < 3) {
        return "Not Enough Player";
    }


    let playerName1 = "";
    let playerTime1 = 9999;

    let playerName2 = "";
    let playerTime2 = 9999;

    let playerName3 = "";
    let playerTime3 = 9999;

    for (const checkPlayer of player) {
        if (checkPlayer.clearTimeSeconds < playerTime1) {
            playerTime3 = playerTime2;
            playerName3 = playerName2;
            playerTime2 = playerTime1;
            playerName2 = playerName1;
            playerTime1 = checkPlayer.clearTimeSeconds;
            playerName1 = checkPlayer.name;
        } else if (playerTime2 > checkPlayer.clearTimeSeconds) {
            playerName3 = playerName2;
            playerTime3 = playerTime2;
            playerTime2 = checkPlayer.clearTimeSeconds;
            playerName2 = checkPlayer.name;
        } else if (playerTime3 > checkPlayer.clearTimeSeconds) {
            playerName3 = checkPlayer.name;
            playerTime3 = checkPlayer.clearTimeSeconds;
        }
    }
    return (`1st: ${playerName1} (${playerTime1}), 2nd: ${playerName2} (${playerTime2}), 3rd: ${playerName3} (${playerTime3})`)
}


const playersList: Player[] = [
    { name: "GamerA", clearTimeSeconds: 45.5 }, // 3rd
    { name: "GamerB", clearTimeSeconds: 30.2 }, // 1st
    { name: "GamerC", clearTimeSeconds: 50.0 }, // ไม่ติด Top 3
    { name: "GamerD", clearTimeSeconds: 38.0 }  // 2nd
];
console.log(findTop3Speedrun(playersList));
// Output: 1st: GamerB (30.2s), 2nd: GamerD (38s), 3rd: GamerA (45.5s)
