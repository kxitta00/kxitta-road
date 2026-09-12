import { Status } from "./type";
import { type Product } from "./type";
import { type Report } from "./type";


export function cleanData(rawLog: string): string[] {
  return rawLog.trim().split("|");
}

export function parseWarehouseLog(rawLog: string): Product | null {
  const parts: string[] = cleanData(rawLog);
  const rawId: string = parts[0]?.trim() ?? "";
  const rawProductName: string = parts[1]?.trim() ?? ""
  const rawQuantity: number = Number(parts[2]?.trim());
  const rawUnitPrice: number = Number(parts[3]?.trim());
  const rawStatus: string = parts[4]?.trim() ?? "";

  if (isNaN(rawQuantity) || isNaN(rawUnitPrice) || rawUnitPrice <= 0 || rawQuantity <= 0) {
    return null
  }

  let status: Status = Status.CANCELLED;
  switch (rawStatus) {
    case "PAID": status = Status.PAID; break;
    case "PENDING": status = Status.PENDING; break;
    case "REFUNDED": status = Status.REFUNDED; break;
  }

  return ({
    id: rawId,
    productName: rawProductName,
    quantity: rawQuantity,
    unitPrice: rawUnitPrice,
    status: status,
  })
}



export function generateWarehouseReport(product: (Product | null)[]): Report {
  const validProducts: Product[] = product.filter((p): p is Product => p !== null)
  const totaLogs: number = product.length
  const validLogs: number = validProducts.length;
  const corruptedLogs: number = totaLogs - validLogs
  const paidOrders: Product[] = validProducts.filter((p) => p.status === Status.PAID)
  const revenues: number[] = paidOrders.map((item) => item.quantity * item.unitPrice)
  let totalRevenue: number = 0;
  for (const rev of revenues) {
    totalRevenue += rev;
  }

  const PAID: number = paidOrders.length
  const PENDING: number = validProducts.filter((p) => p.status === Status.PENDING).length;
  const CANCELLED: number = validProducts.filter((p) => p.status === Status.CANCELLED).length;
  const REFUNDED: number = validProducts.filter((p) => p.status === Status.REFUNDED).length;

  return ({
    totalLogs: totaLogs,
    validLogs: validLogs,
    corruptedLogs: corruptedLogs,
    totalRevenue: totalRevenue,
    statusSummary: {
      PAID: PAID,
      PENDING: PENDING,
      CANCELLED: CANCELLED,
      REFUNDED: REFUNDED,
    },
    paidOrders: paidOrders,

  })
} 