// 14/7  เครื่องแปลงสถานะอุณภูมิห้องแล็บ
// มากกว่า40องศา Danger
// ตำกว่า15องศา Cold
// ระหว่าง15 - 40 องศา normal

let temperatureLab: number[] = [42, 25, 10,]

//รับtemp จากคียร์บอร์ด
let inputLabTemp: number = Number(prompt("Enter LabTemp: "));
temperatureLab.push(inputLabTemp)

function getTemperature(temp: number[]): string[] {
    let tempStatus: string[] = []

    for (const checkTemp of temp) {
        if (isNaN(checkTemp)) {
            tempStatus.push("unknown");
        } else if (checkTemp > 40) {
            tempStatus.push("Danger");
        } else if (checkTemp < 15) {
            tempStatus.push("Cold");
        } else {
            tempStatus.push("Normal")
        }
    }
    return tempStatus
}

let outputShow = getTemperature(temperatureLab)
console.log(`Lab Status: ${outputShow}`)