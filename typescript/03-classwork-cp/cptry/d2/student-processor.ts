import { Status } from "./student-types";
import type { StudentRecord, ScoreValue } from "./student-types";


function formatName(rawList: string): string {
  return rawList.trim().replaceAll("_", " ").replaceAll("-", " ").toUpperCase();
}

async function importStudents(rawList: string[]): Promise<StudentRecord[]> {
  const result: StudentRecord[] = [];

  for (let i = 0; i < rawList.length; i++) {
    let rawTextList: string = rawList[i] ?? "";

    const parts: string[] = rawTextList.split("|")
    const rawId: string = parts[0]?.trim()!;
    const cleaned: string = formatName(parts[1] ?? "");
    const rawScore: ScoreValue = Number((parts[2]?.trim()));
    let finalScore: ScoreValue = null;

    let isPassed: boolean = false
    let status: Status = Status.FAIL
    if (!isNaN(rawScore)) {
      finalScore = rawScore
      if (finalScore >= 50) {
        status = Status.PASS
        isPassed = true
      }
    } else {
      finalScore = null
      status = Status.UNKNOWN
    }

    result.push({
      studentId: rawId,
      fullName: cleaned,
      score: finalScore,
      status: status,
      isPassed: isPassed,
    })
  }
  await Bun.write("students.json", JSON.stringify(result, null, 2));

  return result;
}

const rawData = [
  " STD-01 | somchai_prasert-sci | 85 ",
  " STD-02 | john_doe-art | 45 ",
  " STD-03 | anna_lee | absent " // 👈 คนนี้ขาดสอบ (ไม่ใช่ตัวเลข)
];

importStudents(rawData)
console.log("🎉 บันทึกเป็นไฟล์ students.json สำเร็จเรียบร้อย!");



