export enum Status {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  UNKNOW = "UNKNOW"
}

export type Order = {
  id: string;
  name: string,
  quantity: number,
  price: number,
  status: Status,
}

export type Report = {
  totalRevenue: number,
  validOrderCount: number,
  invalidOrderCount: number,
}