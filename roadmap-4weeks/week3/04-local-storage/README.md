# Quest 3.4: Safe Web Storage & Generics Engine

บันทึกสรุปบทเรียนและคำถาม-คำตอบเชิงลึกจากการสร้าง Safe Storage Engine ด้วย TypeScript และการทดสอบกลไกบนเบราว์เซอร์จริง

---

## 1. ธรรมชาติของ `localStorage` (Browser API vs Server/CLI)

### บั๊กที่ 1: `ReferenceError: localStorage is not defined`
- **สิ่งที่เจอ:** รันคำสั่ง `bun storage.ts` ใน Terminal แล้วแครช
- **สาเหตุ:** `localStorage` เป็น **Web API** ที่อาศัยอยู่บนเบราว์เซอร์ (`window.localStorage`) เท่านั้น ใน Terminal (Bun / Node.js) เป็นสภาพแวดล้อมฝั่งเซิร์ฟเวอร์ที่ไม่มีหน้าต่างเบราว์เซอร์ จึงไม่มี `localStorage` ให้เรียกใช้
- **วิธีทำงานที่ถูกต้อง:** ต้อง Bundle ผ่าน `bun build ./storage.ts --outfile ./storage.js` แล้วนำไปรันบนเบราว์เซอร์ผ่าน `index.html`

### บั๊กที่ 2: `Cannot use export statement outside a module`
- **สิ่งที่เจอ:** หน้าเว็บขาวสนิท ไม่รันโค้ด
- **สาเหตุ:** ใน `storage.ts` มีคำสั่ง `export function ...` ทำให้ตอน Bundle มีคำว่า `export` ติดไปใน `storage.js` แต่ใน HTML เรียกใช้แบบสคริปต์ธรรมดา `<script src="storage.js" defer></script>`
- **วิธีแก้:** ถ้าเป็น Script รันหน้าเว็บธรรมดา ให้ลบคำว่า `export` ออก หรือถ้าจะใช้ export ต้องใส่ `<script type="module">`

---

## 2. กับดักระดับ Production ของ `localStorage`

### กับดักที่ 1: อาการ `[object Object]` (The Stringify Trap)
- `localStorage` เก็บได้เฉพาะ **"ข้อความ (String)"** เท่านั้น
- ถ้าส่ง Object `{ id: 1, name: "Emily" }` เข้าไปตรงๆ เบราว์เซอร์จะสั่ง `.toString()` จนกลายเป็นข้อความ `"[object Object]"` ข้อมูลจริงจะสูญหายทันที
- **ทางแก้:** 
  - **ขาเข้า:** ต้องแปลง Object เป็น JSON String ด้วย `JSON.stringify(data)` ก่อนเซฟ
  - **ขาออก:** ดึง String กลับมาแล้วแกะกล่องด้วย `JSON.parse(raw)`

### กับดักที่ 2: ระเบิดเวลา `JSON.parse` (Corrupted Data)
- **คำถาม:** *"เราจะรู้ได้ยังไงว่าข้อมูลขยะจะมาในรูปแบบไหน?"*
- **คำตอบ:** **เราไม่มีวันรู้ล่วงหน้า และไม่ต้องพยายามไปเดา** ข้อมูลขยะอาจมาในรูปข้อความขาดวิ่น เช่น `"{ id: 1, name: "` หรือข้อมูลเน่าเสีย
- สิ่งเดียวที่เรารู้คือ **ถ้าข้อมูลพัง `JSON.parse()` จะระเบิด Fatal SyntaxError ทันที** ทำให้หน้าเว็บดับทั้งหน้า
- **ทางแก้:** ใช้หลักการ **The Safety Net (ตาข่ายนิรภัย `try...catch` + ค่าสำรอง `fallback`)**

---

## 3. ผ่าโครงสร้าง `loadStorage`: ทำไมมี Fallback 2 ที่?

