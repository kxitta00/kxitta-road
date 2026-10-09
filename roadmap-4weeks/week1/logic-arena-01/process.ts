import { type OrderItem, type BranchSummary, type Report, type RejectedItem, type ParseResult } from "./types";

export function parseLog(rawLog: string): ParseResult {
  const orders: OrderItem[] = [];
  const rejectedList: RejectedItem[] = [];

  let parts: string[] = rawLog.split("\n");
  for (const item of parts) {
    const part = item.trim();
    if (part === "") {
      continue
    }
    const rawData: string[] = part.split("|");
    if (rawData.length < 4) {
      rejectedList.push({
        raw: part,
        reason: "ข้อมูลไม่ครบ 4 คอลัมน์",
      })
      continue
    }
    const rawId: string = rawData[0]?.trim().toUpperCase() ?? "";
    const rawNameItem: string = rawData[1]?.trim().toUpperCase() ?? "";
    const rawPrice: number = Number(rawData[2]?.trim());
    const rawQuantity: number = Number(rawData[3]?.trim());

    if (Number.isNaN(rawPrice) || rawPrice <= 0) {
      rejectedList.push({
        raw: part,
        reason: "ราคาไม่ถูกต้อง (ต้องเป็นตัวเลขที่มากกว่า 0)",
      })
      continue
    }
    if (Number.isNaN(rawQuantity) || rawQuantity <= 0) {
      rejectedList.push({
        raw: part,
        reason: "จำนวนสินค้าไม่ถูกต้อง (ต้องมากกว่า 0)",
      })
      continue
    }
    orders.push({
      id: rawId,
      name: rawNameItem,
      price: rawPrice,
      quantity: rawQuantity,
    })
  }
  return ({
    orders: orders,
    rejectedItems: rejectedList
  })
}

export function generateReport(result: ParseResult): Report {
  let totalRevenue: number = 0;
  const revenueByBranch: BranchSummary[] = [];
  const rejectedItems: RejectedItem[] = result.rejectedItems;
  const branchMap: Record<string, number> = {};

  for (const orders of result.orders) {
    totalRevenue += (orders.price * orders.quantity);
    if (!branchMap[orders.id]) {
      branchMap[orders.id] = 0;
    }
    branchMap[orders.id]! += (orders.price * orders.quantity);
  }

  for (const branchId in branchMap) {
    revenueByBranch.push({
      id: branchId,
      totalBranchRevenue: branchMap[branchId]!
    })
  }


  return ({
    totalRevenue: totalRevenue,
    revenueByBranch: revenueByBranch,
    totalRejected: rejectedItems.length,
    rejectedItems: rejectedItems
  })
}
