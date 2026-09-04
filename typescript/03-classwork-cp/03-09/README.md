# สรุปเนื้อหาคลาส Computer Programming (CP) — วันที่ 03-09-2026

บันทึก 5 หัวข้อสำคัญที่ได้เรียนรู้และฝึกฝนในคลาสประจำสัปดาห์:

---

## 1. Class (แม่แบบสร้าง Object ตามแนวคิด OOP)
- **นิยาม:** พิมพ์เขียว (Blueprint) ที่รวมทั้งข้อมูล (Properties) และฟังก์ชันการทำงาน (Methods) ไว้ด้วยกัน เพื่อนำไปสร้าง Instance ของ Object
- **องค์ประกอบหลัก:**
  - `constructor`: ฟังก์ชันกำหนดค่าเริ่มต้นที่จะทำงานทันทีเมื่อสร้าง Object ด้วยคำสั่ง `new`
  - Access Modifiers (`public`, `private`, `protected`): ควบคุมการเข้าถึงข้อมูลจากภายนอก
- **ความสำคัญ:** เป็นรากฐานสู่การเรียนวิชา Data Structures เช่น การสร้าง Class สำหรับ Node, LinkedList, Stack, Queue

---

## 2. Arrow Function (`() => {}`)
- **นิยาม:** ไวยากรณ์ฟังก์ชันลูกศรของ Modern JavaScript / TypeScript
- **จุดเด่น:**
  - รูปแบบย่อ (Implicit Return): เมื่อมีคำสั่งเดียวสามารถคืนค่าได้ทันทีโดยไม่ต้องเขียน `return` หรือปีกกา `{}` เช่น `x => x * 2`
  - คืนค่า Object Literal: ต้องใส่วงเล็บครอบปีกกา เช่น `x => ({ id: x })`
  - Lexical `this`: ไม่สร้าง context ของ `this` ขึ้นมาใหม่ แต่จะอ้างอิงตามขอบเขตรอบนอก
- **ความสำคัญ:** ใช้เป็น Callback หลักใน Array Methods (`.filter()`, `.map()`, `.reduce()`) และ Event Listener

---

## 3. Closure (โคลเชอร์)
- **นิยาม:** กลไกที่ฟังก์ชันภายใน (Inner Function) ยังคงจดจำและเข้าถึงตัวแปรในขอบเขตของฟังก์ชันภายนอก (Lexical Scope) ได้เสมอ แม้ว่าฟังก์ชันภายนอกจะทำงานเสร็จสิ้นและคืนค่ากลับไปแล้ว
- **ประโยชน์:**
  - Data Encapsulation: สร้างตัวแปรที่ซ่อนเป็น Private ให้แก้ไขได้ผ่านเฉพาะฟังก์ชันที่เตรียมไว้เท่านั้น
  - Function Factory: การสร้างฟังก์ชันที่มีพฤติกรรมเฉพาะตามค่าที่ส่งเข้าไปตั้งต้น

---

## 4. Built-in Functions (ฟังก์ชันมาตรฐานของภาษา)
- **นิยาม:** ฟังก์ชันและเมธอดที่ TypeScript / JavaScript เตรียมมาให้พร้อมใช้งานในตัวระบบโดยไม่ต้องเขียนขึ้นมาใหม่
- **หมวดหมู่หลัก:**
  - **Array Methods:** `.push()`, `.pop()`, `.slice()`, `.includes()`, `.indexOf()`, `.filter()`, `.map()`, `.reduce()`
  - **String Methods:** `.trim()`, `.toLowerCase()`, `.toUpperCase()`, `.split()`, `.replace()`
  - **Math Utilities:** `Math.floor()`, `Math.ceil()`, `Math.max()`, `Math.min()`, `Math.random()`
  - **Global Utilities:** `parseInt()`, `parseFloat()`, `isNaN()`

---

## 5. Imperative Programming (การเขียนโปรแกรมเชิงคำสั่ง)
- **นิยาม:** กระบวนทัศน์การเขียนโปรแกรมที่เน้นสั่งงานคอมพิวเตอร์ทีละขั้นตอนอย่างละเอียด (How to do)
- **ลักษณะเด่น:**
  - ควบคุม State และรอบการทำงานด้วยตนเอง เช่น `for (let i = 0; i < n; i++)`
  - มีการเปลี่ยนแปลงค่าตัวแปรสะสมตลอดเวลา (Mutating State)
- **เปรียบเทียบกับ Declarative:**
  - Imperative: อธิบายทีละก้าวว่าจะทำอย่างไร (How)
  - Declarative: อธิบายว่าต้องการผลลัพธ์ข้อมูลอะไร (What) เช่น การใช้ `.filter().map()`
- **ความสำคัญ:** ช่วยให้เข้าใจการทำงานของหน่วยความจำและ CPU ก่อนนำไปวิเคราะห์ความซับซ้อนของอัลกอริทึม (Time & Space Complexity)

---

## 6. OpenTUI + SolidJS (Terminal User Interface)
- **นิยาม:** การสร้างหน้าจอผู้ใช้งานในเทอร์มินัล (TUI - Terminal User Interface) โดยนำปรัชญาของ **SolidJS** (Reactive Framework) มาใช้จัดการสถานะและวาด UI บน Terminal
- **ความเชื่อมโยงกับ Web:** แนวคิดเดียวกับการเขียน Frontend ยุคใหม่ (Component-based + Reactive State) แต่แสดงผลใน Terminal แทนเว็บบราวเซอร์

---

## 7. Lifecycle Hooks: `onMount` และ `onCleanup`
- **`onMount` (เมื่อ Component เริ่มทำงาน):**
  - ฟังก์ชันที่จะถูกเรียกทำงานเพียง **1 ครั้ง** ทันทีที่ Component ถูกประกอบและวาดขึ้นสู่หน้าจอ (Mount) เรียบร้อยแล้ว
  - ใช้สำหรับ: การเริ่มต้นตั้งเวลา (Interval/Timer), การดึงข้อมูล (Fetch), การลงทะเบียนรับการกดปุ่ม (Key Listener) หรือเตรียมค่า Renderer
- **`onCleanup` (onclear / ทำความสะอาดเมื่อ Component สิ้นสุด):**
  - ฟังก์ชันที่จะถูกเรียกทำงานเมื่อ Component กำลังจะถูกทำลายหรือปิดตัวลง (Unmount)
  - ใช้สำหรับ: การยกเลิก Timer (`clearInterval`), การถอด Event Listener, การคืนค่า Terminal สู่สภาวะปกติ (เช่น เปิด cursor คืนมา) เพื่อป้องกันปัญหา Memory Leak

---

## 8. การอ่าน Official Documentation
- **ทักษะสำคัญของ Developer:** อาจารย์เน้นย้ำเรื่องการเปิดอ่านเอกสารคู่มือทางการ (Docs) ของไลบรารี เช่น OpenTUI และ SolidJS
- **หัวใจ:** ไม่จำเป็นต้องจำโค้ดได้ทั้งหมด แต่ต้องอ่านเพื่อเข้าใจว่า:
  1. มีคำสั่ง/ฟังก์ชันอะไรให้ใช้บ้าง (API Reference)
  2. วงจรชีวิตของโปรแกรมทำงานอย่างไร (Lifecycle)
  3. ตัวอย่างการนำมาประกอบกัน (Quickstart & Examples)

