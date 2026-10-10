# 🧭 The Re-engineered Roadmap (ฉบับซ่อมฐานราก สู่ Web Developer ตัวจริง)

> **หัวใจของการปรับปรุงรอบนี้:**  
> เราจะไม่ก้าวไปข้างหน้าทั้งที่ฐานยังสั่นคลอน  
> สัปดาห์แรกจะโฟกัสการ **"ซ่อมและฝัง 6 เสาหลักให้กลายเป็นสัญชาตญาณ"** (Positioning, Depth & Skin, Element Selection, DOM Update, Event Delegation, Immutable State)  
> เมื่อมือจำได้โดยไม่ต้องเดา การต่อยอดไปสู่ CSS Grid, Fetch API และโปรเจกต์ CS Study Plan จะไหลลื่นและมั่นคง 100%

---

## ⏰ จังหวะประจำสัปดาห์และวันฝึก (Weekly Structure)

- **จันทร์ – ศุกร์ (5 วัน):** **Web Core Track** (ตอกเสาหลัก, CSS Layout, DOM, Fetch API)
  - 13:00 – 13:40 (40 นาที): **Dev English** (คลิป Tech ซับอังกฤษ + ศัพท์ MDN 3 คำ)
  - 13:40 – 17:30 (ช่วงลุยโค้ด): เจาะลึกเควสประจำด่าน (มีพักเบรกตรงกลาง 30–45 นาที)
- **วันเสาร์ 🧠 [TS Logic Arena — วันฝึกตรรกะล้วน 100%]:** 
  - **กฎเหล็ก:** **ห้ามแตะ HTML และห้ามแตะ CSS ทั้งวัน!**
  - โฟกัสการลับดาบสมองด้วยโจทย์ TypeScript Business Logic / Algorithm วันละ 1 ภารกิจเต็มๆ เพื่อรักษาและยกระดับสกิลตรรกะที่สะสมมา
- **วันอาทิตย์ 🛑 [Rest Day]:** 
  - วันพักผ่อนจริง 100% ไม่แตะโค้ด ชาร์จแบตให้เต็มที่

---

## 🏆 แผนการพิชิต 4 ด่าน (Milestone Quests)

```text
[ ด่านที่ 1: ตอก 6 เสาหลักคามือ ] ──► [ ด่านที่ 2: CSS Grid & Responsive ]
             │                                        │
             ▼                                        ▼
[ ด่านที่ 4: CS Study Plan สู่ Vercel ] ◄── [ ด่านที่ 3: Async, Fetch & .reduce ]
```

---

### 🧱 ด่านที่ 1: ตอก 6 เสาหลักให้แน่นปึ้ก (Foundation Mastery)
**โจทย์ใหญ่:** หยุดการเดาสุ่ม! ทำความเข้าใจและเขียน 6 เรื่องนี้ได้จากไฟล์ว่างเปล่าด้วยตัวเอง

#### หมวดที่ 1: CSS Layout & Depth (เสาที่ 1 & 2)
- [x] **Quest 1.1 — CSS Positioning:** 
  - เข้าใจกฎ "พ่อล้อมรั้ว (`relative`) ลูกลอยอิสระ (`absolute`)"
  - ฝึกปักหมุด Badge ป้ายลดราคา และปุ่ม Favorite ไว้มุมการ์ดโดยไม่หลุดกรอบ
  - เข้าใจ `z-index` และลำดับการซ้อนทับ
- [x] **Quest 1.2 — CSS Depth & Skin:** 
  - ฝึกออกแบบ `box-shadow` ซอฟต์โมเดิร์น (แกน X, Y, Blur, Spread, Opacity)
  - การจับคู่สีระดับมือโปร (ใช้ Slate/Navy `#0f172a` แทนสีดำล้วน, การแบ่งระดับข้อความหลัก/รอง)
  - การทำ Micro-animations ด้วย `transition` และ `:hover` ให้ปุ่ม/การ์ดดูมีชีวิต

#### หมวดที่ 2: DOM & State Machinery (เสาที่ 3, 4, 5, 6)
- [x] **Quest 1.3 — Element Selection & Type Casting:**
  - เข้าใจ `document.getElementById` vs `querySelector` vs `querySelectorAll`
  - การระบุ Type ใน TypeScript: `as HTMLInputElement`, `as HTMLButtonElement`
