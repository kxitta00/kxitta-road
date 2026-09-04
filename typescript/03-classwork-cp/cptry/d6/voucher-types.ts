export enum VoucherTier {
  VIP = "VIP",
  MEMBER = "MEMBER",
  GENERAL = "GENERAL",
}

export type VoucherStatus = "VALID" | "INVALID" | "EXPIRED";

export interface VoucherReport {
  code: string,
  cleanCampaign: string,
  tier: VoucherTier,
  discountPercent: number,
  status: VoucherStatus,
}