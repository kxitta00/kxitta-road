# Boba Customizer Card (Solo Boss Fight - Week 1)

การ์ดสั่งเครื่องดื่มชานมไข่มุกแบบ Interactive สร้างขึ้นเพื่อการเรียนรู้ ด้วย **HTML5, Vanilla CSS, และ TypeScript** โดยไม่พึ่งพา Framework หรือไลบรารีภายนอก

---

## 1. ภาพรวมโปรเจกต์ (Project Overview)
- **โจทย์:** Solo Boss Fight สัปดาห์ที่ 1 ของ Roadmap 4 สัปดาห์
- **วัตถุประสงค์:** พิสูจน์ทักษะ 6 เสาหลักของ Frontend Architecture ผ่านการลงมือคิดและเขียนโค้ดโดยมีเอไอเป็นที่ปรึกษา (Box Model, Semantic HTML, Event Handling, State Machine, TypeScript Enums, และ Immutability)
- **ฟีเจอร์หลัก:**
  - สลับเปิด/ปิดปุ่ม Favorite (หัวใจ)
  - ปรับจำนวนแก้วผ่าน Stepper (+ / -) โดยล็อกขั้นต่ำไว้ที่ 1 แก้ว
  - เลือกขนาดแก้ว (Regular vs Large +฿15), ระดับความหวาน, และปริมาณน้ำแข็ง พร้อมสลับสี `.active` แบบแยกหมวดอิสระ
  - คำนวณราคารวมสดแบบเรียลไทม์ (Live Price Calculation)
  - ระบบตรวจสอบข้อมูลก่อนสั่งซื้อ (Guard Clauses)
  - บันทึกรายการลงตะกร้าแบบ Immutable Array พร้อมสุ่ม Order ID ด้วย `crypto.randomUUID()` และรีเซ็ตฟอร์มด้วย `clearUI()`

---

## 2. สิ่งที่ได้เรียนรู้ฝั่ง HTML (Structure & Semantics)

### 2.1 Semantic Web Architecture
- `<article class="boba-card">`: ใช้ครอบการ์ดทั้งหมดเพื่อบอกว่าเป็นชิ้นส่วนคอนเทนต์ที่สมบูรณ์ในตัวเอง
- `<header>`: ใช้ครอบรูปภาพแก้วชานมและป้ายสถานะส่วนบน
- `<section class="option-group">`: แยกหมวดหมู่ตัวเลือกแต่ละกลุ่มออกจากกันอย่างชัดเจน
- `<footer class="card-footer">`: รวมส่วนควบคุมการสั่งซื้อ (Stepper และปุ่มเพิ่มลงตะกร้า)

### 2.2 การแยกบทบาทระหว่าง Class, ID, และ Data Attributes
- **Class (`class="..."`):** ใช้สำหรับงานแต่งสไตล์ CSS ที่นำกลับมาใช้ซ้ำได้ เช่น `.btn-option`, `.option-header`
- **ID (`id="..."`):** ใช้เฉพาะจุดที่ TypeScript ต้องดึงไปเปลี่ยนข้อความหรือคำนวณ เช่น `#size-status`, `#quantity-display`, `#total-price`
- **Data Attributes (`data-*`):** สะพานส่งข้อมูลจาก HTML ไปหา TypeScript:
  - `data-group="size"`: ระบุว่ากลุ่มนี้คือหมวดอะไร
  - `data-value="large"`: ระบุค่าตัวเลือก
  - `data-extra="15"`: ส่งราคาบวกเพิ่มให้ TypeScript ไปคำนวณโดยตรง

---

## 3. สิ่งที่ได้เรียนรู้ฝั่ง CSS (Box Model & Physics)

### 3.1 การควบคุมขอบมนและภาพล้น (`overflow: hidden`)
- กล่องแม่มนด้วย `border-radius: 32px` แต่ชิ้นส่วนลูกข้างในมีมุมฉาก 90 องศา
- การสั่ง `overflow: hidden` ที่กล่องแม่ จะทำหน้าที่เหมือนแม่พิมพ์กรรไกร เฉือนทุกส่วนของลูกที่ยื่นเกินขอบโค้งมนทิ้งโดยอัตโนมัติ

### 3.2 กับดัก Flexbox Stretch (`align-items: stretch`)
- ค่าเริ่มต้นของ Flexbox คือ `align-items: stretch` ซึ่งจะบังคับให้ลูกทุกตัวในแถวยืดสูงเท่ากับตัวที่สูงที่สุด
- แก้ไขด้วยการสั่ง `align-items: flex-start` หรือ `center` เพื่อให้ป้าย Best Seller กับปุ่มหัวใจแยกความสูงเป็นอิสระจากกัน

### 3.3 การป้องกัน Layout Shift ด้วย `min-height` และ `line-height: 1`
- **ปัญหา:** ปุ่ม Large มีป้ายแคปซูล `+15฿` ที่มี padding ทำให้ปุ่ม Large สูงกว่าปุ่ม Regular
- **วิธีแก้ระดับ Design System:**
  - กำหนด `min-height: 44px` ที่ `.btn-option` เพื่อล็อกความสูงขั้นต่ำมาตรฐาน Touch Target ให้เท่ากันทุกปุ่ม
  - ใส่ `line-height: 1` ที่ `.badge-extra` เพื่อตัดช่องว่างล่องหน (Half-Leading) ของฟอนต์ทิ้ง

### 3.4 กับดักฟอนต์ของแท็กปุ่ม (Button Font Inheritance)
- เบราว์เซอร์มีกฎดั้งเดิมคือแท็ก `<button>` จะไม่ยอมสืบทอดฟอนต์จาก `body`
- ต้องสั่ง CSS Reset: `button { font-family: inherit; }` เพื่อดึงฟอนต์ 'Prompt' มาใช้กับปุ่มทุกตัวในหน้าเว็บ

### 3.5 Tactile Feedback (:hover & :active)
- ปุ่มเพิ่มลงตะกร้าใช้สูตร 3 องค์ประกอบ:
  - ยกตัวขึ้น: `transform: translateY(-2px);`
  - เงานุ่มโทนกาแฟ: `box-shadow: 0 8px 20px rgba(44, 29, 17, 0.25);`
  - ยุบตัวเมื่อกดจริง: `:active { transform: translateY(0); }`

---

## 4. สิ่งที่ได้เรียนรู้ฝั่ง TypeScript & DOM (The Brain)

### 4.1 State-Driven UI & Single Source of Truth
- **เลิก Screen Scraping:** ไม่แงะตัวเลขจากหน้าจอมาบวกลบ
- ตัวแปรใน TypeScript คือความจริง (`basePrice`, `extraPrice`, `quantity`)
- หน้าจอมีหน้าที่แค่เป็นกระจกสะท้อนตัวแปรผ่านฟังก์ชันศูนย์กลาง **`updateUI()`**

### 4.2 Radio Button Pattern ด้วย `.closest()`
```typescript
btnOption.forEach((btn) => btn.addEventListener('click', () => {
  // 1. เงยหน้ามองหาบ้านของตัวเอง
  const group = btn.closest<HTMLElement>('.option-group');
  // 2. ล้างสี active เฉพาะเพื่อนในบ้านหลังนี้
  group?.querySelectorAll('.btn-option').forEach(b => b.classList.remove('active'));
  // 3. ทาสี active ให้ตัวเอง
  btn.classList.add('active');
  // 4. อัปเดต State ตามหมวด แล้วเรียก updateUI()
}));
