//enum หมวดหมู่สินค้า
enum Category { CPU, Laptop, GPU }

//Union type รหัสสินค้า
type ProductID = string | number;

//literal Type ภาพรวมสถานะกำไร
type ProfitStatus = 'HighlyProfitable' | 'Standrad' | 'Loss' | '';

interface Product {
    id: ProductID;
    name: string;
    stats: [number, number, number]; //ราคาต้นทุน, ราคาขาย, จำนวนที่ขายได้
    tags: ProfitStatus;
    category: Category;
}


//คลังสินค้าจำลอง
const warehouse: Product[] = [
    {
        id: "LEG101",
        name: "Lenovo legion 5i",
        stats: [10000, 20000, 100], //ราคาต้นทุน, ราคาขาย, จำนวนที่ขายได้
        tags: "",
        category: Category.Laptop
    },
    {
        id: "CPU102",
        name: "intel Core i5 12400F",
        stats: [5000, 10000, 75], //ราคาต้นทุน, ราคาขาย, จำนวนที่ขายได้
        tags: "",
        category: Category.CPU
    },
    {
        id: "GPU103",
        name: "RTX3050 8GB",
        stats: [6000, 12000, 25], //ราคาต้นทุน, ราคาขาย, จำนวนที่ขายได้
        tags: "",
        category: Category.GPU
    },
];

// ระบบเพิ่มสินค้าใหม่ผ่านการ Prompt
console.log("====== ระบบเพิ่มสินค้า ======")

const newId = prompt("กรอกรหัสสินค้าใหม่: ");
const newName = prompt("กรอกชื่อสินค้าใหม่:");

const newCost = Number(prompt("กรอกราคาต้นทุกน (บาท):"));
const newSelling = Number(prompt("กรอกราคาขาย (บาท):"));
const newSales = Number(prompt("กรอกจำนวนชิ้นที่ขายได้: "));
//tags

//เลือกหมวดหมู่สินคา
console.log("เลือกหมวดหมู่สินค้า: 0 = CPU, 1 = Laptop, 2 = GPU");
const catInput = prompt("พิมพ์ตัวเลขหมวดหมู่ (0-2):");
let newCategory = Category.CPU
if (catInput === "1") newCategory = Category.Laptop;
if (catInput === "2") newCategory = Category.GPU;

// ตรวจสอบว่าผู้ใช้กรอกรหัสและชื่อจริงๆ ถึงจะเพิิ่มเข้าครั้ง
if (newId && newName) {
    const newProduct: Product = {
        id: newId,
        name: newName,
        stats: [newCost, newSelling, newSales],
        tags: "",
        category: newCategory
    };

    warehouse.push(newProduct);
    console.log(`🎉 เพิ่มสินค้า "${newName}" เข้าสู่คลังเรียบร้อยแล้ว!\n`)
    console.log("=================================================")
}


// Logic

let maxSales = 0;
let bestSellername = "";
let netProfit = 0;

for (const product of warehouse) {


    let profitPerPiece = product.stats[1] - product.stats[0]; //กำไรต่อชิ้น
    let totalSell = product.stats[2] * product.stats[1]; //ราคาขายได้ทั้งหมดต่อสินค้า
    let totalProfit = profitPerPiece * product.stats[2]; //กำไรสุทธิ


    if (product.stats[2] > maxSales) {
        maxSales = product.stats[2]
        bestSellername = product.name
    }


    let profitStatus: ProfitStatus;
    if (totalProfit >= 500000) {
        profitStatus = "HighlyProfitable";
    } else if (totalProfit >= 250000) {
        profitStatus = "Standrad";
    } else {
        profitStatus = "Loss";
    }

    //รายงานสินค้า

    console.log("Product ID: " + product.id);
    console.log("ProductName: " + product.name);
    console.log("Cost Price: " + product.stats[0] + " Baht | " + "Selling price: " + product.stats[1] + " Baht");
    console.log("Profit Per Piece: " + profitPerPiece + " Baht");
    console.log("Total Price: " + totalSell + " Baht");
    console.log("Total Seller " + product.stats[2] + " Price");
    console.log("Total Profit " + totalProfit + " Baht");

    switch (profitStatus) {
        case "HighlyProfitable":
            console.log("Product Overview: HighlyProfitable")
            break;
        case "Standrad":
            console.log("Product Overview: Standrad")
            break;
        case "Loss":
            console.log("Product Overview: Loss")
            break;
    }
    console.log("-----------------------------------------------------")
    netProfit += totalProfit
}

//สรุปภาพรวม
console.log("===== Warehouse Overview Summary =====");
console.log("Best Seller: " + bestSellername);
console.log("Total Sell: " + maxSales + " Price");
console.log("Net Profit: " + netProfit + " Baht");
console.log("=======================================================");