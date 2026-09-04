//โจทย์ข้อที่ 54: ระบบสรุปยอดออเดอร์ร้านอาหารและเดลิเวอรี (Smart Cloud Kitchen Analytics Engine)
// 1.1 โครงสร้างรายการอาหารย่อยในออเดอร์
interface OrderItem {
  itemName: string;                                     // ชื่อเมนู (เช่น "Wagyu Burger", "Truffle Pasta", "Craft Cola")
  quantity: number;                                     // จำนวนจานที่สั่ง (เช่น 2 จาน)
  unitPrice: number;                                    // ราคาต่อจาน (เช่น 300 บาท)
}

// 1.2 โครงสร้างออเดอร์หลัก
interface RestaurantOrder {
  orderId: string;                                      // รหัสออเดอร์ (เช่น "ORD-01", "ORD-02")
  customerTier: "REGULAR" | "SILVER" | "GOLD";          // ระดับสมาชิก (REGULAR: ลด 0% | SILVER: ลด 10% | GOLD: ลด 20%)
  items: OrderItem[];                                   // รายการอาหารที่สั่งในออเดอร์นี้ (Array ซ้อนอยู่ข้างใน!)
  hasExpressDelivery?: boolean;                         // สั่งส่งด่วนพิเศษหรือไม่ (ถ้า true +60 บาท และค่าส่งนี้ไม่ลดราคา!)
  isVoided?: boolean;                                   // ออเดอร์ถูกยกเลิก/โมฆะหรือไม่ (ถ้า true ให้ข้าม ไม่คิดเงิน!)
}

interface RestaurantReport {
  totalNetRevenue: number;          // รายได้สุทธิรวมทั้งหมดของร้าน (ค่าอาหารหลังหักส่วนลด + ค่าส่งด่วน)
  totalCompletedOrders: number;     // จำนวนออเดอร์ที่สั่งสำเร็จ
  voidedOrdersCount: number;        // จำนวนออเดอร์ที่ถูกยกเลิก/โมฆะ
  totalDishesSold: number;          // จำนวนจานอาหารทั้งหมดที่ขายได้ (นับรวมทุกเมนูจากทุกออเดอร์)
  totalDiscountGiven: number;       // มูลค่าส่วนลดสมาชิกรวมทั้งหมดที่ร้านมอบให้ลูกค้า
  topGrossingItem: string;          // ชื่อเมนูอาหารที่สร้างยอดขายดิบรวมสูงสุดอันดับ 1
}

function generateKitchenReport(orders: RestaurantOrder[]): RestaurantReport {
  if (orders.length === 0) {
    return {
      totalNetRevenue: 0,
      totalCompletedOrders: 0,
      voidedOrdersCount: 0,
      totalDishesSold: 0,
      totalDiscountGiven: 0,
      topGrossingItem: "",
    }
  }

  let voidedOrdersCount: number = 0;
  let totalCompletedOrders: number = 0;
  let totalNetRevenue: number = 0;
  let totalDishesSold: number = 0;
  let totalDiscountGiven: number = 0;
  const itemRevenueMap: { [itemName: string]: number } = {};

  for (const order of orders) {
    let discount: number = 0;
    let expressFee: number = 0;
    let orderNetTotal: number = 0;
    if (order.isVoided) {
      voidedOrdersCount += 1
      continue
    }
    totalCompletedOrders += 1

    //loop orderItems
    let rawFoodTotal: number = 0;
    let orderDishes: number = 0;
    for (const item of order.items) {
      rawFoodTotal += (item.quantity * item.unitPrice)
      orderDishes += item.quantity;
      if (!itemRevenueMap[item.itemName]) {
        itemRevenueMap[item.itemName] = 0
      }
      itemRevenueMap[item.itemName]! += (item.quantity * item.unitPrice);
    }
    //END

    if (order.customerTier === "REGULAR") {
      discount = (rawFoodTotal * 0.00);
    } else if (order.customerTier === "SILVER") {
      discount = (rawFoodTotal * 0.10);
    } else {
      discount = (rawFoodTotal * 0.20)
    }

    if (order.hasExpressDelivery) {
      expressFee = 60
    } else {
      expressFee = 0;
    }

    orderNetTotal = ((rawFoodTotal - discount) + expressFee);

    totalNetRevenue += orderNetTotal;
    totalDishesSold += orderDishes;
    totalDiscountGiven += discount;
  }
  let itemsName = Object.keys(itemRevenueMap);
  let topGrossingItem: string = "";
  let maxCost: number = -1;
  for (const name of itemsName) {
    if (maxCost < itemRevenueMap[name]!) {
      maxCost = itemRevenueMap[name]!;
      topGrossingItem = name;
    }
  }

  return {
    totalNetRevenue,
    totalCompletedOrders,
    voidedOrdersCount,
    totalDishesSold,
    totalDiscountGiven,
    topGrossingItem,
  }
}

const dailyOrders: RestaurantOrder[] = [
  // ORD-01: GOLD (ลด 20%) -> อาหารดิบ: (2*300) + (2*50) = 700 -> ลด 140 เหลือ 560 -> ส่งด่วน +60 = 620 -> จาน: 4 (Wagyu: 600, Cola: 100)
  {
    orderId: "ORD-01",
    customerTier: "GOLD",
    items: [
      { itemName: "Wagyu Burger", quantity: 2, unitPrice: 300 },
      { itemName: "Craft Cola", quantity: 2, unitPrice: 50 }
    ],
    hasExpressDelivery: true
  },
  // ORD-02: SILVER (ลด 10%) -> อาหารดิบ: (1*400) + (1*300) = 700 -> ลด 70 เหลือ 630 -> จาน: 2 (Pasta: 400, Wagyu: 300)
  {
    orderId: "ORD-02",
    customerTier: "SILVER",
    items: [
      { itemName: "Truffle Pasta", quantity: 1, unitPrice: 400 },
      { itemName: "Wagyu Burger", quantity: 1, unitPrice: 300 }
    ],
    hasExpressDelivery: false
  },
  // ORD-03: ยกเลิก/โมฆะ! (Voided +1)
  {
    orderId: "ORD-03",
    customerTier: "REGULAR",
    items: [
      { itemName: "Craft Cola", quantity: 5, unitPrice: 50 }
    ],
    isVoided: true
  },
  // ORD-04: REGULAR (ลด 0%) -> อาหารดิบ: (2*400) = 800 -> ลด 0 เหลือ 800 -> ส่งด่วน +60 = 860 -> จาน: 2 (Pasta: 800)
  {
    orderId: "ORD-04",
    customerTier: "REGULAR",
    items: [
      { itemName: "Truffle Pasta", quantity: 2, unitPrice: 400 }
    ],
    hasExpressDelivery: true
  },
  // ORD-05: GOLD (ลด 20%) -> อาหารดิบ: (1*300) + (1*400) = 700 -> ลด 140 เหลือ 560 -> จาน: 2 (Wagyu: 300, Pasta: 400)
  {
    orderId: "ORD-05",
    customerTier: "GOLD",
    items: [
      { itemName: "Wagyu Burger", quantity: 1, unitPrice: 300 },
      { itemName: "Truffle Pasta", quantity: 1, unitPrice: 400 }
    ],
    hasExpressDelivery: false
  }
];

console.log(generateKitchenReport(dailyOrders))