# Quest 3.5: ปราบมาร Array.reduce() (Mastering Array.reduce())

บันทึกสรุปแนวคิด กลไกการทำงาน และจุดพังจริงบน Production ของ `.reduce()` ใน TypeScript

---

## 1. แก่นแท้และ Mental Model ของ `.reduce()`

### ภาพจำลอง: การวิ่งผลัดส่งไม้ (Baton Passing)
หลายคนเข้าใจผิดว่าคำสั่ง `return` ใน callback ของ `.reduce()` คือการส่งค่าออกไปจบโปรแกรมทันที แต่ในความเป็นจริง:
- **`return` ใน callback:** คือการ "ส่งไม้ต่อ" ให้รอบถัดไป ค่าที่คุณส่งออกมาจะกลายเป็นตัวแปร `acc` (Accumulator) ของรอบหน้า
- **ตัวเมธอด `.reduce()`:** จะวนลูปประมวลผลจนครบทุกตัวใน Array ก่อน แล้วจึงคายผลลัพธ์สุดท้ายออกมารอบเดียว

### โครงสร้างการทำงานหลังบ้าน (Under the Hood)
หากแกะกลไกของ `.reduce()` ออกมาดู จะมีค่าเท่ากับลูป `for...of` ดังนี้:

```ts
let acc = initialValue;

for (const curr of array) {
  // ค่าที่ return จาก callback จะถูกนำมาเขียนทับ acc เพื่อส่งต่อไปรอบถัดไป
  acc = callback(acc, curr);
}

return acc; // เมื่อวนลูปครบทุกตัว ค่อยส่งผลสรุปสุดท้ายออกมา
```

---

## 2. 3 กระบวนท่าหลักของ `.reduce()` (The 3 Core Patterns)

### กระบวนท่าที่ 1: การหาผลรวม (Summation - Primitive Accumulator)
ใช้เมื่อต้องการยุบ Array ให้กลายเป็นตัวเลขก้อนเดียว

```ts
interface Expense {
  title: string;
  amount: number;
}

const expenses: Expense[] = [
  { title: "ข้าวมันไก่", amount: 50 },
  { title: "กาแฟ", amount: 65 },
  { title: "ค่ารถไฟ", amount: 40 },
];

const total = expenses.reduce((acc, curr) => {
  return acc + curr.amount;
}, 0);
```

- **ทำไมไม่ใช้ `+=`?**
  เพราะ `acc` เป็นตัวเลขแบบ Primitive เราสามารถคำนวณ `acc + curr.amount` แล้วโยนผลลัพธ์ใหม่ส่งต่อไปรอบหน้าได้ทันที ไม่จำเป็นต้อง reassign ค่า

---

### กระบวนท่าที่ 2: เฟ้นหาแชมป์เปี้ยน (Champion Finding - Max / Min)
ใช้เมื่อต้องการเปรียบเทียบข้อมูลทีละคู่ เพื่อหาตัวที่มีค่ามากที่สุดหรือน้อยที่สุด

```ts
const scores = [65, 88, 92, 79];

const maxScore = scores.reduce((max, curr) => {
  if (curr > max) {
    return curr;
  }
  return max; // สำคัญมาก: ห้ามลืม return ค่าเดิมกลับไปเด็ดขาด
}, 0);
```

- **กับดักที่พบบ่อย:**
  หากเขียน `if (curr > max) return curr;` โดยไม่มี `return max;` ในกรณีที่ `curr` น้อยกว่า `max` ฟังก์ชันจะคืนค่า `undefined` ส่งผลให้รอบถัดไปพังทันที

---

### กระบวนท่าที่ 3: รวมกลุ่มข้อมูล (Group By / Object Accumulator)
ใช้เมื่อต้องการแปลง Array ให้กลายเป็น Object Map หรือนับความถี่ (Frequency Counter) ภายในรอบเดียว (Single Pass - O(N))

