# 01-box-model (สัปดาห์ที่ 1)

หัวข้อหลัก: ทำความเข้าใจ Box Model, หน่วยวัด (Units), และพื้นฐาน Typography

---

## หัวใจสำคัญของ Box Model

กล่องทุกกล่องบนหน้าเว็บประกอบด้วย 4 ชั้น (จากในออกนอก):

1. **Content:** ข้อความ รูปภาพ หรือข้อมูลข้างในกล่อง (กำหนดขนาดด้วย `width`, `height`)
2. **Padding:** พื้นที่ว่างด้านในกล่อง คั่นระหว่าง Content กับ Border
3. **Border:** เส้นขอบของกล่อง
4. **Margin:** พื้นที่ว่างด้านนอกกล่อง คั่นระหว่างกล่องนี้กับกล่องอื่น

---

## กฎเหล็กที่ต้องจำ: `box-sizing: border-box`

ใน CSS เริ่มต้น กล่องจะเป็น `content-box` (ถ้าใส่ width: 200px แล้วบวก padding: 20px กล่องจะบวมกลายเป็น 240px)

วิธีแก้ไขตามมาตรฐานสากล: ใส่กฎนี้ไว้บนสุดของไฟล์ CSS เสมอ
```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```
เมื่อใช้ `border-box` ขนาด `width: 200px` จะเป็นขนาดรวมทั้งหมดของกล่อง ไม่บวมออก

---

## แบบฝึกหัดทดลองทำ
1. เปิด [index.html](file:///home/kxitta/lernTs/html-css/01-box-model/index.html) บนเว็บเบราว์เซอร์
2. ลองปรับค่าใน [style.css](file:///home/kxitta/lernTs/html-css/01-box-model/style.css):
   - เปลี่ยนค่า `padding` ในคลาส `.box-content`
   - ปรับความหนาของ `border`
   - ลองเปลี่ยนหน่วยจาก `px` เป็น `rem`
