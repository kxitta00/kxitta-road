export enum Size {
  choose = "Select cup size",
  regular = "regular 16 oz",
  large = "large 22 oz",
}

export enum Sweetness {
  choose = "Choose sweetness level",
  zeroPercent = "0% ไม่หวาน",
  twentyfivePrecent = "25% หวานน้อยมาก",
  fiftyPrecent = "50% หวานน้อย",
  oneHundredPrecent = "100% หวานปกติ",
}

export enum Ice {
  choose = "Select ice level",
  low = "ใส่น้ำแข็งน้อย",
  normal = "ใส่นำแข็งปกติ",
  noIce = "ไม่ใส่น้ำแข็ง"
}

export type CartItem = {
  id: string;
  name: string;
  size: Size;
  sweet: Sweetness;
  ice: Ice;
  quantity: number;
  totalprice: number;
}

