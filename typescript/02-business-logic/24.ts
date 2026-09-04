//20/7  โจทย์: "ระบบตรวจสอบอุณหภูมิห้องเซิร์ฟเวอร์" (Server Room Temperature Monitor)

//อุณหภูมิที่วัดได้ในแต่ละชั่วโมง
const tempS: number[] = [22, 25, 28, 19, 31, 24];
//จำลองการไม่มีข้อมูล
const noData: number[] = [];

//ฟังก์ชันวิเคราะห์อุณหภูมิของห้องเซิร์ฟเวอร์
function analyzeServerRoomTemperature(tempList: number[]): string {
    //กรณีรับข้อมูลมาไม่ถูกต้อง
    if (tempList.length === 0 || tempList === undefined) {
        return "No Data";
    }

    let maxTemp = tempList[0]!; //สำหรับเก็บอุณหภูมิสูงสุด
    let coutWarning = 0; //ไว้นับอุณหภูมิที่เกินเกณ
    for (const checkTemps of tempList) {
        if (checkTemps > maxTemp) {
            maxTemp = checkTemps
        }
        if (checkTemps >= 26) {
            coutWarning++
        }
    }
    return (`Max: ${maxTemp}, Warning: ${coutWarning}`)
}




let output = analyzeServerRoomTemperature(tempS);
let noDataOutput = analyzeServerRoomTemperature(noData);
console.log(`กรณีมีข้อมูลในอาเรย์: ${output}`);
console.log(`กรณีไม่มีข้อมูลในอาเรย์: ${noDataOutput}`)