```ts
interface ExpenseItem {
  id: number;
  category: "Food" | "Transport" | "Entertainment";
  amount: number;
}

const transactions: ExpenseItem[] = [
  { id: 1, category: "Food", amount: 50 },
  { id: 2, category: "Transport", amount: 45 },
  { id: 3, category: "Food", amount: 120 },
  { id: 4, category: "Entertainment", amount: 260 },
  { id: 5, category: "Transport", amount: 35 },
];

const summary = transactions.reduce((acc, curr) => {
  const category = curr.category;

  // 1. ตรวจสอบว่ามีช่องใน Object หรือยัง ถ้ายังไม่มีให้ตั้งต้นด้วย 0
  if (!acc[category]) {
    acc[category] = 0;
  }

  // 2. บวกยอดเงินเข้าไปในช่องของหมวดนั้น (ใช้ += เพราะ acc เป็น Object ไม่ใช่ตัวเลข)
  acc[category] += curr.amount;

  // 3. ส่งตู้ Object ใบเดิมที่อัปเดตแล้วต่อไปรอบหน้า
  return acc;
}, {} as Record<string, number>);

// ผลลัพธ์: { Food: 170, Transport: 80, Entertainment: 260 }
```

- **ทำไมกรณีนี้ต้องใช้ `+=`?**
  เพราะ `acc` มีสถานะเป็น Object (`{}`) หากเขียน `return acc + curr.amount` ใน JavaScript จะกลายเป็นข้อความขยะ `"[object Object]50"` ทันที เราจึงต้องเจาะเข้าไปอัปเดตที่ Property ด้านใน (`acc[category] += ...`) แล้ว `return acc` ตัวเดิมออกไป

---

## 3. จุดพังจริงบน Production (Production Pitfalls)

### กับดักที่ 1: แครชเมื่อเจอ Array ว่างเปล่า (Empty Array with No Initial Value)
- **โค้ดอันตราย:**
  ```ts
  const nums: number[] = [];
  const sum = nums.reduce((acc, curr) => acc + curr);
  ```
- **สิ่งที่เกิดขึ้น:**
  `TypeError: reduce of empty array with no initial value`
  เนื่องจากหากไม่ระบุ `initialValue` ตัว JavaScript จะพยายามดึงสมาชิกตัวแรก (index 0) มาเป็นตัวตั้งต้น แต่เมื่อ Array ว่างเปล่า ระบบจะไม่สามารถหาค่าตั้งต้นได้และระเบิด Error ออกมาทันที ส่งผลให้หน้าเว็บแครชเป็นจอขาว
- **กฎเหล็กวิศวกรซอฟต์แวร์:**
  **ต้องกำหนด `initialValue` ให้ `.reduce()` เสมอทุกครั้ง** (เช่น `0`, `""`, `{}` หรือ `[]`)

---

### กับดักที่ 2: ไหลตกท่อจนกลายเป็น `undefined`
ทุกเส้นทาง (Branch) ของโค้ดภายใน callback ต้องมีคำสั่ง `return` คืนค่าเสมอ หากมีเงื่อนไขใดที่ไม่ส่งค่ากลับ ตัวแปร `acc` ในรอบถัดไปจะกลายเป็น `undefined` ทันที

---

## 4. เกณฑ์การเลือกใช้: `.reduce()` vs `for...of`

| มิติ | `.reduce()` | `for...of` |
| :--- | :--- | :--- |
| **ความปลอดภัยของตัวแปร** | ผลลัพธ์เป็น `const` ทันที ตัวแปร `acc` ถูกจำกัดขอบเขตใน callback | ต้องประกาศตัวแปร `let` ภายนอก เสี่ยงต่อการถูกเขียนทับ |
| **การต่อท่อข้อมูล (Chaining)** | ต่อท่อกับ `.filter()` และ `.map()` ได้เรียบเนียน | ต้องสร้างตัวแปรพักค่าแยกแต่ละขั้นตอน |
| **การหยุดลูปกลางคัน** | ไม่รองรับ ต้องวนจนครบทุกตัวใน Array เสมอ | รองรับคำสั่ง `break` และ `continue` |
| **ความอ่านง่ายของโค้ด** | เหมาะกับ Logic สั้นๆ 3-5 บรรทัด | เหมาะกับ Logic ที่มี `if-else` ซับซ้อนหลายชั้น |
