import { DeliveryType } from "./package-types";
import type { TrackingId, PackageReport, DispatchSummary } from "./package-types";

function cleanRecipient(name: string): string | DeliveryType {
  return name.trim().replaceAll("-", " ").replaceAll("_", " ").toUpperCase();
}

function processPackages(rawList: string[]): DispatchSummary {
  const resultPack: PackageReport[] = [];
  let totalFees = 0;
  let expressCount = 0;
  let totalPackage = 0;

  for (const item of rawList) {
    let parts: string[] = item.split("|"); //ตัด | ชุดข้อมูลอินเด็กที่ n
    let rawId: string = parts[0]?.trim() ?? ""; //นำไอดีมาเก็บไว้ในตัวแปร rawId
    let cleanName: string = cleanRecipient(parts[1] ?? ""); //เอาชื่อไปคลีนในฟังก์ชัน cleanRecipient แล้วนำมาเก็บไว้ในตัวแปร cleanName

    //--
    let fee: number = 30;
    let weight: number = Number(parts[3]) ?? 0; //ประกาศตัวแปรไว้เก็บน่้ำหนัก
    let rawType: string = parts[2]?.trim().toUpperCase() ?? ""; //นำประเภทขนส่งมาเก็บไว้ในตัวแปร rawType พร้อมตัดช่องว่างทำให้เป็นตัวใหญ่
    let deliveryType: DeliveryType = DeliveryType.ECONOMY; //ประกาศตัวแปรไว้เก็บ enum DeliveryType
    switch (rawType) {
      case "EXPRESS":
        deliveryType = DeliveryType.EXPRESS;
        fee = 100;
        break;
      case "STANDARD":
        deliveryType = DeliveryType.STANDARD
        fee = 50;
        break;
    }

    let sumFee: number = 0;
    if (deliveryType === DeliveryType.EXPRESS) {
      sumFee = fee + (weight * 10);
    } else if (deliveryType === DeliveryType.STANDARD) {
      sumFee = fee + (weight * 5)
    } else {
      sumFee = fee + (weight * 2)
    }

    if (weight > 10 && weight % 2 !== 0) {
      sumFee += 20;
    }

    let hasDuplicateTag: boolean = false
    let tag: string[] = parts[4]?.trim().split(",")!;
    const uniqueTag = new Set(tag);
    if (uniqueTag.size < tag.length)
      hasDuplicateTag = true

    let id: string = "UNASSIGNED";
    if (rawId !== "") {
      id = rawId
    }
    resultPack.push({
      id: id,
      cleanRecipient: cleanName,
      type: deliveryType,
      weightKg: weight,
      fee: sumFee,
      hasDuplicateTag: hasDuplicateTag,
    });

    totalPackage++
    totalFees += sumFee;
    if (deliveryType === DeliveryType.EXPRESS)
      expressCount++
  }
  return {
    totalPackage: totalPackage,
    totalFees: totalFees,
    expressCount: expressCount,
    packages: resultPack,
  }
}

const rawPackages = [
  " PKG-101 | mr.somchai_prasert-bkk | express | 11 | urgent,fragile,urgent ", // 👈 มี tag urgent ซ้ำ, น้ำหนัก 11 (เลขคี่ > 10)
  " 202 | ms.jane_doe | standard | 4 | books,gift ",
  " | guest_user-cst | economy | 2 | clothes " // 👈 ตัวนี้ไม่มี ID
];

console.log(processPackages(rawPackages))