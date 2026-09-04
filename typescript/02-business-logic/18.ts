//17/7 "ระบบประกาศรางวัลย้อนหลัง" (Reverse Ranking Announcement)

const rankNames: string[] = ["Alice", "Bob", "Charlie"];

function reverseRankName(names: string[]): string[] {
    const reverseNames: string[] = []
    for (let i = names.length - 1; i >= 0; i--) {
        reverseNames.push(`Rank ${i + 1}: ${names[i]}`)
    }
    return reverseNames
}

let output = reverseRankName(rankNames)
console.log(output)