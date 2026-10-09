# TS Logic Arena #1: Multi-Store Sales Ingestion & Anomaly Detection

บันทึกสรุปการสร้าง Data Pipeline สำหรับประมวลผลข้อความดิบ (Raw String), การทำ Data Sanitization, และการคำนวณข้อมูลหลายมิติด้วย Pure TypeScript 100%

---

## 1. ภาพรวมภารกิจ (Mission Overview)
- **โจทย์:** จำลองระบบ Backend ประมวลผล Log ยอดขายสาขาประจำวันจากเครื่อง POS
- **เป้าหมาย:** 
  1. ชำระล้างข้อมูลดิบ (Sanitize & Normalize)
  2. ดักจับและแยกของเสียพร้อมระบุเหตุผล (Audit Trail)
  3. จัดกลุ่มและรวมยอดขายตามสาขา (Multi-Dimensional Grouping)

---

## 2. สถาปัตยกรรมของระบบ (System Architecture)
โปรเจกต์นี้ใช้หลักการ **Separation of Concerns (แยกหน้าที่ชัดเจน)** แบ่งออกเป็น 4 โมดูล:
- `rawData.ts`: จำลอง Data Stream / Log จากภายนอก
- `types.ts`: ออกแบบ Type Contract (`OrderItem`, `RejectedItem`, `ParseResult`, `BranchSummary`, `Report`)
- `process.ts`: ท่อประมวลผล Pure Functions (`parseLog`, `generateReport`)
- `index.ts`: จุดเริ่มต้นการทำงาน (Entry Point)

---

## 3. สิ่งที่ได้เรียนรู้และเครื่องมือสำคัญ (Key Concepts & Tooling)

### 3.1 การชำระล้างและจัดระเบียบข้อมูล (Sanitization & Normalization)
- `.trim()`: กำจัดช่องว่างส่วนเกินที่หัวและท้ายของข้อความ
- `.split()`: ใช้แยกบรรทัดด้วย `\n` และแยกคอลัมน์ด้วย `|`
- `.toUpperCase()`: ปรับรหัสสาขาให้เป็นตัวพิมพ์ใหญ่มาตรฐานเดียวกัน ป้องกันบั๊ก `"bkk-01"` แยกสาขากับ `"BKK-01"`

### 3.2 กลยุทธ์ Fail-Fast ด้วย Defensive Guard Clauses
แทนที่จะเขียน `if-else` ซ้อนกันลึกๆ เราใช้ Guard Clauses ดักจับสิ่งผิดปกติแล้วดีดออกทันที (`continue`):
1. ตรวจสอบบรรทัดว่าง (`part === ""`)
2. ตรวจสอบคอลัมน์ไม่ครบ (`rawData.length < 4`)
3. ตรวจสอบราคา (`Number.isNaN(rawPrice) || rawPrice <= 0`)
4. ตรวจสอบจำนวน (`Number.isNaN(rawQuantity) || rawQuantity <= 0`)

### 3.3 การทำ Audit Trail สำหรับของเสีย
ในระบบจริง การบอกแค่ตัวเลขนับไม่เพียงพอ เราต้องเก็บทั้ง **ข้อความต้นฉบับทั้งบรรทัด (`raw: part`)** และ **สาเหตุที่ปฏิเสธ (`reason`)** เพื่อให้ฝ่ายตรวจสอบสามารถนำไปตรวจสอบย้อนหลังได้จริง

### 3.4 การจัดกลุ่มข้อมูลหลายมิติด้วย Hash Map (Record Pattern)
- **เลิกใช้ `switch/case`:** เพราะเป็นการ Hardcode สาขาตายตัว ไม่ยืดหยุ่นเวลามีสาขาใหม่เปิดเพิ่มในระบบจริง
- **การใช้ `Record<K, V>` (TypeScript Map Structure):** 
  - ใช้ `branchMap: Record<string, number>` สร้างตู้ล็อกเกอร์ Key-Value ที่มี Key เป็นชื่อสาขา (`string`) และ Value เป็นยอดเงินสะสม (`number`)
  - รวบการบวกยอดเหลือบรรทัดเดียวด้วย: `branchMap[id] = (branchMap[id] ?? 0) + lineTotal`
- **การใช้ `for...in` (Object Traversal):**
  - เรียนรู้ความต่างระหว่าง `for...of` (ใช้เดินผ่านสมาชิกใน Array) และ `for...in` (ใช้เดินเปิดกุญแจอ่านชื่อ Key ใน Object)
  - วนลูปหยิบชื่อสาขา (`branchId`) และยอดเงิน (`branchMap[branchId]`) แปลงกลับเป็น Array เพื่อส่งออกในรายงาน

---

## 4. บันทึกจุดพังจริงและการแก้ไข (Post-Mortem & Bug Fixes)

1. **ปัญหา Scope ของตัวแปรในลูป:**
   - *จุดผิด:* ประกาศ `const branchMap = {}` ไว้ข้างในลูป ทำให้ทุกรอบสร้างกระเป๋าใหม่ ยอดเงินไม่สะสม
   - *วิธีแก้:* ยกตัวแปรออกไปประกาศข้างนอกลูป เพื่อให้เป็นกระเป๋ารับเงินสะสมตลอดการวนลูป
2. **การวนลูปซ้ำซ้อน (Redundant Iteration):**
   - *จุดผิด:* วนลูปก๊อปปี้ `rejectedItems` ซ้ำ และใช้ลูปนับ `totalRejected`
   - *วิธีแก้:* ใช้ `result.rejectedItems.length` ได้ผลลัพธ์ใน O(1) ทันที และส่งต่อ Array ได้โดยตรง
3. **การเข้าถึง Array ก่อนตรวจสอบความยาว (Fail-Fast Violation):**
   - *จุดผิด:* พยายามแปลง `rawData[3]` เป็นตัวเลขก่อนตรวจว่ามีครบ 4 คอลัมน์หรือไม่
   - *วิธีแก้:* ตรวจ `rawData.length < 4` เป็นอันดับแรกสุดก่อนดึงค่า