```ts
function loadStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    
    // ที่ที่ 1: กรณี "ไม่มีของ / ตู้ว่างเปล่า" (ผู้ใช้ใหม่ ไม่เคยเซฟอะไรไว้เลย)
    if (raw === null) {
      return fallback;
    }

    // กรณีมีของ และเป็น JSON ที่สมบูรณ์
    return JSON.parse(raw) as T;

    // ที่ที่ 2: กรณี "มีของ แต่ของเน่า/ข้อมูลพัง" (JSON.parse ระเบิด)
  } catch (error) {
    console.warn(`[Storage] ข้อมูลที่คีย์ "${key}" เสียหาย ระบบดึงค่าสำรองมาใช้แทน`);
    return fallback;
  }
}
```

### ความต่างระหว่าง 2 จุดที่ส่ง Fallback:
1. **ใน `try` (`raw === null`):** ผู้ใช้เพิ่งเปิดเว็บครั้งแรก ตู้จดหมายว่างเปล่า ไม่มีอะไรเสียหาย แค่ไม่มีข้อมูล จึงส่งค่าตั้งต้น (`fallback`) ให้เขาเริ่มใช้งาน
2. **ใน `catch (error)`:** ในตู้มีจดหมาย แต่จดหมายโดนเผาขาดวิ่น อ่านไม่ออก (`JSON.parse` พัง) จึงตกลงตาข่ายนิรภัยเพื่อกู้หน้าเว็บไม่ให้ดับ

---

## 4. ถอดรหัส TypeScript Generics (`<T>`)

### ก. ทำไม `<T>` ต้องอยู่หลังชื่อฟังก์ชัน?
- ฟังก์ชันธรรมดามีวงเล็บ `(...)` ไว้รับ **"ค่า (Values)"**
- ฟังก์ชัน Generics มีเครื่องหมาย `<...>` ไว้รับ **"ประเภทข้อมูล (Types)"**
- `function loadStorage<T>` คือการจองตัวแปร Type ชื่อ `T` ไว้รองรับชนิดข้อมูลที่ผู้เรียกจะส่งเข้ามา

### ข. กลไกการแปลงสภาพตามข้อมูล (Type Inference)
เมื่อเราเรียกใช้:
```ts
const safeUser = loadStorage("user_key", { id: 0, name: "Guest" });
```
1. TypeScript สแกนดูพารามิเตอร์ช่อง `fallback` เห็นเป็น `{ id: number, name: string }`
2. ตัวแปร `T` จะถูกผูกและแปลงสภาพเป็น `{ id: number, name: string }` ทันที
3. ฟังก์ชันสัญญาว่าจะคืนค่าเป็น `: T` ทำให้ตัวแปร `safeUser` ได้รับ Type และ Autocomplete ติดตัวมาอัตโนมัติ

### ค. หน้าที่ของ `as T` ใน `JSON.parse(raw) as T`
- คำสั่ง `JSON.parse()` ใน TypeScript ให้ผลลัพธ์เป็น `any` (เพราะ TS เดาไม่ออกว่าในสตริงเก็บอะไรไว้)
- การใส่ `as T` คือการบอก TypeScript ว่า: *"ก้อนที่แกะออกมานี้ ฉันการันตีเองว่ามันคือ Type `T` ตาม fallback"*

---

## 5. ฟังก์ชันบันทึกนิรภัย `saveStorage` & The Key Parameter

```ts
function saveStorage<T>(key: string, value: T): boolean {
  try {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue); // ต้องใช้ตัวแปร key ห้ามใส่เครื่องหมายคำพูด "key"
    return true;
  } catch (error) {
    console.error(`เซฟคีย์ "${key}" ไม่สำเร็จ!`, error);
    return false;
  }
}
```

### ทำไม `key` ต้องเป็นตัวแปร (ไม่มีเครื่องหมายคำพูด)?
- ถ้าเขียน `"key"`: ข้อมูลทุกอย่างในเว็บจะถูกเซฟทับลงในตู้ช่องชื่อ `"key"` ช่องเดียวตลอดกาล
- เมื่อเป็นตัวแปร `key`: ฟังก์ชันนี้จะกลายเป็นตู้ล็อคเกอร์อเนกประสงค์ เซฟแยกคีย์ `"saved_name"`, `"theme"`, `"cart"` ได้โดยไม่ตีกัน
- คืนค่าเป็น `boolean` เพื่อบอกสถานะความสำเร็จ/ล้มเหลว (เผื่อกรณี Storage 5MB เต็ม หรือโดนบล็อกในโหมด Incognito)

