//17/7 ข้อ 2 (แบบไม่คืนค่า): "ระบบแจ้งเตือนภัยน้ำท่วม" (Void Function)

const waterLevels: number[] = [3.2, 4.5, 2.8, 5.1];
const dangerWaterLevel: number = 4.0;

function triggerFloodAlert(waterLevelList: number[], dangerThreshold: number): void {

    for (let i = 0; i < waterLevelList.length; i++) {
        const level = waterLevelList[i]
        if (level !== undefined && level >= dangerThreshold) {
            console.log(`Station ${i + 1}: Alert! Water leve is ${waterLevelList[i]}`);
        }
    }
}

triggerFloodAlert(waterLevels, dangerWaterLevel);