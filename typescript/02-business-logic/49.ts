//โจทย์ข้อ 49: "ระบบสรุปยอดส่งอาหารและจัดอันดับไรเดอร์ดีเด่นประจำวัน (Food Delivery & Rider Summary Engine)"

// ข้อมูลขาเข้า (Input)
interface DeliveryOrder {
  orderId: string;
  riderName: string;                     // ชื่อไรเดอร์ที่รับงาน
  distanceKm: number;                    // ระยะทางส่ง (กิโลเมตร)
  foodPrice: number;                     // ค่าอาหาร (บาท)
  isVipMember?: boolean;                 // เป็นลูกค้า VIP หรือไม่ (ถ้า true ส่งฟรี 0 บาท!)
  status: "DELIVERED" | "CANCELLED";     // สถานะการจัดส่ง
}

// รายงานสรุปขาออก (Output Object)
interface LogisticsReport {
  totalSalesVolume: number;          // ยอดขายรวมสุทธิทั้งหมด (ค่าอาหาร + ค่าจัดส่ง)
  totalDeliveredOrders: number;      // จำนวนออเดอร์ที่ส่งสำเร็จ
  totalCancelledOrders: number;      // จำนวนออเดอร์ที่ถูกยกเลิก
  totalDeliveryFeeCollected: number; // ยอดรวมค่าจัดส่งทั้งหมดที่เก็บได้
  topRider: string;               // ชื่อไรเดอร์ที่ส่งสำเร็จจำนวนรอบมากที่สุดอันดับ 1
}

function generateLogisticsReport(orders: DeliveryOrder[]): LogisticsReport {
  //ส่วนดักข้อมูล
  if (orders.length === 0) {
    return {
      totalSalesVolume: 0,
      totalDeliveredOrders: 0,
      totalCancelledOrders: 0,
      totalDeliveryFeeCollected: 0,
      topRider: "No Delivery"
    };
  }
  //END

  //ประกาศตัวแปร
  let totalSalesVolume: number = 0; //ยอดขายรวมทั้งหมด ค่าอาหาร ค่าส่ง
  let totalDeliveredOrders: number = 0; //นับออเดอร์ที่ส่งสำเร็จ
  let totalCancelledOrders: number = 0; //นับออเดอร์ที่ส่งไม่สำเร็จ
  let totalDeliveryFeeCollected: number = 0; //ค่าส่งรวมทั้งหมด
  let topRider: string = ""; //ชื่อไรเดอร์ที่มียอดส่งสำเร็จเยอะที่สุด
  const riderDeliveryCount: { [name: string]: number } = {}; //รวมจำครั้งที่ส่งสำเร็จแยกตามชื่อไรเดอร์
  //ลูปคำณวน
  for (const order of orders) {

    //ถ้า status ยกเลิก
    if (order.status === "CANCELLED") {
      totalCancelledOrders += 1;
      continue
    }

    let fee: number = 0; //ค่าส่ง

    //ถ้า status ส่งสำเร็จ
    totalDeliveredOrders += 1;
    //เช็คว่าเป็นลูกค้า Vip มั้ย?
    if (order.isVipMember) {
      fee = 0;
    } else {
      fee = order.distanceKm * 10;
    }

    //สะสมยอดเงิน
    totalSalesVolume += (order.foodPrice + fee); //รวมยอดทั้งหมด อาหาร + ค่าส่ง
    totalDeliveryFeeCollected += fee; //รวมยอดค่าส่งทั้งหมด

    //รวมจำครั้งที่ส่งสำเร็จแยกตามชื่อไรเดอร์
    if (!riderDeliveryCount[order.riderName]) {
      riderDeliveryCount[order.riderName] = 0;
    }

    riderDeliveryCount[order.riderName]! += 1;
  }
  //END LOOP

  //หา top rider
  let riderNames = Object.keys(riderDeliveryCount);

  let maxCount: number = -1;
  topRider = "";

  for (const name of riderNames) {
    if (maxCount < riderDeliveryCount[name]!) {
      maxCount = riderDeliveryCount[name]!;
      topRider = name;
    }
  }
  //END LOOP

  return {
    totalSalesVolume: totalSalesVolume,
    totalDeliveredOrders: totalDeliveredOrders,
    totalCancelledOrders: totalCancelledOrders,
    totalDeliveryFeeCollected: totalDeliveryFeeCollected,
    topRider: topRider
  };

}

const dailyDeliveries: DeliveryOrder[] = [
  { orderId: "D01", riderName: "Somchai", distanceKm: 3, foodPrice: 120, isVipMember: false, status: "DELIVERED" }, // ส่ง 3 กม. = ค่าส่ง 30 | ยอดรวม 150 (Somchai +1)
  { orderId: "D02", riderName: "Wichai", distanceKm: 5, foodPrice: 200, isVipMember: true, status: "DELIVERED" },  // VIP ส่งฟรี = ค่าส่ง 0 | ยอดรวม 200 (Wichai +1)
  { orderId: "D03", riderName: "Somchai", distanceKm: 2, foodPrice: 80, isVipMember: false, status: "CANCELLED" },  // ยกเลิก! (Cancelled +1)
  { orderId: "D04", riderName: "Somchai", distanceKm: 4, foodPrice: 150, isVipMember: true, status: "DELIVERED" }, // VIP ส่งฟรี = ค่าส่ง 0 | ยอดรวม 150 (Somchai +2)
  { orderId: "D05", riderName: "Anan", distanceKm: 6, foodPrice: 300, isVipMember: false, status: "DELIVERED" }    // ส่ง 6 กม. = ค่าส่ง 60 | ยอดรวม 360 (Anan +1)
];

console.log(generateLogisticsReport(dailyDeliveries));
/* 📤 ผลลัพธ์ที่ต้องการ (Expected Output Object):
{
  totalSalesVolume: 860,            // (150 + 200 + 150 + 360)
  totalDeliveredOrders: 4,          // ส่งสำเร็จ 4 ออเดอร์
  totalCancelledOrders: 1,          // ยกเลิก 1 ออเดอร์ (D03)
  totalDeliveryFeeCollected: 90,    // ค่าส่งรวม (30 + 0 + 0 + 60 = 90)
  topRider: "Somchai"               // Somchai ส่งสำเร็จมากที่สุด (2 รอบ)
}
*/
