# Workshop 3.3: UI State & Defensive Data Fetching

บันทึกสรุปความเข้าใจและการแก้ปัญหาจริง จากการสร้าง User Profile Fetcher ด้วยมือเปล่า

---

## 1. แก่นความรู้สำคัญที่ได้ (Key Takeaways)

### วงจร 3 สถานะของ Network UI (The Holy Trinity of UI States)
การคุยกับเซิร์ฟเวอร์ต้องคุม 3 ช่วงเวลาให้เด็ดขาด:
1. **Loading:** แจ้งเตือนผู้ใช้ว่าระบบกำลังทำงาน พร้อมสั่ง `btn.disabled = true` เพื่อตัดวงจรไม่ให้ผู้ใช้กดย้ำ (ป้องกัน Race Condition)
2. **Error:** หากเกิดข้อผิดพลาด (เช่น 404, เน็ตหลุด) ต้องแสดงป้ายเตือน และคืนค่า `btn.disabled = false`
3. **Success:** เมื่อได้ข้อมูลสมบูรณ์ นำข้อมูลไปหยอดใส่ DOM และคืนค่า `btn.disabled = false`

### เทคนิค Reset-First Pattern
ก่อนจะเปลี่ยนสถานะ ให้สั่งซ่อนทุกกล่องก่อนเสมอ:
- สั่งใส่ `.hidden` ให้ทั้ง `#loading`, `#error`, และ `#success`
- จากนั้นค่อยสั่ง `.classList.remove("hidden")` ให้เฉพาะกล่องที่ต้องการแสดงในรอบนั้น ทำให้สถานะไม่ทับซ้อนกัน

---

## 2. จุดพังและบทเรียนที่เจอจริง (Failure Points & Gotchas)

### บั๊กที่ 1: CSS Specificity Trap (ID ชนะ Class)
- **อาการ:** กล่อง `#success` โผล่มาตั้งแต่เปิดหน้าเว็บ ทั้งๆ ที่ติดคลาส `.hidden` อยู่
- **สาเหตุ:** Selector แบบ ID (`#success`) มีค่าน้ำหนักสูงกว่า Class (`.hidden`) ทำให้คำสั่ง `display: flex;` ใน `#success` ไปทับ `display: none;` ของ `.hidden`
- **วิธีแก้:** กำหนดให้ Utility Class มีอำนาจสูงสุดด้วย `.hidden { display: none !important; }`

### บั๊กที่ 2: ห้ามใส่จุดใน `classList`
- ใน CSS ต้องมีจุด เช่น `.hidden`
- แต่ใน JavaScript เมธอด `classList.add("hidden")` หรือ `remove("hidden")` **ห้ามใส่จุดนำหน้าเด็ดขาด** เพราะตัวฟังก์ชันรู้ประเภทอยู่แล้ว

### บั๊กที่ 3: ลำดับการตรวจ Status ของ Network
- ห้ามแกะ `await res.json()` ก่อนตรวจ `res.ok`
- ต้องตรวจ `if (!res.ok) throw new Error(...)` ก่อนเสมอ เพื่อสกัดกั้น Error 404/500 ไม่ให้หลุดไปแสดงผลเป็น Success

### บั๊กที่ 4: การเข้าถึง `.message` ของ Error ใน TypeScript
- ตัวแปรใน `catch (error)` มี Type เป็น `unknown`
- ต้องใช้ `error instanceof Error ? error.message : "ข้อความสำรอง"` เพื่อตรวจสอบก่อนอ่านค่า ป้องกันระบบแครช

---

## 3. Workflow การบิวด์
- ใช้คำสั่ง Bundle จาก TypeScript สู่ JavaScript สำหรับเบราว์เซอร์:
  ```bash
  bun build ./app.ts --outfile ./app.js
