export enum DeliveryType {
  EXPRESS = "EXPRESS",
  STANDARD = "STANDARD",
  ECONOMY = "ECONOMY"
}

export type TrackingId = string | number;

export interface PackageReport {
  id: TrackingId,
  cleanRecipient: string,
  type: DeliveryType,
  weightKg: number,
  fee: number,
  hasDuplicateTag: boolean,
}

export interface DispatchSummary {
  totalPackage: number,
  totalFees: number,
  expressCount: number,
  packages: PackageReport[]
}