---

## 6. บทเรียนจากการทดสอบจริงบนเบราว์เซอร์

### บั๊กตัวแปรเก่า (Stale Variable / Closure Trap)
- ตอนกดปุ่มบันทึก ต้องนำค่าจากช่องกรอก `inputEl.value` ไปแสดงผลบนหน้าจอ
- ถ้าเผลอเอาตัวแปรเก่าที่โหลดมาตอนเปิดเว็บ (`name`) ไปแสดงผล หน้าจอจะไม่ยอมเปลี่ยนตามค่าที่เพิ่งพิมพ์

### ข้อแตกต่างระหว่าง "พิมพ์ข้อความแปลกๆ" vs "ข้อมูลพังของจริง"
1. **ถ้าพิมพ์ `{ corrupt json:` ลงในช่อง Input แล้วกด Save:**
   - ฟังก์ชัน `saveStorage` จะเอาไปผ่าน `JSON.stringify()` กลายเป็นสตริงที่ถูกต้อง (`"\"{ corrupt json:\""`) ทำให้พอดึงกลับมาจึงแสดงผลได้ปกติ ไม่พัง
2. **ข้อมูลพังของจริง (จำลองผ่าน DevTools):**
   - เมื่อลบเครื่องหมายคำพูดออกใน DevTools ให้เหลือแค่ `{ corrupt json:` เปล่าๆ
   - คำสั่ง `JSON.parse` จะเจอตอทันที เกิด `SyntaxError` เด้งเข้าสู่ `catch`
   - ระบบจะดึงค่าสำรอง `"คนแปลกหน้า"` มาแสดงผลแทน ทำให้หน้าเว็บไม่แครช

---

## 7. Syntax Cheat Sheet (คลังรวมไวยากรณ์ประจำหมวด)

### ก. คำสั่ง Web Storage API (เบราว์เซอร์)
| คำสั่ง (Syntax) | หน้าที่ | ค่าที่ส่งคืน (Return) |
| :--- | :--- | :--- |
| `localStorage.setItem(key, stringValue)` | บันทึกข้อมูลลงตู้ | ไม่มี (`void`) |
| `localStorage.getItem(key)` | ดึงข้อมูลจากตู้ | ข้อความ (`string`) หรือ `null` (ถ้าไม่มีของ) |
| `localStorage.removeItem(key)` | ลบข้อมูลช่องนั้นทิ้ง | ไม่มี (`void`) |
| `localStorage.clear()` | ล้างข้อมูลใน Storage ทิ้งทั้งหมด | ไม่มี (`void`) |

### ข. คำสั่งแปลงข้อมูล JSON
| คำสั่ง (Syntax) | ทิศทางการแปลง | ตัวอย่าง |
| :--- | :--- | :--- |
| `JSON.stringify(value)` | **Object / Array -> String** (แพ็กใส่กล่องสตริงก่อนเซฟ) | `{ id: 1 }` -> `'{"id":1}'` |
| `JSON.parse(rawString)` | **String -> Object / Array** (แกะกล่องสตริงกลับเป็น Object) | `'{"id":1}'` -> `{ id: 1 }` |

### ค. ไวยากรณ์ TypeScript Generics (`<T>`)
- **การประกาศฟังก์ชัน:** `function loadStorage<T>(key: string, fallback: T): T`
  - `<T>` = ช่องรับตัวแปร Type (Type Parameter)
  - `fallback: T` = พารามิเตอร์ขาเข้า มี Type ตาม `T`
  - `: T` = กำหนดว่าฟังก์ชันจะส่งข้อมูล Type `T` ออกไปเสมอ
- **การระบุ Type เจาะจง (Explicit Type):** `loadStorage<string>("key", "default")`
- **การให้ระบบเดา Type อัตโนมัติ (Type Inference):** `loadStorage("key", { id: 0, name: "Guest" })`
- **การยืนยัน Type ด้วย `as`:** `return JSON.parse(raw) as T;` (เปลี่ยน `any` ให้เป็น `T`)

---

## 🏆 สถานะเควสต์
- [x] **Quest 3.4 — Safe Web Storage: ดึง localStorage มาใช้แบบไม่แครช (100% Complete)**
