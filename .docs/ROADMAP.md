# 🗺️ Roadmap สู่ Intermediate Developer — Kxitta
> **เริ่ม:** 2 ก.ย. 2569 | **เป้าหมาย:** สร้าง Interactive Web App 1 โปรเจกต์ที่แก้ปัญหาจริง (มี Logic ซับซ้อน + Local Storage + สถาปัตยกรรม Clean Code) และสร้าง Portfolio ออนไลน์  
> **เวลา/วัน:** 2–3 ชั่วโมง | **วันพัก:** อาทิตย์  
> **ปฏิทินมหาลัย:** ราชมงคลอีสาน ปีการศึกษา 2569

---

## ⏰ โครงสร้างทุกวัน (จ–ส)

```
ชั่วโมงที่ 1 → TS Topic ประจำสัปดาห์
ชั่วโมงที่ 2 → HTML/CSS Topic ประจำสัปดาห์
ชั่วโมงที่ 3 → โปรเจกต์ (เริ่มช่วงปิดเทอม)
อาทิตย์    → พัก หรือ Review โค้ด
```

---

## 🗓️ Timeline จริงตามปฏิทินมหาลัย

```
2–21 ก.ย. 2569      ✅ เรียนได้ปกติ (3 สัปดาห์)
22 ก.ย.–2 ต.ค.     🟡 เตรียมสอบ — ลดเหลือ 30 นาที/วัน
3–9 ต.ค. 2569       🔴 สอบปลายภาค เทอม 1 — หยุดสนิท
─────────────────────────────────────────────────────
10 ต.ค.–1 พ.ย.     ⭐ ปิดเทอม GOLDEN TIME (3.5 สัปดาห์)
─────────────────────────────────────────────────────
2 พ.ย.–6 ธ.ค.      ✅ เทอม 2 เรียนได้ปกติ (5 สัปดาห์)
7–25 ธ.ค. 2569      🟡+🔴 เตรียม+สอบกลางภาค เทอม 2
─────────────────────────────────────────────────────
ม.ค. 2570           ✅ เรียนได้ปกติ เต็มเดือน (4 สัปดาห์)
1–5 ก.พ. 2570       ✅ เรียนได้นิดหน่อย (1 สัปดาห์)
6 ก.พ.–1 มี.ค.     🟡+🔴 เตรียม+สอบปลายภาค เทอม 2
─────────────────────────────────────────────────────
มี.ค. 2570+         🏁 จบ Roadmap — เริ่ม React / Backend
```

**รวมเวลาที่เรียนได้จริง: ~16.5 สัปดาห์** (แผนต้องการ ~14 สัปดาห์ — มีเหลือพอครับ)

---

## 📅 2–21 ก.ย. 2569 — ช่วงก่อนสอบ (3 สัปดาห์)
> ทำได้ปกติ แต่อย่าเพิ่งเริ่มโปรเจกต์ใหญ่ — รอปิดเทอมดีกว่า

### สัปดาห์ที่ 1 (2–7 ก.ย.)
- **TS:** `.filter()` + `.map()` + **Arrow Functions (`=>`)**
  - ไวยากรณ์: Implicit Return (`x => x * 2`), การ return Object `x => ({ ... })`, และ Type Signature
  - โจทย์: **เขียนโจทย์เก่า 5 ข้อใหม่** โดยห้ามใช้ `for` loop — ใช้ `.filter()` และ `.map()` ควบคู่กับ Arrow Functions
  - เป้า: เขียนได้โดยไม่ต้องคิดนาน และ chain ได้ `.filter(...).map(...)` ในบรรทัดเดียว
- **CSS:** Box Model, margin, padding, color, font, unit (px, %, rem)
- **Git (ปลดล็อกแล้ว):** ใช้ `git add` + `git commit` + `git push` บันทึกโค้ดฝึกซ้อมขึ้น GitHub (`kxitta-road`) ทุกวันหลังเขียนเสร็จ

### สัปดาห์ที่ 2 (8–14 ก.ย.)
- **TS:** `.reduce()` — **หลังจาก filter/map คล่องแล้ว** reduce จะ click เอง
  - โจทย์: แทน aggregation loop ทั้งหมดด้วย reduce — หา sum, count, group by key
