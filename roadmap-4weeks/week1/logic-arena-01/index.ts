import { rawSalesLog } from "./rawData";
import type { OrderItem, BranchSummary, Report, ParseResult } from "./types";
import { parseLog, generateReport } from "./process";

const orders: ParseResult = parseLog(rawSalesLog);
const report: Report = generateReport(orders);
console.log(report);

