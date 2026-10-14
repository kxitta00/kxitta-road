# Form Events & Browser Default Prevention (Quest 1.5)

บันทึกสรุปการทดลองและกลไกสำคัญของ Web Form ในยุค Modern Web Development ด้วย HTML5 และ TypeScript

---

## 1. ภาพรวมเควส (Quest Overview)
- **โจทย์:** มินิเควสเจาะลึกพฤติกรรมของ Form Events ในสัปดาห์ที่ 1
- **วัตถุประสงค์:** ทำความเข้าใจพฤติกรรมดั้งเดิมของเบราว์เซอร์ (Default Form Behavior) และวิธีควบคุมกระบวนการส่งข้อมูลด้วย TypeScript เพื่อไม่ให้กระทบต่อ State บนหน้าเว็บ

---

## 2. จุดพังจริงและที่มาทางประวัติศาสตร์ (The Mental Model)

### 2.1 ทำไมหน้าเว็บถึงรีเฟรชเองเมื่อกด Submit? (Page Reload Trap)
- ในยุคเว็บยุคแรก (Web 1.0 ปี 1995) เว็บยังไม่มี Single Page Application (SPA) หรือ React
- หน้าที่ดั้งเดิมของ `<form>` คือ: เมื่อผู้ใช้กดปุ่ม Submit เบราว์เซอร์จะรวบรวมค่าใน input ทั้งหมด ส่งเป็น HTTP Request ไปที่ Server แล้ว **Server จะส่ง HTML หน้าใหม่กลับมาให้เบราว์เซอร์โหลดใหม่ทั้งหน้า (Full Page Reload)**
- **จุดพังในเว็บยุคใหม่:** ถ้าหน้าเว็บรีโหลด ตัวแปรใน JavaScript/TypeScript ทั้งหมดจะถูกล้างทิ้งกลับเป็นค่าเริ่มต้น ข้อมูลที่เพิ่งแสดงบนจอจะหายวับไปทันที

### 2.2 อาวุธสกัดกั้น: `e.preventDefault()`
- คำสั่งนี้คือการสั่งให้เบราว์เซอร์ **"หยุดการกระทำดั้งเดิม (Default Action)"** ของ Event นั้นๆ
- ทำให้หน้าเว็บไม่รีเฟรช และเปิดทางให้ TypeScript จัดการข้อมูล, ตรวจสอบความถูกต้อง (Validation), หรือส่งข้อมูลผ่าน Fetch API ไปยังเซิร์ฟเวอร์ได้อย่างราบรื่น

---

## 3. สรุปความต่างของ Form Events

| Event | องค์ประกอบที่ใช้ | พฤติกรรมการทำงาน | เหมาะกับงานแบบไหน |
| :--- | :--- | :--- | :--- |
| **`submit`** | `<form>` (ไม่ใช่ปุ่ม) | ทำงานเมื่อกดปุ่ม Submit หรือกด Enter ในช่องกรอก | การส่งฟอร์ม, การบันทึกข้อมูล |
| **`change`** | `<select>`, `<input>` | ทำงานเมื่อค่าเปลี่ยน "เสร็จสมบูรณ์" (Dropdown เลือกเสร็จ หรือพิมพ์เสร็จแล้วคลิกออกข้างนอก) | Dropdown เลือกหมวด, Checkbox, Radio |
| **`input`** | `<input>`, `<textarea>` | ทำงานแบบ **Real-time ทุกครั้งที่กดคีย์บอร์ด 1 ตัวอักษร** | ช่องค้นหา (Search Bar), การเช็กความยาวรหัสผ่านสด |

---

## 4. เทคนิคและคำสั่งสำคัญ (Key Techniques)

### 4.1 Type Casting สำหรับ Form Controls
```typescript
const userForm = document.getElementById('user-form') as HTMLFormElement;
const usernameInput = document.getElementById('username-input') as HTMLInputElement;
const roleSelect = document.getElementById('role-select') as HTMLSelectElement;
```

### 4.2 การอ่านค่าและข้อควรระวัง
- **สิ่งที่ถูกต้อง:** `usernameInput.value` เพื่อดึงข้อความข้างในช่องกรอก
- **ข้อผิดพลาดคลาสสิก:** การใส่ `${usernameInput}` ตรงๆ จะได้ข้อความ `[object HTMLInputElement]` แทนค่าที่ผู้ใช้กรอก

### 4.3 การล้างข้อมูลด้วย `form.reset()`
- เมธอด Built-in ของ `HTMLFormElement` ที่ใช้รีเซ็ตค่าในทุก input และ select ในฟอร์มกลับไปเป็นค่าเริ่มต้นในบรรทัดเดียว
