//17/7 📋 โจทย์: "ระบบแสดงลำดับคิวย้อนหลัง" (Reverse Queue Printer)

const names: string[] = ["Alice", "Bob", "Charlie", "David"];

function printQueueInReverse(customerList: string[]): void {
    for (let i = customerList.length - 1; i >= 0; i--) {
        console.log(`Queue ${i + 1}: ${customerList[i]}`)
    }
}

printQueueInReverse(names)