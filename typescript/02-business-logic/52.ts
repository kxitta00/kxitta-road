//18/8 โจทย์ข้อที่ 52: ระบบศูนย์คัดแยกและจัดส่งพัสดุด่วนอัจฉริยะ (Smart Parcel Dispatch Engine)

interface ParcelDelivery {
  parcelId: string;                                     // รหัสพัสดุ (เช่น "PKG-01", "PKG-02")
  recipientCity: string;                                // เมือง/จังหวัดปลายทาง (เช่น "Bangkok", "Chiang Mai", "Phuket")
  shippingTier: "STANDARD" | "EXPRESS" | "SAME_DAY";   // ประเภทความเร็วในการส่ง (30 | 60 | 100 บาท ต่อ kg)
  weightKg: number;                                     // น้ำหนักพัสดุ (กิโลกรัม)
  hasFragileInsurance?: boolean;                        // ซื้อประกันพัสดุแตกหักเสียหายหรือไม่ (ถ้า true +80 บาท!)
  isCancelled?: boolean;                                // ลูกค้ายกเลิกพัสดุหรือไม่ (ถ้า true ให้ข้าม ไม่คิดเงิน!)
}


interface DispatchReport {
  totalShippingRevenue: number;     // รายได้ค่าจัดส่งรวมสุทธิทั้งหมด (ค่าส่งตามน้ำหนัก + ค่าประกัน)
  totalDispatchedParcels: number;   // จำนวนพัสดุที่จัดส่งสำเร็จ
  cancelledParcelsCount: number;    // จำนวนพัสดุที่ถูกยกเลิก
  totalWeightKg: number;            // น้ำหนักพัสดุรวมทั้งหมดที่ส่งสำเร็จ (kg)
  fragileInsuranceRevenue: number;  // รายได้เฉพาะค่าประกันพัสดุแตกหักทั้งหมด
  topDestinationCity: string;       // จังหวัดปลายทางที่สร้างรายได้ค่าส่งสูงสุดอันดับ 1
}

function calculateDispatchReport(parcels: ParcelDelivery[]): DispatchReport {
  if (parcels.length === 0) {
    return {
      totalShippingRevenue: 0,
      totalDispatchedParcels: 0,
      cancelledParcelsCount: 0,
      totalWeightKg: 0,
      fragileInsuranceRevenue: 0,
      topDestinationCity: "Not Found"
    }
  }

  let totalShippingRevenue = 0;
  let totalDispatchedParcels = 0;
  let cancelledParcelsCount = 0;
  let totalWeightKg = 0;
  let fragileInsuranceRevenue = 0;
  const cityRevenueMap: { [name: string]: number } = {};
  let maxCost = -1;
  let topDestinationCity = "";

  for (const parcel of parcels) {
    let ratePerKg = 0;
    let parcelCost = 0;

    if (parcel.isCancelled) {
      cancelledParcelsCount += 1
      continue
    }

    totalDispatchedParcels += 1;

    if (parcel.shippingTier === "STANDARD") {
      ratePerKg = 30;
    } else if (parcel.shippingTier === "EXPRESS") {
      ratePerKg = 60;
    } else if (parcel.shippingTier === "SAME_DAY") {
      ratePerKg = 100;
    }

    parcelCost = (ratePerKg * parcel.weightKg);

    if (parcel.hasFragileInsurance) {
      parcelCost += 80
      fragileInsuranceRevenue += 80
    }

    totalShippingRevenue += parcelCost;
    totalWeightKg += parcel.weightKg;

    if (!cityRevenueMap[parcel.recipientCity]) {
      cityRevenueMap[parcel.recipientCity] = 0
    }

    cityRevenueMap[parcel.recipientCity]! += parcelCost;
  }

  maxCost = -1;
  topDestinationCity = "";
  let cityName = Object.keys(cityRevenueMap);
  for (const name of cityName) {
    if (cityRevenueMap[name]! > maxCost) {
      maxCost = cityRevenueMap[name]!;
      topDestinationCity = name;
    }
  }

  return {
    totalShippingRevenue,
    totalDispatchedParcels,
    cancelledParcelsCount,
    totalWeightKg,
    fragileInsuranceRevenue,
    topDestinationCity,
  }

}


const dailyParcels: ParcelDelivery[] = [
  { parcelId: "PKG-01", recipientCity: "Chiang Mai", shippingTier: "EXPRESS", weightKg: 4, hasFragileInsurance: true },   // (4*60) + 80 = 320 (Chiang Mai: 320, Insurance: 80, Weight: 4)
  { parcelId: "PKG-02", recipientCity: "Bangkok", shippingTier: "SAME_DAY", weightKg: 3, hasFragileInsurance: false },    // (3*100) + 0 = 300 (Bangkok: 300, Weight: 3)
  { parcelId: "PKG-03", recipientCity: "Phuket", shippingTier: "STANDARD", weightKg: 10, isCancelled: true },             // ยกเลิก! (Cancelled +1)
  { parcelId: "PKG-04", recipientCity: "Chiang Mai", shippingTier: "SAME_DAY", weightKg: 2, hasFragileInsurance: false }, // (2*100) + 0 = 200 (Chiang Mai: 320 + 200 = 520, Weight: 2)
  { parcelId: "PKG-05", recipientCity: "Bangkok", shippingTier: "STANDARD", weightKg: 5, hasFragileInsurance: true }      // (5*30) + 80 = 230 (Bangkok: 300 + 230 = 530, Insurance: 80, Weight: 5)
];

console.log(calculateDispatchReport(dailyParcels))