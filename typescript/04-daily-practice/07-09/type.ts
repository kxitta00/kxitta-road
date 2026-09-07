export type Student = {
  name: string,
  score: number,
}

export type SumReport = {
  totalProcesses: number, //จำข้อมูลที่คลีนสำเร็จและถูกต้อง
  gradeDistribution: {
    A: number,
    B: number,
    C: number,
    D: number,
    F: number,
  }
  passedCount: number, //จำนวนคนที่ได้เกรด ABCD
  failedCount: number, //จำนวนคนสอบตก F
}



