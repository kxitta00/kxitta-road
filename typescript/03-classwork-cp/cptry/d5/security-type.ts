export enum SecurityLevel {
  STRONG = "STRONG",
  MEDIUM = "MEDIUM",
  WEAK = "WEAK",
}

export type AuditStatus = "APPROVED" | "REJECTED" | "LOCKED";

export interface AccountAudit {
  username: string,
  securityLevel: SecurityLevel,
  hasDuplicateChars: boolean,
  status: AuditStatus,
}