- [x] **Quest 1.4 — DOM Update & Attribute Control:**
  - การเปลี่ยนข้อความด้วย `.textContent`
  - การสลับสไตล์ด้วย `.classList.toggle / add / remove`
  - การดึงและฝากข้อมูลผ่าน `data-*` attributes (`e.target.dataset`)
- [x] **Quest 1.5 — Browser Events & Event Delegation:**
  - ดักจับ `click`, 
  - เข้าใจกลไก Event Bubbling: แปะ Listener ที่กล่องแม่ตัวเดียว แล้วใช้ `e.target.
  -!!ย่อยยังไม่เคยจับ [x]`change`, `submit` พร้อมสั่ง `e.preventDefault()`
  classList.contains(...)` ดักจับทุกปุ่มลูก
- [x] **Quest 1.6 — Immutable State Architecture:**
  - เลิกใช้ `.push()`, `.splice()`
  - ฝังนิสัยสร้าง State ใหม่เสมอ: `[...state, item]`, `.filter()` สำหรับลบ, `.map()` สำหรับอัปเดต
- 🎯 **Boss Fight ด่านที่ 1:** 
  - [x]สร้าง **Interactive Smart Card Component** (เช่น การ์ดสินค้าที่มีปุ่ม Favorite กดสลับสีได้, มี Stepper ปรับจำนวน +/- แล้วคำนวณราคาแบบเรียลไทม์, และมีปุ่ม Add to Cart ที่อัปเดต State) **เขียนจากศูนย์ด้วยมือตัวเอง 100% ไร้การก๊อปปี้**
