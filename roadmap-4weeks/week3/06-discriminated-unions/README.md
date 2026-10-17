# Quest 3.6: Discriminated Unions & Safe State Architecture

บันทึกสรุปแนวคิด กลไกการทำงาน การแก้ปัญหา Impossible States และตัวอย่างการนำไปใช้งานจริงในระบบ Frontend

---

## 1. ปัญหาของ State แบบเดิม (Naive State กับดัก Impossible States)

ในอดีต เวลาเขียนระบบดึงข้อมูลจาก API เรามักจะประกาศ Interface แบบรวมทุกอย่างไว้ในที่เดียว:

```ts
// โครงสร้างที่เสี่ยงบั๊ก (ห้ามใช้ในงานจริง)
interface BadAsyncState {
  isLoading: boolean;
  isError: boolean;
  data: Product[] | null;
  errorMessage: string | null;
}
```

### จุดพังจริงบนหน้าจอ (Production Failure Point)
หากโค้ดมีบั๊ก แล้ว State กลายร่างเป็น:
```ts
{
  isLoading: true,
  isError: true,
  data: [...ของเก่าค้าง],
  errorMessage: "Network Timeout"
}
```
สิ่งที่ผู้ใช้เห็นคือ: **หน้าจอหมุนโหลดติ้ว พร้อมกับมีแบนเนอร์สีแดงแจ้ง Error ขึ้นมาทับ และด้านล่างยังมีการ์ดสินค้าเก่าแสดงค้างอยู่**

สถานะแบบนี้เรียกว่า **Impossible State** (สถานะที่ไม่ควรเกิดขึ้นได้ในโลกความเป็นจริง) แต่โครงสร้างแบบเดิมมันเปิดช่องให้เกิดบั๊กนี้ได้

---

## 2. ทางแก้: Discriminated Unions

เราสับสถานะแยกออกเป็นชิ้นๆ อย่างเด็ดขาดด้วยเครื่องหมาย `|` (Union) และกำหนดให้ทุกชิ้นมีฟิลด์ `status` เหมือนกันไว้เป็นตัวจำแนก:

```ts
type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };
```

### สิ่งที่ได้ทันที:
1. **กำจัด Impossible States 100%:** ไม่มีทางที่สถานะ `loading` จะมี `message` หรือ `data` หลุดเข้ามาได้ตั้งแต่ตอนพิมพ์โค้ด
2. **Type Narrowing อัตโนมัติ:** เมื่อเขียน `switch (state.status)` ในแต่ละเคส TypeScript จะรู้ทันทีว่ามีตัวแปรอะไรให้ใช้บ้าง โดยไม่ต้องเขียน `if (data !== null)` ซ้ำซ้อน

---

## 3. ทำความเข้าใจ Generics `<T>` แบบเห็นภาพ

ตัวอักษร `<T>` ย่อมาจาก **Type Parameter** เปรียบเสมือน **"กล่องเปล่า / แม่พิมพ์"**

- ถ้าเขียน `AsyncState<Product[]>` กล่อง `T` จะถูกแทนที่ด้วย `Product[]`
- ถ้าเขียน `AsyncState<UserProfile>` กล่อง `T` จะถูกแทนที่ด้วย `UserProfile`
- ถ้าเขียน `AsyncState<number>` กล่อง `T` จะถูกแทนที่ด้วย `number`

ประโยชน์คือเราเขียนโครงสร้าง `AsyncState` แค่รอบเดียว แต่สามารถนำไปใช้ซ้ำกับการโหลดข้อมูลทุกประเภทในโปรเจกต์ได้ทันที

---

## 4. อาวุธลับ: Exhaustiveness Checking ด้วย `never`

```ts
default: {
  const _exhaustiveCheck: never = state;
  return _exhaustiveCheck;
}
```

- **กลไก:** ชนิดข้อมูล `never` หมายถึงสิ่งที่ไม่ควรมีตัวตนอยู่
- **หน้าที่:** เมื่อ TypeScript วิ่งผ่านทุก `case` ครบแล้ว ในบล็อก `default` จะต้องไม่เหลือสถานะอะไรตกค้างอยู่เลย
- **จุดประสงค์ในงานจริง:** หากวันหนึ่งเพื่อนร่วมทีมเพิ่มสถานะใหม่เข้าไปใน Type เช่น `{ status: "cached" }` แต่ลืมเขียน `case` ดักในฟังก์ชัน TypeScript จะขีดเส้นใต้สีแดงเตือนทันที ป้องกันไม่ให้บั๊กหลุดไปถึง Production

---

## 5. วิธีนำไปใช้งานจริงบนหน้าเว็บ (Real-World Integration)

ในระบบ Frontend จริง (ทั้ง TypeScript DOM และ React) เราจะใช้ `AsyncState` คุมวงจรการแสดงผลของหน้าเว็บแบบนี้:

```ts
// 1. ประกาศตัวแปรเก็บสถานะปัจจุบันของหน้าจอ
let currentState: AsyncState<Product[]> = { status: "idle" };

// 2. ฟังก์ชันเรนเดอร์หน้าจอตามสถานะจริง
function updateView(state: AsyncState<Product[]>) {
  const container = document.getElementById("app")!;

  switch (state.status) {
    case "idle":
      container.innerHTML = `<p>กดปุ่มเพื่อค้นหาสินค้า</p>`;
      break;

    case "loading":
      container.innerHTML = `<div class="spinner">กำลังโหลด...</div>`;
      break;

    case "error":
      container.innerHTML = `<div class="error-banner">${state.message}</div>`;
      break;

    case "success":
      // ตรงนี้เรียกใช้ state.data ได้อย่างปลอดภัย 100%
      container.innerHTML = state.data
        .map(item => `<li>${item.name} - ${item.price} บาท</li>`)
        .join("");
      break;

    default: {
      const _check: never = state;
      return _check;
    }
  }
}

// 3. ฟังก์ชันเชื่อมต่อ Network
async function fetchProducts() {
  // ก. จังหวะเริ่มโหลด -> อัปเดตสถานะเป็น loading
  currentState = { status: "loading" };
  updateView(currentState);

  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) throw new Error("ดึงข้อมูลไม่สำเร็จ");

    const json = await res.json();
    
    // ข. จังหวะสำเร็จ -> อัปเดตสถานะเป็น success พร้อมแนบข้อมูลจริง
    currentState = { status: "success", data: json.products };
    updateView(currentState);

  } catch (err) {
    // ค. จังหวะเกิด Error -> อัปเดตสถานะเป็น error พร้อมข้อความเตือน
    const message = err instanceof Error ? err.message : "เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ";
    currentState = { status: "error", message };
    updateView(currentState);
  }
}
```

เมื่อใช้รูปแบบนี้:
- โค้ดเรนเดอร์ UI จะถูกแยกออกจากโค้ดเรียก API อย่างเด็ดขาด (Separation of Concerns)
- หน้าจอจะไม่มีวันแสดงผลเพี้ยนหรือทับซ้อนกัน เพราะในหนึ่งช่วงเวลามีเพียงสถานะเดียวที่ถูกเปิดใช้งาน