// 17/8 ⚡ โจทย์ข้อที่ 51: ระบบหลังบ้านสถานีชาร์จรถยนต์ไฟฟ้า (Smart EV Charging Analytics Engine)

//input
interface ChargingSession {
  sessionId: string;                                    // รหัสการชาร์จ (เช่น "EV-01", "EV-02")
  vehicleBrand: string;                                 // ยี่ห้อรถยนต์ (เช่น "BYD", "Tesla", "MG")
  chargerType: "AC_SLOW" | "DC_FAST" | "DC_SUPER";      // ประเภทหัวชาร์จ (5 | 8 | 11 บาท ต่อ kWh)
  kwhDelivered: number;                                 // ปริมาณไฟฟ้าที่ชาร์จจริง (kWh)
  hasPriorityBooking?: boolean;                         // จองหัวชาร์จด่วนล่วงหน้าหรือไม่ (ถ้า true +50 บาท!)
  isFaulty?: boolean;                                   // ระบบขัดข้อง/ชาร์จล้มเหลวหรือไม่ (ถ้า true ให้ข้าม ไม่คิดเงิน!)
}

//report output
interface ChargingReport {
  totalRevenue: number;             // รายได้รวมสุทธิทั้งหมด (ค่าไฟ + ค่าจองด่วน)
  totalSuccessfulSessions: number;  // จำนวนครั้งที่ชาร์จสำเร็จ
  faultySessionsCount: number;      // จำนวนครั้งที่ระบบขัดข้อง
  totalKwhDelivered: number;        // ปริมาณไฟฟ้ารวมทั้งหมดที่จ่ายออกไป (kWh)
  priorityBookingRevenue: number;   // รายได้เฉพาะค่าบริการจองด่วนล่วงหน้าทั้งหมด
  topChargingBrand: string;         // แบรนด์รถยนต์ที่สร้างรายได้รวมสูงสุดอันดับ 1
}

function generateChargingReport(sessions: ChargingSession[]): ChargingReport {

  //เช็คข้อมูล
  if (sessions.length === 0) {
    return {
      totalRevenue: 0,
      totalSuccessfulSessions: 0,
      faultySessionsCount: 0,
      totalKwhDelivered: 0,
      priorityBookingRevenue: 0,
      topChargingBrand: "No information available"
    }
  }

  //ประกาศตัวแปร 
  let totalRevenue: number = 0;
  let totalSuccessfulSessions: number = 0;
  let faultySessionsCount: number = 0;
  let totalKwhDelivered: number = 0;
  let priorityBookingRevenue: number = 0;
  let topChargingBrand: string = "";
  let maxRevenue = 0;


  const brandRevenueMap: { [brandName: string]: number } = {};

  //ลูปคำณวนตัวแรก
  for (const charger of sessions) {
    let chargerPrice = 0;
    let khwPricePerUnit = 0;

    if (charger.isFaulty) {
      faultySessionsCount += 1;
      continue;
    }

    totalSuccessfulSessions += 1;

    if (charger.chargerType === "AC_SLOW") {
      khwPricePerUnit = 5;
    } else if (charger.chargerType === "DC_FAST") {
      khwPricePerUnit = 8;
    } else {
      khwPricePerUnit = 11;
    }

    chargerPrice = (khwPricePerUnit * charger.kwhDelivered);

    if (charger.hasPriorityBooking) {
      chargerPrice += 50
      priorityBookingRevenue += 50
    } else {
      chargerPrice += 0
      priorityBookingRevenue += 0
    }

    totalRevenue += chargerPrice;
    totalKwhDelivered += charger.kwhDelivered;

    if (!brandRevenueMap[charger.vehicleBrand]) {
      brandRevenueMap[charger.vehicleBrand] = 0;
    }

    brandRevenueMap[charger.vehicleBrand]! += chargerPrice;
  }
  //END LOOP

  //ลูปตัวสอง หาแบรนทำเงินอันดับ 1
  topChargingBrand = "";
  maxRevenue = -1;
  let brandName = Object.keys(brandRevenueMap)
  for (const name of brandName) {
    if (brandRevenueMap[name]! > maxRevenue) {
      maxRevenue = brandRevenueMap[name]!;
      topChargingBrand = name;
    }
  }
  //END LOOP

  return {
    totalRevenue,
    totalSuccessfulSessions,
    faultySessionsCount,
    totalKwhDelivered,
    priorityBookingRevenue,
    topChargingBrand
  }
  //END
}
//mock data
const dailyChargingSessions: ChargingSession[] = [
  { sessionId: "EV-01", vehicleBrand: "BYD", chargerType: "DC_FAST", kwhDelivered: 40, hasPriorityBooking: true },   // (40*8) + 50 = 370 (BYD: 370, Priority: 50, kWh: 40)
  { sessionId: "EV-02", vehicleBrand: "Tesla", chargerType: "DC_SUPER", kwhDelivered: 50, hasPriorityBooking: false },// (50*11) + 0 = 550 (Tesla: 550, kWh: 50)
  { sessionId: "EV-03", vehicleBrand: "MG", chargerType: "AC_SLOW", kwhDelivered: 20, isFaulty: true },               // ขัดข้อง! (Faulty +1)
  { sessionId: "EV-04", vehicleBrand: "BYD", chargerType: "DC_SUPER", kwhDelivered: 30, hasPriorityBooking: false }, // (30*11) + 0 = 330 (BYD: 370 + 330 = 700, kWh: 30)
  { sessionId: "EV-05", vehicleBrand: "Tesla", chargerType: "AC_SLOW", kwhDelivered: 10, hasPriorityBooking: true }   // (10*5) + 50 = 100 (Tesla: 550 + 100 = 650, Priority: 50, kWh: 10)
];

//console.log
console.log(generateChargingReport(dailyChargingSessions));