//โจทย์ คำณวนค่าส่งสินค้า 11/7
type DelivelyType = 'express' | 'normal' | '';

//รับน้ำหนัก
let inputProductKilo: number = Number(prompt("กรอกน้ำหนักสินค้าหน่วยกิโลกรัม: ") ?? 0);
//ประเภทการจัดส่ง
console.log("ประเภทการจัดส่ง 1 = express | 2 = normal")
let inputTypeDeli: number = Number(prompt("เลือกประเภทการจัดส่ง(1-2): ") ?? 0);

let Stop: boolean = false
let typeDeli: DelivelyType = '';
switch (inputTypeDeli) {
    case 1:
        typeDeli = "express"
        break;
    case 2:
        typeDeli = "normal"
        break;
    default:
        Stop = true
}

//Logic express <=5 100B. >=5 200B. / normal <= 5 40B. >= 5 80B.
function getShippingCost(weight: number, typeShip: string): number {
    //express
    if (typeShip === "express" && weight <= 5) {
        return 100
    } else if (typeShip === "express" && weight > 5) {
        return 200
    } else {
        //normal
        if (typeShip === "normal" && weight <= 5) {
            return 40
        } else {
            return 80
        }
    }
}

if (Stop === true) {
    console.log("กรอกข้อมูลผิด! กรุณากรอกใหม่");
} else {
    let output = getShippingCost(inputProductKilo, typeDeli);
    console.log(output + " บาท")
}

