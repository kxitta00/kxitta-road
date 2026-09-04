// 18/7             
const temps: number[] = [32, 28, 40, 25, 35]; //อุณหภูมิที่บันทึกไว้ได้
const nothing: number[] = [32]; //จำลองการไม่มีข้อมมูล

function calculateTemperatureRange(tempList: number[]): number { //หาช่วงส่วนต่างของอุณหภูมิที่วัดได้

    if (tempList.length === 0 || tempList.length === 1) { //เช้คว่าในอาเรย์ไม่มีค่าหรือมีค่าแค่1ตัว
        return 0;
    }
    let maxTemp = tempList[0]!; //เก็บอุณภูมิที่มากที่สุด
    let minTemp = tempList[0]!; //เก็บอุณภูมิที่น้อยที่สุด

    for (const checkMaxTemp of tempList) { //หาอุณภูมิที่มากที่สุด
        if (checkMaxTemp > maxTemp) {
            maxTemp = checkMaxTemp
        }
    }

    for (const checkMinTemp of tempList) { //หาอุณภูมิที่น้อยที่สุด
        if (checkMinTemp < minTemp) {
            minTemp = checkMinTemp
        }
    }

    const tempDiff = maxTemp - minTemp //หาส่วนต่างอุณภูมิ
    return tempDiff
}

const output = calculateTemperatureRange(temps)
console.log(output)