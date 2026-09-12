// enum Status {
//      PAID = "PAID"
//      PENDING = "PENDING"
//      CANCELLED = "CANCELLED"
//      REFUNDED = "REFUNDED"
// }

// type Product {
//      id:string,
//      productName:string,
//      quantity:number,
//      unitPrice:number,
//      status:Status
// }

// type Report {
//      totalLogs: จำนวนบันทึกทั้งหมดที่รับเข้ามา
//      validLogs: จำนวนบันทึกที่ข้อมูลถูกต้อง
//      corruptedLogs: จำนวนบันทึกที่เสียหาย/ถูกคัดทิ้ง
//      totalRevenue: ยอดเงินรวมสุทธิของรายการที่ชำระเงินแล้ว 
//      statusSummary:  {
//           PAID :number
//           PENDING = number
//           CANCELLED = number
//           REFUNDED = number
//      }
//      paidOrders: Product[]
// }

export enum Status {
  PAID = "PAID",
  PENDING = "PENDING",
  CANCELLED = "CANCELLED",
  REFUNDED = "REFUNDED",
}

export type Product = {
  id: string,
  productName: string,
  quantity: number,
  unitPrice: number,
  status: Status
}


export type Report = {
  totalLogs: number,
  validLogs: number,
  corruptedLogs: number,
  totalRevenue: number,
  statusSummary: {
    PAID: number,
    PENDING: number,
    CANCELLED: number,
    REFUNDED: number,
  }
  paidOrders: Product[]
}