- **CSS:** Flexbox เริ่มต้น — เล่น [flexboxfroggy.com](https://flexboxfroggy.com)
- **Git:** อัปเกรดมาตรฐาน Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`) + ฝึกใช้ `git diff` และ `git log --oneline` ตรวจสอบโค้ดก่อน commit

### สัปดาห์ที่ 3 (15–21 ก.ย.)
- **TS:** Generics `<T>` — `function identity<T>`, `function getFirst<T>`, `function filterBy<T>` (5 โจทย์)
- **CSS:** Flexbox + CSS Variables + Hover Effect
- **Git:** Branching เบื้องต้น (`git branch`, `git switch -c feature/xxx`, `git merge`) แยกโค้ดทดลองออกจาก branch `main`

---

## 🟡 22 ก.ย. – 9 ต.ค. 2569 — เตรียมสอบ + สอบปลายภาค
> โฟกัสสอบ 100% ถ้ามีเวลาเหลือทำโค้ดแค่ 30-60 นาที/วัน ทำแค่ Review โค้ดเก่า

---

## ⭐ 10 ต.ค. – 1 พ.ย. 2569 — ปิดเทอม GOLDEN TIME (3.5 สัปดาห์)
> ไม่มีคลาส ไม่มีสอบ — Push เต็มที่ นี่คือช่วงที่มีค่าที่สุดในรอบ 6 เดือน

### สัปดาห์ปิดเทอม 1 (10–16 ต.ค.)
- **TS:** Utility Types — `Partial<T>`, `Pick<T,K>`, `Omit<T,K>`, `Record<K,V>`
- **CSS:** Flexbox ต่อ + Transitions — ทำ Navbar, Card layout พร้อม hover animation
- **DOM Basics (1 วัน):** `getElementById`, `.innerText`, `.classList`, `addEventListener`

### สัปดาห์ปิดเทอม 2 (17–23 ต.ค.)
- **TS:** ทบทวน Generics + Utility Types ให้แน่น / เริ่มอ่าน Fetch API
- **CSS:** CSS Grid — เล่น [cssgridgarden.com](https://cssgridgarden.com)
- **โปรเจกต์เริ่ม:** 🚀 **Score Dashboard** (HTML/CSS + TS + DOM)
  - หน้า UI ใส่คะแนน → TS คำนวณเกรด → DOM ยัดผลลัพธ์บนหน้าเว็บ

### สัปดาห์ปิดเทอม 3 (24–30 ต.ค.)
- **โปรเจกต์:** ทำต้นแบบ Core Interactive Web App ต่อให้เสร็จ + Deploy บน GitHub Pages หรือ Vercel
- **CSS:** Responsive Design เบื้องต้น `@media query`
- **Git:** Feature Branch Workflow + Pull Request (PR) จริงบน GitHub

### Buffer ปิดเทอม (31 ต.ค. – 1 พ.ย.)
- ถ้า Score Dashboard ยังไม่เสร็จ → ทำให้จบก่อนเปิดเทอม
- ถ้าเสร็จแล้ว → Refactor + เพิ่มฟีเจอร์

---

## 📅 2 พ.ย. – 6 ธ.ค. 2569 — เทอม 2 เรียนได้ปกติ (5 สัปดาห์)

> ⚠️ **เทอม 2 เจอวิชา Data Structures** — Priority สูงสุดคือวิชามหาลัยก่อนครับ  
> แต่ต้องบอกว่า DS เสริมกับ TS ได้โดยตรงเลย — อะไรที่เรียนใน DS ให้ลองเขียนใน TS ด้วยทุกครั้ง

### 📚 DS + TS สอดคล้องกันแค่ไหนบ้าง?

| DS ที่จะเรียน | คุณทำแล้วใน TS | ความยาก |
|:-------------|:--------------|:----:|
| Array & Sorting | Top N Ranking, Object Map | ✅ พื้นฐานแน่แล้ว |
| Hash Map / Dictionary | `{ [key]: value }` Aggregation | ✅ ใช้มาตลอด |
| Set | `new Set()` duplicate check | ✅ ใช้ได้แล้ว |
| Stack / Queue | Array `.push()` / `.shift()` | ✅ แค่ต้องเขียน Logic เพิ่ม |
| Linked List | ใส่ `next` ใน Object | 🟡 คุ้นเคย แค่เคยไป เขียนใน TS ได้เป็นทางหลวง |
| Binary Search | Logic คล้าย for loop + condition | 🟡 สอนได้รวดเร็ว |
| Tree / Graph | ยังไม่เคยแต้เลย | 🔴 ใหม่เต็มๆ |

### วิธีใช้ DS เสริม Roadmap นี้:
- อาจารย์สอน Algorithm อะไร → **เขียนใน TS เพิ่มเลยเป็น practice เสริม**
- โจทย์ DS ส่วนใหญ่แก้ได้ด้วย Logic ที่คุณฝึกอยู่แล้ว — เสียวแต่เขียนในภาษาที่อาจารย์กำหนด (C / Java)

---

### สัปดาห์ที่ 4 (2–8 พ.ย.)
- **TS:** Fetch API เบื้องต้น — ดึงข้อมูลจาก [PokeAPI](https://pokeapi.co) มาแสดงผล
- **CSS:** Responsive ต่อ + CSS Grid layout จริง
- **DS Bonus:** ถ้าเรียน Array/Sorting ในคลาส → ลองเขียน Sort algorithm นั้นใน TS เพิ่มด้วย

### สัปดาห์ที่ 5 (9–15 พ.ย.)
- **TS:** Async ขั้นสูง — `Promise.all`, Error Handling ใน Fetch
- **CSS:** CSS Animation (`@keyframes`) เบื้องต้น
- **โปรเจกต์:** 🚀 **Expense Tracker Web** — เริ่มสร้าง
  - รับรายรับรายจ่าย → บันทึกลง `localStorage` → แสดงสรุปบนหน้าเว็บ
- **DS Bonus:** ถ้าเรียน Stack/Queue → ลองเขียน Stack class เป็น TS เพิ่ม

### สัปดาห์ที่ 6 (16–22 พ.ย.)
- **TS:** `keyof`, `typeof`, Type Guards, `as const`
- **โปรเจกต์:** Expense Tracker ต่อ
- **DS Bonus:** ถ้าเรียน Linked List → ลองสร้าง Node interface ใน TS

### สัปดาห์ที่ 7 (23–29 พ.ย.)
- **โปรเจกต์:** Core Interactive Web App ให้เสร็จสมบูรณ์ (Logic ซับซ้อน + Local Storage + สถาปัตยกรรม Clean Code) + Deploy Production
- **Git:** Git Tags / Releases + ตรวจสอบ Git Commit History ให้เป็นระเบียบพร้อมแสดงใน Portfolio

### 🟡 สัปดาห์ที่ 8 (30 พ.ย. – 6 ธ.ค.) — Buffer
- ทำสิ่งที่ค้างให้จบก่อนเข้าช่วงเตรียมสอบ
- ถ้า DS สอบใกล้→ ทบทวน DS มากกว่า Personal Roadmap


---

## 🟡 7–25 ธ.ค. 2569 — เตรียมสอบ + สอบกลางภาค เทอม 2
> ลดโค้ดเหลือ 30 นาที/วัน — โฟกัสสอบ

---

## 📅 ม.ค. 2570 — Full Month เรียนได้ (4 สัปดาห์)

### สัปดาห์ที่ 9–10 (ม.ค. ต้น)
- **โปรเจกต์:** 🚀 **Portfolio Page** — เริ่มสร้าง
  - About Me, Skills, Projects (Score Dashboard + Expense Tracker), Contact
- **CSS:** Dark Mode, CSS Custom Properties ขั้นสูง

### สัปดาห์ที่ 11–12 (ม.ค. ปลาย)
- **โปรเจกต์:** Portfolio Page ให้เสร็จ + Deploy บน GitHub Pages
- **TS:** ทบทวนทุกอย่างที่เรียนมา

---

## 🟡 1–5 ก.พ. 2570 — สัปดาห์สุดท้ายก่อนเตรียมสอบ
- Refactor และ Polish Portfolio ให้สวยที่สุด
- ตรวจสอบว่า GitHub มี commit history ครบ

---

## 🔴 6 ก.พ. – 1 มี.ค. 2570 — เตรียมสอบ + สอบปลายภาค เทอม 2
> หยุดโค้ดสนิท โฟกัสสอบ

---

## 🏁 มี.ค. 2570+ — จบ Roadmap → เริ่มใหม่

```
มี.ค. 2570: Portfolio Deploy แล้ว ✅
เม.ย. 2570: เริ่ม React พื้นฐาน (useState, useEffect, Props)
พ.ค. 2570:  Backend เบื้องต้น (Elysia + Bun)
มิ.ย. 2570: Database (SQLite / Prisma)
ก.ค. 2570:  Fullstack App แรก
```

---

## 🏁 Checkpoint วัดผล

| # | Checkpoint | เกณฑ์ผ่าน | เป้าหมายวันที่ |
|:-:|:-----------|:----------|:-------------:|
| 1 | TS Intermediate | reduce, Generics, Error Handling, Utility Types สม่ำเสมอ | ต.ค. 2569 |
| 2 | Git & GitHub | ใช้งานจริงในชีวิตประจำวัน (commit, push, branch, repo clean) | ✅ ปลดล็อกแล้ว (ก.ย. 2569) |
| 3 | CSS Layout คล่อง | Flexbox + Grid + Responsive ได้โดยไม่ Google ทุกบรรทัด | พ.ย. 2569 |
| 4 | Interactive Web App (Core) Deploy | 1 โปรเจกต์แก้ปัญหาจริง (Logic ซับซ้อน + Local Storage + สถาปัตยกรรม Clean Code) ออนไลน์ | พ.ย. 2569 |
| 5 | Portfolio ออนไลน์ | หน้าเว็บโชว์ตัวเองและโปรเจกต์จริง Deploy เรียบร้อย | ก.พ. 2570 |
| 🎯 | **Intermediate Developer เต็มตัว** | **ผ่านครบทุก Checkpoint (มี 1 Web App แก้ปัญหาจริง + 1 Portfolio ออนไลน์)** | **มี.ค. 2570** |

---

## ⚠️ กฎที่ต้องรักษา

1. **ช่วงเตรียมสอบ** — ลดเหลือ 30 นาที/วัน อย่าหยุดสนิท แต่ก็อย่าฝืนจนกระทบสอบ
2. **ช่วงสอบ** — หยุดสนิท โฟกัสสอบ 100% ไม่ต้องรู้สึกผิด
3. **หลังสอบเสร็จ** — กลับมาภายใน 3 วัน อย่าปล่อยให้ momentum หายนาน
4. **ปิดเทอม** — Push เต็มที่ นี่คือเวลาทอง
5. **ทำโปรเจกต์ให้ "จบ"** ก่อนเริ่มอันใหม่เสมอ
6. **Commit ทุกวันที่ทำงาน** — GitHub graph เขียวมาก = หลักฐานว่าทำจริง

---

> 💡 *ถ้าทำตามแผนนี้ได้ ณ มี.ค. 2570 คุณจะเป็นนักศึกษาปี 1 ที่มี Portfolio Deploy ออนไลน์แล้ว*  
> *ซึ่งหาได้น้อยมากในระดับปีการศึกษาเดียวกันครับ*

---

## 🛠️ Tech Stack เป้าหมาย (ตลาดงานไทย 2025–2026)

### ช่วง Roadmap นี้ (ถึง มี.ค. 2570)
```
TypeScript          ← ภาษาหลัก (ใช้ตลอด)
HTML + CSS          ← พื้นฐาน Layout
Flexbox + Grid      ← จัด Layout
React               ← UI Library (เรียนหลัง Roadmap จบ)
Git + GitHub        ← Version Control
```

### โปรเจกต์ใหญ่ปี 2 (มิ.ย. 2570 เป็นต้นไป)
```
Frontend:   Next.js + TypeScript + Tailwind CSS
Database:   PostgreSQL + Prisma ORM (ผ่าน Supabase ฟรี)
Auth:       NextAuth.js
Deploy:     Vercel (Frontend + Backend รวมกัน)
```

### ทำไมถึงเลือก Stack นี้?
| เหตุผล | รายละเอียด |
|:-------|:-----------|
| ✅ ตลาดไทย | React + Next.js = มาตรฐาน Startup ไทย 2025–2026 |
| ✅ TypeScript | บังคับแทบทุกบริษัทแล้ว ไม่ใช่ Optional |
| ✅ PostgreSQL | Vercel + Supabase ฟรี + นิยมโตเร็ว |
| ✅ Tailwind | นิยมในตลาดไทยเพิ่มขึ้นเรื่อยๆ |
| ✅ Vercel | Deploy ง่าย 1 คลิก + ฟรีสำหรับ Portfolio |

### อายุการใช้งาน (ประมาณ)
```
TypeScript / SQL    → 10+ ปี (แทบไม่หายไป)
React / Next.js     → 5–7 ปี (ยังแข็งแกร่ง)
Tailwind            → 3–5 ปี (อาจมีตัวใหม่มาแทน)
Supabase / Vercel   → 3–5 ปี (Cloud เปลี่ยนเร็วกว่า)
```

> ⚠️ Framework เปลี่ยนได้ — แต่ **TypeScript + SQL + Problem Solving** ติดตัวตลอดชีวิตครับ
