enum Category { Mouse, Keybord, Headphone };

type ProductID = string | number;

type profitStatus = 'High profits' | 'Standard' | 'Low profit' | '';

type tags_s = 'สินค้าขายดี' | 'สินค้าขายได้' | 'สินค้าขายไม่ดี' | '';

interface Product {
    id: ProductID;
    name: string;
    state: [number, number, number] //ราคาต้นทุน ราคาขาย จำนวนชิ้นที่ขายได้
    profit_status: profitStatus;
    tags: tags_s;
    category: Category
}

const warehouse: Product[] = [
    {
        id: 101,
        name: "HyperX Stringer Core II",
        state: [1000, 2500, 98], //ราคาต้นทุน ราคาขาย จำนวนชิ้นที่ขายได้
        profit_status: "",
        tags: "",
        category: Category.Headphone,
    },
    {
        id: 102,
        name: "Razer Viper V3",
        state: [800, 1698, 67],
        profit_status: "",
        tags: "",
        category: Category.Mouse
    },
    {
        id: 103,
        name: "Ajazz AK680",
        state: [250, 699, 55],
        profit_status: "",
        tags: "",
        category: Category.Keybord
    },
]
//รับสินค่าใหม่ หรือ ข้ามไปดูสินค้าในคลัง
console.log("========== เพิ่มสินค้าพิมพ์ 1 ข้ามไปดูภาพรวมสินค้าทั้งพิมพ์ 0 ==========")
let inputProd: number = Number(prompt("พิมพ์ตัวเลขเพื่อดำเนินการต่อ(0,1): "))
if (inputProd === 1) {
    let newId = (prompt("กรอกไอดีสินค้าใหม่: "));
    let newName = (prompt("กรอกชื่อสินค้าตัวใหม่: "));
    let newCost: number = Number(prompt("กรอกราคาต้นทุน: "));
    let newSelling: number = Number(prompt("กรอกราคาขาย: "));
    let newSales: number = Number(prompt("กรอกจำนวนชิ้นที่ขายได้: "));

    // หมวดหมู่สินค้า
    console.log("เลือกหมวดหมู่สินค้า: 0 = Mouse, 1 = Keybord, 2 = Headphone");
    let catInput = prompt("พิมพ์ตัวเลขหมวดหมู่ (0-2): ");
    let newCategory = Category.Mouse
    if (catInput === "1") newCategory = Category.Keybord;
    if (catInput === "2") newCategory = Category.Headphone

    //ตรวจสอบข้อมูลที่เข้ามาแล้วเพิ่มเข้าไปในคลังแล้วเอาไปคำณวน
    if (newId && newName) {
        const newProduct: Product = {
            id: newId,
            name: newName,
            state: [newCost, newSelling, newSales],
            profit_status: "",
            tags: "",
            category: newCategory,
        };

        warehouse.push(newProduct);
        console.log(`เพิ่มสินค้า "${newName}" เข้าสู่คลังเรียบร้อย!`)
    }



} else {
    console.log("l---------------- ภาพรวมสินค้าทั้งหมด ----------------l")
}


//logic หาราคารวมต้นทุน หาราคารวมกำไร หาสถานะกำไร ใส่แท็ค และสรุป ชื่อสินค้าที่ขายดีที่สุด กำไรรวมทั้งหมด 

// หาราคารวมต้นทุน
function calculateTotalCost(cost: number, sell: number, salesCount: number): number {
    let totalCost = cost * salesCount
    return totalCost;
}

// หาราคารวมกำไร
function calculateTotalProfit(cost: number, sell: number, salesCount: number): number {
    let totalProfit = sell - cost // บัค แก้ด้วยการเอาจำนวนเยอะมาลบจำนวนน้อย
    return totalProfit * salesCount;
}

// หาสถานะกำไร
function getProfitStatus(totalProfit: number): profitStatus {
    if (totalProfit >= 100000) {
        return 'High profits';
    } else if (totalProfit >= 50000) {
        return 'Standard';
    } else {
        return 'Low profit';
    }
}

//ใส่แท็ค
function getTag_s(totalItem: number): tags_s {
    if (totalItem >= 90) {
        return 'สินค้าขายดี';
    } else if (totalItem >= 60) {
        return 'สินค้าขายได้';
    } else {
        return 'สินค้าขายไม่ดี';
    }
}

//ชื่อสินค้าที่ขายดีที่สุด
function BestSellerName(product: Product[]): string {
    let maxSell = 0;
    let BestSellerName = "ไม่พบข้อมูลสินค้า";

    for (const Prod of product) {
        if (Prod.state[2] > maxSell) {
            maxSell = Prod.state[2]
            BestSellerName = Prod.name
        }
    }
    return BestSellerName;
}

//กำไรรวมทั้งหมด
function getTotalNetProfit(product: Product[]): number {
    let netProfit = 0;
    for (const Prod of product) { //เขียนโค้ดผิด
        let itemProd = (Prod.state[1] - Prod.state[0]) * Prod.state[2]
        netProfit += itemProd;
    }
    return netProfit;
}

let Best_Seller = BestSellerName(warehouse); //ชื่อสินค้าที่ขายดีที่สุด *แก้ย้ายออกจากลูป
let get_NetProfit = getTotalNetProfit(warehouse); //กำไรรวมทั้งหมด *แก้ย้ายออกจากลูป

// นำฟังก์ชั่นมาใช้คำณวน
for (const product of warehouse) {

    let Total_Cost = calculateTotalCost(product.state[0], product.state[1], product.state[2]); //คารวมต้นทุน 
    let Total_Profit = calculateTotalProfit(product.state[0], product.state[1], product.state[2]); //ราคารวมกำไร
    product.profit_status = getProfitStatus(Total_Profit); //สถานะกำไร
    product.tags = getTag_s(product.state[2]); //ใส่แท็ค

    console.log("====================================================")
    console.log(`ID สินค้า: ${product.id}`);
    console.log(`สินค้า: ${product.name}`);
    console.log(`ต้นทุนรวม: ${Total_Cost} บาท`);
    console.log(`ได้กำไรรวม: ${Total_Profit} บาท`);
    console.log(`สถานะ: ${product.profit_status}`);
    console.log(`แท็ก: ${product.tags}`);

    switch (product.category) {
        case Category.Mouse:
            console.log("ประเภทสินค้า: Mouse");
            break;
        case Category.Keybord:
            console.log("ประเภทสินค้า: Keybord");
            break;
        case Category.Headphone:
            console.log("ประเภทสินค้า: Headphone")
            break;
    }

}
console.log("====================================================")
console.log(`สินค้าที่ขายดีที่สุด: ${Best_Seller}`);
console.log(`กำไรรวมสุทธิ: ${get_NetProfit}`)
console.log("====================================================")