- 🧠 [x]**เสาร์ประจำด่านนี้ [TS Logic Arena #1]:**
  - **Data Ingestion & Sanitization Engine:** รับ Raw String สกปรกที่มี Delimiter หลายแบบ ดักจับ `NaN`, ตัวเลขติดลบ, ลบช่องว่าง และคำนวณสรุปผลสถิติด้วย Defensive TypeScript เพียวๆ (ไม่แตะ HTML/CSS)

---

### 🛡️ ด่านที่ 2: ปลดล็อกมิติหน้าจอ (CSS Grid & Responsive Web Design)
**โจทย์ใหญ่:** ก้าวข้ามจาก Component เดี่ยว สู่การจัดหน้าระดับ Page ที่ปรับตัวตามทุกขนาดหน้าจอ

- [x] **Quest 2.1 — 2D CSS Grid:** เข้าใจ `display: grid`, `grid-template-columns: repeat(3, 1fr)`, และ `gap`
- [x] **Quest 2.2 — Auto-Fit Magic:** ใช้ `repeat(auto-fit, minmax(260px, 1fr))` ให้การ์ดตัดแถวอัตโนมัติโดยไม่ต้องพึ่ง Media Query
- [x] **Quest 2.3 — Mobile-First & Media Queries:** เขียน CSS สำหรับมือถือเป็นค่าเริ่มต้น แล้วใช้ `@media (min-width: 768px)` ขยายร่างบนคอม
- [x] **Quest 2.4 — Responsive Navbar:** ทำ Navbar แนวนอนบนคอม และจัดระเบียบไม่ให้ล้นขอบจอบนมือถือ
- 🎯 **Boss Fight ด่านที่ 2:** 
  - สร้างหน้า **Responsive Catalog** (มี 6–8 การ์ด) ที่บนมือถือเรียง 1 คอลัมน์ บนจอคอมเรียง 3 คอลัมน์ โดยเปิด DevTools เช็คแล้ว **ไม่มีแถบเลื่อนแนวนอนกวนใจ (Zero-Overflow)**
- 🧠 **เสาร์ประจำด่านนี้ [TS Logic Arena #2]:**
  - **Complex Object & Array Pipeline:** รับข้อมูลซ้อน (Nested Objects) ทำการคัดกรอง ซ้อนเงื่อนไข และจัดเรียง (Sorting) ข้อมูลด้วย TypeScript

---

### 🌐 ด่านที่ 3: โลกภายนอก & Modern TypeScript (Async, Fetch API & .reduce)
**โจทย์ใหญ่:** ดูดข้อมูลสดจาก Network และกำจัดลูปเถื่อนด้วย Functional Programming

- [ ] **Quest 3.1 — Promise & `async / await`:** เข้าใจสถานะของ Promise และการรอข้อมูลจาก Network
- [ ] **Quest 3.2 — Fetch API & Defensive Network:** ใช้ `fetch()` ดึงข้อมูลจาก Public API จริง (เช่น DummyJSON) พร้อมตรวจ `res.ok` และดัก Error ด้วย `try...catch`
- [ ] **Quest 3.3 — UI State Presentation:** ทำหน้ากาก Loading Spinner และ Error Banner แจ้งเตือนผู้ใช้
- [ ] **Quest 3.4 — Safe Web Storage:** ดึง `localStorage` มาใช้แบบไม่แครช
- [ ] **Quest 3.5 — ปราบมาร `.reduce()`:** ใช้ `.reduce()` หาผลรวม (Sum), Max/Min, และ Group By จัดกลุ่มข้อมูลเป็น Object Map
- [ ] **Quest 3.6 — Discriminated Unions:** ออกแบบ State แบบปลอดภัย 100%:
  `type AsyncState<T> = { status: "loading" } | { status: "success", data: T } | { status: "error", message: string }`
- 🎯 **Boss Fight ด่านที่ 3:** 
  - สร้างมินิแอป **Live Data Explorer** ดึงข้อมูลสดจาก API มาแสดงผลบน Responsive Grid มีช่องค้นหา และกดบันทึกรายการที่ชอบลง `localStorage`
- 🧠 **เสาร์ประจำด่านนี้ [TS Logic Arena #3]:**
  - **Algorithm & Data Structures (LeetCode Easy):** ฝึก Two Pointers หรือ Frequency Counter ใน TypeScript เตรียมรับมือวิชา Data Structures เทอม 2

---

### 🚀 ด่านที่ 4: รวมร่างสร้างบ้านหลังใหญ่ (Capstone: CS Study Plan สู่ Vercel)
**โจทย์ใหญ่:** นำทุกวิชาที่ลับคมมาสร้างโปรเจกต์ของจริงขึ้นออนไลน์เพื่อเป็นผลงานใน Portfolio

- [ ] **Quest 4.1 — Standalone Repo & Semantic HTML5:** เปิด Repo แยกเดี่ยว `cs-study-plan` พร้อมวางโครงสร้าง `<header>`, `<nav>`, `<main>`, `<section>`
- [ ] **Quest 4.2 — Design System & Dark Mode:** วางตัวแปร `:root`, ทำ Sticky Navbar, และวาง Responsive Grid 3 คอลัมน์
- [ ] **Quest 4.3 — Data Engine & Type:** บรรจุข้อมูลวิชา CS65 ลง `curriculum-data.ts` พร้อมฟังก์ชันคำนวณหน่วยกิตด้วย `.reduce()`
- [ ] **Quest 4.4 — Interactive DOM & LocalStorage:** เชื่อมปุ่มสลับแท็บปี 1–4 และปุ่ม Dark Mode บันทึกลง Storage
- [ ] **Quest 4.5 — Production Launch:**
  - Push ขึ้น GitHub ส่วนตัว
  - เชื่อมต่อและ Deploy ขึ้น **Vercel** รับ Live URL ของจริง
  - เขียน `README.md` ภาษาอังกฤษสวยงามพร้อมรูป Mockup แปะลง Resume ได้ทันที!

---

## 🎁 สิ่งที่จะได้ติดตัวกลับไปหลังจบ 4 สัปดาห์ (The Outcomes)

### A. ผลงาน 4 ชิ้นจริงบน Portfolio (หลักฐานจับต้องได้)
1. **Interactive Smart Component:** การ์ดอินเตอร์แอคทีฟที่เขียนด้วยมือเปล่า 100% มีทั้ง State, Events และ Positioning
2. **Responsive Catalog Page:** หน้าแคตตาล็อกหลายคอลัมน์ที่ย่อ-ขยายตามหน้าจอคอมและมือถือโดย **ไม่มีแถบเลื่อนแนวนอน (Zero-Overflow)**
3. **Live Data Explorer:** มินิแอปที่ดึงข้อมูล JSON สดจาก Public API มีสถานะ Loading/Error และเซฟลง `localStorage` แบบปลอดภัย
4. **🚀 CS Study Plan บน Vercel:** เว็บแอปพลิเคชันหลักสูตรของจริง มี Dark Mode ใช้งานได้จริง มี URL ส่งให้เพื่อนในสาขาเปิดดูผ่านมือถือได้

### B. สัญชาตญาณวิศวกรซอฟต์แวร์ (Engineering Instincts)
- **มองภาพ UI แล้วถอดเป็นกล่องได้ทันที:** เห็นดีไซน์ไหนก็แกะออกเป็น `Skeleton -> Layout -> Skin -> Brain` ได้โดยไม่ต้องนั่งงง
- **ทลายอาการกลัวไฟล์ว่างเปล่า (Blank Screen Syndrome):** เปิดไฟล์ `index.html` เปล่าๆ แล้วเริ่มวางโครงสร้างได้เองโดยไม่ต้องพึ่ง Template สำเร็จรูป
- **มองทะลุกลไก React ล่วงหน้า:** เข้าใจ State, Props, การวนลูป `.map()`, และการยิง API ก่อนที่จะเริ่มเรียน React
- **Documentation Literacy:** เลิกกลัวภาษาอังกฤษ อ่านคู่มือทางการของ MDN และ TypeScript Handbook ได้อย่างมั่นใจ

---

## 🧭 เข็มทิศคำแนะนำจากรุ่นพี่ (Senior's Field Guide)

เพื่อไม่ให้ 4 สัปดาห์นี้สูญเปล่า ให้ยึด **5 กฎเหล็ก** นี้ไว้เสมอ:

### 1. "ช้าเพื่อไปได้เร็ว (Slow is Smooth, Smooth is Fast)"
- อย่ารีบพิมพ์โค้ดให้เสร็จเร็วๆ เพื่อความรู้สึกสะใจชั่วคราว
- ทุกบรรทัดที่พิมพ์ **ต้องตอบตัวเองให้ได้ว่ามันทำหน้าที่อะไรในระบบ?** ถ้ายังตอบไม่ได้ ให้หยุดถามตัวเองก่อน

### 2. ห้ามก๊อปปี้โค้ดมาแปะเด็ดขาด (Muscle Memory Rule)
- การก๊อปปี้โค้ดมาวาง คือการทำให้สมองเกิด **"ภาพลวงตาว่าตัวเองทำเป็น" (Illusion of Competence)**
- แม้กระทั่งตอนดูตัวอย่าง ให้ **ปิดตัวอย่างนั้นไปก่อน แล้วลงมือพิมพ์ด้วยสมองตัวเอง** ให้นิ้วมือได้จำความรู้สึกของการเขียนผิดและแก้ไข

### 3. ใช้ DevTools (F12) ให้เป็นอวัยวะที่ 33
- เวลาหน้าเว็บเบี้ยว หรือกล่องไม่ตรงใจ **อย่าเพิ่งเดาสุ่มแก้ CSS ในโค้ด**
- ให้กด `F12` คลิกขวา Inspect ดูเส้น Grid, ดูกล่อง Margin (สีส้ม), Padding (สีเขียว) หาสาเหตุให้เจอบนจอก่อน แล้วค่อยกลับมาแก้ที่ไฟล์

### 4. กฎ 15 นาทีติดหล่ม (The 15-Minute Rule)
- ถ้าลองแก้ปัญหาเดิมๆ เกิน 15–20 นาทีแล้วยังมืดแปดด้าน **ให้หยุดทันที!** 
- ถอยออกมาหนึ่งก้าว แล้วใช้ **"กรอบการถาม 4 ระดับ"** ทักมาถามรุ่นพี่/AI (ระบุสิ่งที่คาดหวัง, สิ่งที่เกิดขึ้นจริง, และสิ่งที่ลองทำไปแล้ว) อย่าปล่อยให้อารมณ์หงุดหงิดเผาพลังงานจนหมดไฟ

### 5. สมบัติที่มีค่าที่สุดคือ README
- ทุกวันที่ทำเสร็จ ให้จดบันทึก 3 ข้อลง `README.md`:
  1. วันนี้ได้คำสั่ง/เครื่องมือใหม่อะไร?
  2. จุดไหนที่เข้าใจผิดไปในตอนแรก?
  3. วิธีแก้บั๊กนั้นคืออะไร?
- สิ่งที่นายบันทึกด้วยภาษาตัวเอง จะอยู่ติดตัวนายไปตลอดกาล (เหมือนที่เคยทำใน Pomodoro)
