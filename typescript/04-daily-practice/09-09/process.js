// typescript/04-daily-practice/09-09/process.ts
function cleanData(rawLog) {
  return rawLog.trim().split("|");
}
function parseWarehouseLog(rawLog) {
  const parts = cleanData(rawLog);
  const rawId = parts[0]?.trim() ?? "";
  const rawProductName = parts[1]?.trim() ?? "";
  const rawQuantity = Number(parts[2]?.trim());
  const rawUnitPrice = Number(parts[3]?.trim());
  const rawStatus = parts[4]?.trim() ?? "";
  if (isNaN(rawQuantity) || isNaN(rawUnitPrice) || rawUnitPrice <= 0 || rawQuantity <= 0) {
    return null;
  }
  let status = "CANCELLED" /* CANCELLED */;
  switch (rawStatus) {
    case "PAID":
      status = "PAID" /* PAID */;
      break;
    case "PENDING":
      status = "PENDING" /* PENDING */;
      break;
    case "REFUNDED":
      status = "REFUNDED" /* REFUNDED */;
      break;
  }
  return {
    id: rawId,
    productName: rawProductName,
    quantity: rawQuantity,
    unitPrice: rawUnitPrice,
    status
  };
}
function generateWarehouseReport(product) {
  const validProducts = product.filter((p) => p !== null);
  const totaLogs = product.length;
  const validLogs = validProducts.length;
  const corruptedLogs = totaLogs - validLogs;
  const paidOrders = validProducts.filter((p) => p.status === "PAID" /* PAID */);
  const revenues = paidOrders.map((item) => item.quantity * item.unitPrice);
  let totalRevenue = 0;
  for (const rev of revenues) {
    totalRevenue += rev;
  }
  const PAID = paidOrders.length;
  const PENDING = validProducts.filter((p) => p.status === "PENDING" /* PENDING */).length;
  const CANCELLED = validProducts.filter((p) => p.status === "CANCELLED" /* CANCELLED */).length;
  const REFUNDED = validProducts.filter((p) => p.status === "REFUNDED" /* REFUNDED */).length;
  return {
    totalLogs: totaLogs,
    validLogs,
    corruptedLogs,
    totalRevenue,
    statusSummary: {
      PAID,
      PENDING,
      CANCELLED,
      REFUNDED
    },
    paidOrders
  };
}
export {
  parseWarehouseLog,
  generateWarehouseReport,
  cleanData
};
