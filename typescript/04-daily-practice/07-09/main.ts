import type { Student, SumReport } from "./type"
import { rawData } from "./rawData"

function cleanData(rawStudent: string): Student[] {
  let parts: string[] = rawStudent.split(",");
  let rawObjects = parts.map((item) => {
    const lines = item.split(":");
    const name = lines[0]?.trim().toUpperCase() ?? "";
    const score = Number(lines[1]?.trim());
    return { name, score }
  })

  let result = rawObjects.filter((raw) => raw.score >= 0 && raw.score <= 100)
  return result
}

const cleanDatas: Student[] = cleanData(rawData)

function generateReport(students: Student[]): SumReport {
  let ACount: number = students.filter((a) => a.score >= 80).length;
  let BCount: number = students.filter((b) => b.score >= 70 && b.score < 80).length;
  let CCount: number = students.filter((c) => c.score >= 60 && c.score < 70).length;
  let DCount: number = students.filter((d) => d.score >= 50 && d.score < 60).length;
  let FCount: number = students.filter((f) => f.score >= 0 && f.score < 50).length;
  let pass: number = students.filter((p) => p.score >= 50).length;
  let fail: number = students.filter((fC) => fC.score < 50).length;

  return {
    totalProcesses: students.length,
    gradeDistribution: {
      A: ACount,
      B: BCount,
      C: CCount,
      D: DCount,
      F: FCount,
    },
    passedCount: pass,
    failedCount: fail,
  }
}

console.log(generateReport(cleanDatas));


