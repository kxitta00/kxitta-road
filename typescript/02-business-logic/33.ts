// โจทย์ประจำวันที่ 29/7: "ระบบตรวจสอบและสรุปคลังสินค้า" (Smart Inventory Auditor)

//interface ระบุว่าสินค้า 1 ชิ้นมีอะไรบ้าง
interface InventoryItem {
    itemName: string //ชื่อสืนค้า
    category: string //หมวดหมู่
    stock: number //จำนวนคงเหลือคงคลัง
    unitPrice: number // ราคาต่อหน่วย
}

// Test Case 1: คลังสินค้าปกติ มีสินค้าต้องเติมสต็อก
const inventoryList: InventoryItem[] = [
    { itemName: "Laptop", category: "Electronics", stock: 10, unitPrice: 25000 }, // มูลค่า 250,000 (สูงที่สุด)
    { itemName: "Mouse", category: "Electronics", stock: 3, unitPrice: 500 },     // stock < 5 (Low stock)
    { itemName: "Desk", category: "Furniture", stock: 2, unitPrice: 3500 }        // stock < 5 (Low stock)
];

function auditInventory(items: InventoryItem[]): string {
    //ดักข้อมูลผิด
    if (items.length === 0) {
        return "No Inventory Data";
    }

    let totalStockValue: number = 0; //หาราคารวมทั้ง stock
    let lowstockCount: number = 0; //นับจำนวนสินค้าขาดสต๊อกที่มีน้อยกว่า 5
    let mostValuableItem = ""; //หาสินค้าที่มีมูลค่ารวมสูงสุดในสต็อก
    let findMostPrice = 0; // ใช้หาสินค้าที่แพงที่สุด
    let staus: string = ""; //เก็บstatus

    for (const checkProduct of items) {
        //หามูลค่ารวม
        totalStockValue += checkProduct.stock * checkProduct.unitPrice

        //นับชิ้นสินค้าที่ใกล้หมดหรือขาดสต๊อก
        if (checkProduct.stock < 5) {
            lowstockCount++
        }

        //หาสินค้าที่แพงที่สุด
        if (checkProduct.stock * checkProduct.unitPrice > findMostPrice) {
            findMostPrice = checkProduct.stock * checkProduct.unitPrice
            mostValuableItem = checkProduct.itemName
        }
    }
    //End loop

    //หาสเตตัสให้คลังสินค้า
    if (lowstockCount > 0) {
        staus = "Restock Required";
    } else {
        staus = "Stock Healthy";
    }

    return (`Total Value: ${totalStockValue}, Low Stock Items: ${lowstockCount}, Most Valuable: ${mostValuableItem}, Status: ${staus}`)
}

console.log(auditInventory(inventoryList));