
// =============================================================================
// คลาส Computer Programming (CP) วันที่ 03-09-2026
// สรุป 5 หัวข้อหลัก: Class, Arrow Function, Closure, Built-in Functions, Imperative
// =============================================================================

// -----------------------------------------------------------------------------
// 1. Class (พิมพ์เขียวสำหรับสร้าง Object ตามแนวคิด OOP)
// -----------------------------------------------------------------------------
class Student {
  public id: string;
  public name: string;
  private scores: number[];

  constructor(id: string, name: string, scores: number[] = []) {
    this.id = id;
    this.name = name;
    this.scores = scores;
  }

  public addScore(score: number): void {
    this.scores.push(score);
  }

  public getAverage(): number {
    if (this.scores.length === 0) return 0;
    const sum = this.scores.reduce((acc, curr) => acc + curr, 0);
    return sum / this.scores.length;
  }
}

const student1 = new Student("6601", "Kxitta", [85, 90, 78]);
student1.addScore(95);
console.log("[1. Class] Student:", student1.name, "Average:", student1.getAverage());

// -----------------------------------------------------------------------------
// 2. Arrow Function (=> ไวยากรณ์ฟังก์ชันสมัยใหม่)
// -----------------------------------------------------------------------------
// แบบดั้งเดิม (Traditional function)
function addTraditional(a: number, b: number): number {
  return a + b;
}

// แบบ Arrow Function พร้อม Implicit Return (เขียนบรรทัดเดียว คืนค่าทันที)
const addArrow = (a: number, b: number): number => a + b;

// Arrow Function ที่คืนค่าเป็น Object (ต้องใส่วงเล็บคลุมปีกกา)
const createPoint = (x: number, y: number) => ({ x, y });

console.log("[2. Arrow Function] Sum:", addArrow(10, 25));
console.log("[2. Arrow Function] Point:", createPoint(100, 200));

// -----------------------------------------------------------------------------
// 3. Closure (โคลเชอร์ - ฟังก์ชันที่จดจำตัวแปรใน Lexical Scope ของตัวเองได้)
// -----------------------------------------------------------------------------
// ตัวอย่าง Function Factory จำลองตัวแปร Private ที่คนภายนอกแก้ไขตรงๆ ไม่ได้
function createCounter(initialValue: number = 0) {
  let count = initialValue; // ตัวแปรนี้อยู่ใน Lexical Scope ของ createCounter

  return {
    increment: () => {
      count += 1;
      return count;
    },
    decrement: () => {
      count -= 1;
      return count;
    },
    getValue: () => count,
  };
}

const counterA = createCounter(10);
console.log("[3. Closure] Counter A step 1:", counterA.increment()); // 11
console.log("[3. Closure] Counter A step 2:", counterA.increment()); // 12
console.log("[3. Closure] Counter A Current:", counterA.getValue());  // 12

// -----------------------------------------------------------------------------
// 4. Built-in Functions (ฟังก์ชันสำเร็จรูปที่ตัวภาษามีมาให้ใช้งาน)
// -----------------------------------------------------------------------------
const rawNumbers = [5, 12, 8, 130, 44];

// Array Built-in: .filter(), .map(), .includes()
const filtered = rawNumbers.filter(n => n >= 10);
const doubled = filtered.map(n => n * 2);
const hasFortyFour = rawNumbers.includes(44);

// String & Math Built-in
const sampleText = "   TypeScript & CompPro   ";
const cleanedText = sampleText.trim().toLowerCase();
const maxVal = Math.max(...rawNumbers);

console.log("[4. Built-in] Filtered & Doubled:", doubled);
console.log("[4. Built-in] Cleaned Text:", cleanedText);
console.log("[4. Built-in] Max Value:", maxVal);

// -----------------------------------------------------------------------------
// 5. Imperative Programming (การเขียนสั่งงานแบบ Step-by-Step ระบุ How to do)
// -----------------------------------------------------------------------------
// ตัวอย่าง: หาผลรวมของเลขคู่ใน Array
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// แบบ Imperative (ควบคุมลูป index, จัดการ state สะสมทีละก้าว)
let imperativeEvenSum = 0;
for (let i = 0; i < data.length; i++) {
  const num = data[i];
  if (num !== undefined && num % 2 === 0) {
    imperativeEvenSum += num;
  }
}

// เปรียบเทียบกับแบบ Declarative (ระบุผลลัพธ์ที่ต้องการ Data Transformation)
const declarativeEvenSum = data
  .filter(n => n % 2 === 0)
  .reduce((acc, n) => acc + n, 0);

console.log("[5. Imperative Sum]:", imperativeEvenSum);
console.log("[5. Declarative Sum]:", declarativeEvenSum);

// -----------------------------------------------------------------------------
// 6. OpenTUI + SolidJS Lifecycle (onMount & onCleanup / onclear)
// -----------------------------------------------------------------------------
// ใน OpenTUI ร่วมกับ SolidJS:
// - onMount: ฟังก์ชันที่ทำงาน 1 ครั้งเมื่อ Component ประกอบและวาดลง Terminal สำเร็จ
// - onCleanup (onclear): ฟังก์ชันทำความสะอาดเมื่อ Component ถูกปลดหรือปิดตัวลง
//
// รูปแบบการใช้งานจริงใน OpenTUI:
// --------------------------------------------------
// import { onMount, onCleanup } from "solid-js";
//
// function TerminalClock() {
//   onMount(() => {
//     console.log("Clock Component ถูก Mount แล้ว");
//     const timer = setInterval(() => console.log("tick"), 1000);
//
//     onCleanup(() => {
//       clearInterval(timer); // เคลียร์ timer ป้องกัน memory leak
//       console.log("Clock Component ถูก Unmount เคลียร์เรียบร้อย");
//     });
//   });
//   return <text>OpenTUI Clock</text>;
// }
// --------------------------------------------------

// จำลองการทำงานของ Lifecycle (Mental Model):
function simulateComponentLifecycle(componentName: string) {
  const cleanupCallbacks: Array<() => void> = [];

  const mockOnMount = (callback: () => void) => {
    callback();
  };

  const mockOnCleanup = (callback: () => void) => {
    cleanupCallbacks.push(callback);
  };

  // จำลองการทำงานภายใน Component:
  mockOnMount(() => {
    console.log(`[6. onMount] ${componentName}: Mount ขึ้นสู่ Terminal สำเร็จ (เริ่มต้นทำงาน)`);
    mockOnCleanup(() => {
      console.log(`[6. onCleanup] ${componentName}: Unmount ออกจาก Terminal (คืน Memory / เคลียร์ Timer)`);
    });
  });

  // จำลองเมื่อปิดโปรแกรมหรือถอด Component
  console.log(`[6. Lifecycle] ปิด Component ${componentName} -> สั่ง Run Cleanup:`);
  cleanupCallbacks.forEach(fn => fn());
}

simulateComponentLifecycle("TuiDashboard");
