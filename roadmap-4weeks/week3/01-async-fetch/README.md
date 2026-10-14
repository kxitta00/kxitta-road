# Quest 3.1 & 3.2 — Promise, `async / await` และ Fetch API

บันทึกสรุปความเข้าใจเรื่องการทำงานแบบ Asynchronous และการดึงข้อมูลจาก Network

---

## 1. ทำไมต้องมี Asynchronous? (Sync vs Async)

- **Synchronous (โค้ดปกติ):** ทำงานทีละบรรทัดจากบนลงล่าง บรรทัดที่ 1 ต้องเสร็จก่อนถึงจะทำบรรทัดที่ 2
- **ปัญหาเมื่อเจอ Network:** การยิงขอข้อมูลข้ามอินเทอร์เน็ตต้องใช้เวลา ถ้าเขียนแบบ Sync หน้าเว็บจะค้าง (Freeze) เมาส์จะกดอะไรไม่ได้
- **Asynchronous (วิธีแก้):** สั่งยิงคำขอออกไปก่อน แล้วให้เบราว์เซอร์ไปทำงานอื่นต่อได้ พอข้อมูลมาถึงเมื่อไหร่ ค่อยย้อนกลับมาประมวลผล

---

## 2. Mental Model: "เพจเจอร์รอคิวร้านกาแฟ" (The Promise)

เมื่อเราสั่งคำสั่งที่ต้องรอข้อมูล (เช่น `fetch()`) สิ่งที่ JavaScript ส่งคืนมาให้ทันทีไม่ใช่ "ข้อมูลสินค้า" แต่คือ **"เพจเจอร์รอคิว (Promise)"**

Promise มี 3 สถานะเสมอ:
1. **`pending` (กำลังรอ):** กาแฟกำลังชง / ข้อมูลกำลังเดินทางข้ามโลก (นี่คือสิ่งที่คุณเห็นตอนสั่ง `console.log(result)` โดยไม่ใส่ `await`)
2. **`fulfilled` (สำเร็จ):** กาแฟเสร็จแล้ว / ได้รับข้อมูล HTTP Response เรียบร้อย
3. **`rejected` (ล้มเหลว):** เครื่องสั่นเตือนว่าของหมด / เน็ตหลุด / ต่อ Server ไม่ติด

---

## 3. ทำไมการดึงข้อมูลด้วย `fetch` ต้องมี 2 `await`?

การดึงข้อมูลจริงมี 2 ขั้นตอนเสมอ:

```typescript
// สเต็ปที่ 1: รอรับ "กล่องพัสดุ" จากรหัสไปรษณีย์ Network (ได้ HTTP Response)
const response = await fetch("https://dummyjson.com/products/1");

// สเต็ปที่ 2: รอ "แกะกล่องพัสดุ" เพื่อแปลงเนื้อหา Stream ให้ออกมาเป็น Object ข้อมูลจริง
const data = await response.json();
```

---

## 4. Defensive Network Pattern (โค้ดมาตรฐานระดับโปรดักชัน)

การคุยกับ Network ห้ามสมมติว่าโลกจะสวยงามตลอดเวลา ต้องดักจับความผิดพลาด 2 ชั้นเสมอ:

```typescript
async function fetchSafeProduct(id: number) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    // ด่านที่ 1: ตรวจสอบสถานะ HTTP (เช่น 404 หาไม่เจอ หรือ 500 เซิร์ฟเวอร์พัง)
    if (!res.ok) {
      throw new Error(`HTTP Error: status ${res.status}`);
    }

    // ด่านที่ 2: แปลงข้อมูลเมื่อมั่นใจว่าสำเร็จ 100%
    const data = await res.json();
    return data;
  } catch (error) {
    // ด่านที่ 3: ดักจับกรณีเน็ตหลุด, สายแลนหลุด หรือพิมพ์ URL ผิด
    console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
    return null;
  }
}
```
