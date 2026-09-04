import type { VoucherStatus } from "./voucher-types"
import type { VoucherReport } from "./voucher-types"
import { VoucherTier } from "./voucher-types"

function cleanCampaign(name: string): string {
  return name.replaceAll("-", " ").replaceAll("_", " ").toUpperCase().trim();
}


function processVouchers(rawList: string[]): VoucherReport[] {
  if (rawList.length === 0)
    return [];

  const resulte: VoucherReport[] = [];
  for (const item of rawList) {
    let parts: string[] = item.split("|") ?? "";
    let code: string = parts[0]!.trim() ?? "";
    let cleanName: string = cleanCampaign(parts[1]!) ?? "";
    let tier: string = parts[2]!.trim().toLowerCase() ?? "";
    let discountRaw: string = parts[3]!.trim().replaceAll("%", "") ?? "";
    if (isNaN(Number(discountRaw)))
      discountRaw = "0";

    let statusRaw: string = parts[4]!.trim() ?? "";

    let tierV: VoucherTier = VoucherTier.GENERAL;
    switch (tier) {
      case "vip": tierV = VoucherTier.VIP; break;
      case "member": tierV = VoucherTier.MEMBER; break;
    }

    let status: VoucherStatus = "VALID";
    if (statusRaw === "EXPIRED") {
      status = "EXPIRED"
    } else if (Number(discountRaw) <= 0 || code === "") {
      status = "INVALID"
    }

    resulte.push({
      code: code,
      cleanCampaign: cleanName,
      tier: tierV,
      discountPercent: Number(discountRaw),
      status: status,
    });
  }
  return resulte;
}

const rawVouchers = [
  " VIP-888 | summer_mega-sale | vip | 50% | ACTIVE ",
  " MEM-123 | flash_deal_2026 | member | 20% | EXPIRED ",
  " GEN-000 | welcome-newuser | general | abc% | ACTIVE ", // 👈 ตัวเลขเปอร์เซ็นต์มั่ว
  " | secret_promo | vip | 15% | ACTIVE "                  // 👈 โค้ดว่าง
];

console.log(processVouchers(rawVouchers));
