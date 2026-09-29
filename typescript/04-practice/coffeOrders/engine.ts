import { type Report, type Order, Status } from "./types";
import { rawCoffeeOrders } from "./rawData";


export function parseRawOrders(rawOrders: string[]): Order[] {
  const cleanOrders: Order[] = []
  for (const order of rawOrders) {
    let parts: string[] = order.split("|");
    let rawStatus: string = parts[4]?.trim().toUpperCase() ?? "";
    let status: Status = Status.UNKNOW;
    if (rawStatus === "COMPLETED") {
      status = Status.COMPLETED;
    } else if (rawStatus === "PENDING") {
      status = Status.PENDING
    }
    cleanOrders.push({
      id: parts[0]?.trim() ?? "",
      name: parts[1]?.toUpperCase()?.trim() ?? "",
      quantity: Number(parts[2]),
      price: Number(parts[3]),
      status: status,
    })
  }

  return cleanOrders
}


export function sumOrders(orders: Order[]): Report {
  let invalidOrderCount: number = 0;
  let validOrderCount: number = 0;
  let totalRevenue: number = 0;
  for (const item of orders) {
    if (item.price <= 0 || item.quantity <= 0 || Number.isNaN(item.price) || Number.isNaN(item.quantity) || item.status !== Status.COMPLETED) {
      invalidOrderCount++
      continue
    }
    validOrderCount++
    totalRevenue += (item.quantity * item.price)

  }

  return ({
    invalidOrderCount: invalidOrderCount,
    validOrderCount: validOrderCount,
    totalRevenue: totalRevenue,
  })
}
