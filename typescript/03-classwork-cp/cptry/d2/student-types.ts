export enum Status {
  PASS = "PASS",
  FAIL = "FAIL",
  UNKNOWN = "UNKNOWN",
}

export type ScoreValue = number | null;

export interface StudentRecord {
  studentId: string,
  fullName: string,
  score: ScoreValue,
  status: Status,
  isPassed: boolean,
}


