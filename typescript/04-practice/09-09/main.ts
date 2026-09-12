import { rawWarehouseLogs } from "./rawData"
import { parseWarehouseLog } from "./process"
import { generateWarehouseReport } from "./process"
import { Status } from "./type"
import { type Product } from "./type"
import { type Report } from "./type"


const rawDatas: string[] = rawWarehouseLogs
const result: (Product | null)[] = rawDatas.map((item) => parseWarehouseLog(item))
const logReport: Report = generateWarehouseReport(result)
console.log(logReport);


//TODO refactor code 
//เขียนฟังก์ชันสุดท้าย