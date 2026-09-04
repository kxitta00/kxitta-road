import { SecurityLevel } from "./security-type"
import { type AccountAudit } from "./security-type"
import { type AuditStatus } from "./security-type"

function auditPassword(username: string, pass: string): AccountAudit {

  let cleanUsername: string = username.trim().toLowerCase() ?? "";
  let auditPassword: string = pass.trim() ?? "";
  if (cleanUsername === "" || auditPassword === "")
    return {
      username: cleanUsername,
      securityLevel: SecurityLevel.WEAK,
      hasDuplicateChars: false,
      status: "REJECTED",
    }

  const hasDuplicateChars: boolean = new Set(pass).size < pass.length;

  let securityLevel: SecurityLevel = SecurityLevel.WEAK;
  if (auditPassword.length >= 8 && (hasDuplicateChars === false)) {
    securityLevel = SecurityLevel.STRONG
  } else if (auditPassword.length >= 6) {
    securityLevel = SecurityLevel.MEDIUM;
  }

  let status: AuditStatus = "LOCKED";
  switch (securityLevel) {
    case SecurityLevel.STRONG: status = "APPROVED"; break;
    case SecurityLevel.MEDIUM: status = "APPROVED"; break;
    case SecurityLevel.WEAK: status = "REJECTED"; break;
  }

  return {
    username: cleanUsername,
    securityLevel: securityLevel,
    hasDuplicateChars: hasDuplicateChars,
    status: status,
  }
}

function interactiveLoginSimulator(): void {
  const correctPin: string = "9988";
  let attempts: number = 0;
  while (attempts < 3) {
    const inputPass: string = String(prompt("Enter 4-digital PIN: "));
    if (inputPass === correctPin) {
      console.log("✅ ปลดล็อกสำเร็จ!");
      break;
    } else {
      attempts++;
      console.log(`❌ PIN ผิด! (เหลือโอกาสอีก ${3 - attempts} ครั้ง)`);
    }

  }
  if (attempts === 3)
    console.log("🚨 บัญชีถูกล็อค! กรอกผิดเกิน 3 ครั้ง (LOCKED)");

}

interactiveLoginSimulator()



console.log(auditPassword("  ADMIN_USER  ", "secret99")); // 👈 มี 'e' ซ้ำ แต่ยาว 8 -> MEDIUM, APPROVED
// console.log(auditPassword("  john_doe  ", "admin"));     // 👈 ยาว 5 -> WEAK, REJECTED
// console.log(auditPassword("  alice  ", "Secr1t89"));     // 👈 ยาว 8 ไม่มีตัวซ้ำ -> STRONG, APPROVED
