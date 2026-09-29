import { parseRawOrders, sumOrders } from "./engine";
import { type Order, type Report, Status } from "./types";
import { rawCoffeeOrders } from "./rawData";

const orders: Order[] = (parseRawOrders(rawCoffeeOrders));
const reports: Report = (sumOrders(orders));
console.log(reports);
