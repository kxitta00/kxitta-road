# 📜 Learning History — Kxitta

บันทึกความก้าวหน้าการเรียนรู้ เรียงจากใหม่ → เก่า

---

## 🏆 Month 1–2 Recap (มิ.ย. – ก.ย. 2026)

| ผลงาน | รายละเอียด |
|:------|:-----------|
| โจทย์ `function/` | ผ่าน 54 ข้อ: ตั้งแต่ Basic Types → Complex Business Logic |
| Mini Projects | `store_v0.1`, `miniPJrpgG`, `student_society_v0.1`, `store`, `miniProjectBfLern` |
| Training | `my-Trainning/` — ซ้อมรายวันแยกตามวันที่ (21–28 ส.ค.) |
| Engineering Docs | เขียน `.md` วิเคราะห์โจทย์ + วาด Flowchart ด้วย draw.io / excalidraw |
| Code Reading | แกะทำความเข้าใจโครงสร้าง `CP/terminal_quest` (multi-file, async, switch dispatch) |
| CP Playground | `CP/13-08`, `20-08`, `27-08`, `xkalux code-playground` |

---

## 📅 Daily / Weekly Logs

### [2026-09-05] — การแยกสถาปัตยกรรมโปรเจกต์เว็บ (Decoupling Web App) สู่ Standalone Repository และการจัดระเบียบ Workspace พื้นฐาน
- **การแยกโปรเจกต์เว็บแอปพลิเคชัน (Decoupling `myVibeWeb`):**
  - แยกโฟลเดอร์เว็บแอปพลิเคชันเพื่อการศึกษา (`CP-Web` หรือ `myVibeWeb`) ออกจากคลังฝึกฝนหลัก (`lernTs` / `kxitta-road`) ไปสู่โฟลเดอร์อิสระภายนอก (`~/myVibeWeb`)
  - เริ่มต้น Git Repository แยกเฉพาะตัวเว็บ เพื่อตัดปัญหา Git ซ้อน Git (Nested Repository) และรองรับการ Deploy ขึ้น **Vercel** ได้โดยตรงจาก Root Directory โดยไม่ต้องตั้งค่าซับซ้อน
  - ปรับปรุงเนื้อหาบทเรียน "การตั้งชื่อตัวแปรแต่ละแบบ (เน้น camelCase)" และแก้บัคการแสดงผลข้อความตัวอย่างในโหมดสว่าง (Light Mode) ให้คมชัดสมบูรณ์ก่อนแยกตัวโปรเจกต์
- **การปฏิรูปจัดระเบียบโครงสร้าง Workspace หลัก (Workspace Reorganization):**
  - รวบรวมไฟล์งานเดิมทั้งหมด 196 ไฟล์ (ไม่มีไฟล์ใดสูญหาย) จัดกลุ่มเข้าสู่สถาปัตยกรรมโฟลเดอร์ที่ได้มาตรฐานสากล:
    - `.docs/`: จัดเก็บเอกสาร Roadmap, แผนการเรียน, ประวัติการเรียนรู้ โดยซ่อนโฟลเดอร์ด้วยจุด (`.`) เพื่อความสะอาดตาใน File Explorer
    - `typescript/01-basics/`: รวบรวมพื้นฐานลูป เงื่อนไข และแบบฝึกหัดตั้งต้น (`for-loop`, `if-else`, `toeiA1`, `my-Trainning`)
    - `typescript/02-business-logic/`: รวบรวมโจทย์เชิงตรรกะข้อ 00–54 ครบทุกไฟล์โค้ดและไดอะแกรม (`.drawio`, `.excalidraw`)
    - `typescript/03-classwork-cp/`: งานประจำสัปดาห์ในคลาส CompPro
    - `typescript/04-daily-practice/`: พื้นที่สำหรับฝึกโจทย์รายวันตาม Roadmap
    - `mini-projects/`: รวบรวมโครงงานโปรเจกต์เล็กๆ
  - เขียนหน้าสารบัญ [README.md](file:///home/kxitta/lernTs/README.md) ใหม่อย่างเป็นทางการ มีรายละเอียดโครงสร้างและคำสั่งรัน Bun ชัดเจน
- **การตกผลึกแนวคิดทางวิศวกรรมและการเรียนรู้ (Engineering Mindset Shift):**
  - ตกผลึกคำแนะนำจากรุ่นพี่ซีเนียร์: การเข้าใจพื้นฐาน (Fundamentals) คือสิ่งสำคัญที่สุด และต้องฝึกใช้ AI เป็นเครื่องมือเสริม ไม่ใช่ผู้เขียนโค้ดแทนทั้งหมด
  - ตัดสินใจหยุดการ Vibe Coding ในสเกลโปรเจกต์ที่ใหญ่เกินความจำเป็น และหันกลับมาโฟกัสการลงมือเขียนโค้ดด้วยตนเองทีละบรรทัด โดยมีเป้าหมายประจำสัปดาห์คือการฝึกใช้ `.filter()` และ `.map()` ให้ชำนาญ

### [2026-09-04] — เจาะลึกโครงสร้างฟังก์ชันพื้นฐาน, การสร้างพิมพ์เขียว Object ด้วย type และท่ามาตรฐาน Export/Import (CP-Web v2.2.1)
- **ทบทวนและตกผลึกรากฐานฟังก์ชันแบบธรรมดา (Standard Functions):**
  - **Parameter vs Argument:** แยกแยะชัดเจนระหว่างตัวแปรตั้งชื่อรอรับค่าในหัวฟังก์ชัน (`Parameter`) กับข้อมูลจริงที่ส่งเข้าไปตอนเรียกใช้ (`Argument`) ผ่าน Mental Model "ตู้ขายน้ำอัตโนมัติ"
  - **Return Type & void:** การระบุชนิดข้อมูลผลลัพธ์หลังวงเล็บพารามิเตอร์เพื่อให้ TypeScript ตรวจสอบความถูกต้องอย่างเข้มงวด และการใช้ `: void` เมื่อฟังก์ชันมีหน้าที่เพียงแสดงผลหรือดำเนินการโดยไม่ส่งค่ากลับ
- **การสร้างพิมพ์เขียวให้ Object ด้วย `type` (Object Blueprint):**
  - ท่ามาตรฐานที่กระชับและเข้าใจง่าย: `type Student = { id: string; name: string; age: number; gpa: number; };`
  - การนำพิมพ์เขียวมาสร้างตัวแปร Object และข้อดีของการมี Type Safety ป้องกันการพิมพ์ชื่อฟิลด์ผิด
- **ท่ามาตรฐานการแยกไฟล์และการแชร์โค้ด (Standard Named Export & Import):**
  - ไฟล์ต้นทาง: ใส่ `export` หน้าพิมพ์เขียว `type` และฟังก์ชันที่ต้องการแชร์
  - ไฟล์ปลายทาง: นำเข้าด้วย `import { Student, showStudent } from "./studentModel"`
  - ความสำคัญของ `./` สำหรับไฟล์ภายในโปรเจกต์เดียวกัน และการละเว้นนามสกุล `.ts`
- **การปรับปรุงคู่มือและเอกสารใน CP-Web:**
  - อัปเดตคลังคำสั่งรวม Syntax Docs (`SectionSyntaxDocs.ts`) ในหมวดที่ 7 (Functions), หมวดที่ 8 (Type Alias & Interface) และหมวดที่ 9 (Import & Export)
  - อัปเดตคำอธิบายในบทเรียนหลัก `SectionFunction.ts`, `SectionTypeInterface.ts`, และ `SectionImportExport.ts` ให้เน้นท่ามาตรฐานชุดนี้ขึ้นเป็นอันดับแรก

### [2026-09-04] — Modular CSS Architecture Refactoring (CP-Web v2.2.0): แยก Monolithic CSS สู่ 10 Domain Modules
- **สถาปัตยกรรม Modular CSS (แยกไฟล์ตามขอบเขตการทำงานจริง):**
  - แก้ไขปัญหาไฟล์ `src/style.css` ขนาดมหึมา (4,130 บรรทัด) ที่เคยอัดรวมกันในไฟล์เดียว ซึ่งดูแลรักษายากและไม่เป็นไปตามมาตรฐานการทำงานในโปรเจกต์จริง
  - ออกแบบและจัดโครงสร้างใหม่เป็น 10 โมดูลย่อยภายใต้ `src/styles/`:
    1. `variables.css`: ค่าตัวแปรสี โทนสีขาวดำ Monochrome และ Design Tokens ทั้ง Light / Dark Mode
    2. `base.css`: CSS Reset, Typography, โครงสร้าง Layout รวม, กล่องโค้ด และ Page Loader
    3. `sidebar.css`: แถบนำทางด้านข้าง ปุ่มพับ-ขยายเมนู และ Overlay
    4. `topbar.css`: แถบเมนูด้านบน สลับธีม โลโก้แบรนด์ และปุ่มทางลัด
    5. `hero.css`: ส่วนต้อนรับ คำแนะนำอุปกรณ์ และแนวคิด Dev Mindset
    6. `sections.css`: การ์ดบทเรียน 1-Column, กล่อง Gotcha คำเตือนในสอบ และรายการสเปก
    7. `syntax.css`: กล่องค้นหาคำสั่ง และตาราง Syntax Cheat Sheet
    8. `practice.css`: คลังโจทย์ 32 ข้อ, แถบกรองหมวดหมู่ และเฉลยแบบพับเก็บได้
    9. `footer.css`: การ์ดเครดิตท้ายเว็บแบบ Minimal และป้ายกำกับเวอร์ชัน
    10. `responsive.css`: Media Queries ควบคุมการแสดงผลทุกหน้าจอ (Tablet <= 960px, Mobile <= 480px, <= 360px)
  - รวมโมดูลทั้งหมดผ่าน CSS `@import` ใน `src/style.css` (เหลือเพียง 14 บรรทัด) ทำงานกับ Vite HMR ได้ราบรื่น 100%
- **ทักษะการเป็น Software Engineer ที่ได้เรียนรู้เพิ่มเติม:**
  - เข้าใจความแตกต่างระหว่าง Monolithic vs Modular CSS ในการพัฒนาเว็บจริง
  - เรียนรู้เทคนิคการจัดการ CSS Architecture, Separation of Concerns และการรักษา Cascade Specificity โดยไม่ให้สไตล์พังหรือดีไซน์เพี้ยน

### [2026-09-04] — บันทึกเนื้อหาประจำสัปดาห์ในคลาส CompPro & การปูพื้นฐานสู่ Data Structures (เทอม 2)
**เนื้อหาวันที่3 แต่บันทึกวันที่4
- **เนื้อหาหลักที่เรียนและฝึกฝนในคลาสสัปดาห์นี้:**
  - **Naming Conventions:** การตั้งชื่อตัวแปรและฟังก์ชันแบบ `camelCase` ตามมาตรฐานสากล
  - **Data Types & Type System:** การระบุชนิดข้อมูลพื้นฐานอย่างแม่นยำ ป้องกันบั๊กตั้งแต่ตอนคอมไพล์
  - **Type Aliases & Enums (`type` / `enum`):** การสร้างประเภทข้อมูลกำหนดเอง และการใช้ Enum เพื่อจัดการชุดค่าคงที่ที่แน่นอน
  - **Conditional Logic:** การควบคุมเงื่อนไขและการตัดสินใจของโปรแกรมด้วย `if / else`
  - **Collections & Traversal:** โครงสร้างข้อมูล `Array` และการเขียน `loop` ดึงสมาชิกใน Array ออกมาแสดงผลและประมวลผล
  - **Modular Architecture:** การแยกโค้ดเป็นหลายไฟล์และการเชื่อมโยงการทำงานผ่าน `export / import`
- **เนื้อหาเกริ่นนำเพื่อเตรียมความพร้อมสู่ Data Structures (เทอม 2):**
  - **Object-Oriented Programming (`class`):** แม่แบบในการสร้าง Object สำหรับต่อยอดสู่โครงสร้างข้อมูลเชิงลึก (เช่น Node, Linked List, Stack, Queue)
  - **Arrow Functions (`() => {}`):** ไวยากรณ์ฟังก์ชันยุคใหม่ที่มีความกระชับและใช้เป็น Callback ในโครงสร้างข้อมูล
  - **Closures (โค้ชเชอร์):** กลไกการจำ Scope ของฟังก์ชัน (Lexical Environment) สำหรับการซ่อนข้อมูล (Encapsulation) และ Data State Management
  - **Built-in Functions:** ฟังก์ชันมาตรฐานที่ภาษามีให้ใช้งาน (เช่น Array methods, String methods, Math) เพื่อนำมาประยุกต์ใช้ลดความซ้ำซ้อน
  - **Imperative Programming:** การเขียนโค้ดสั่งงานแบบระบุคำสั่งทีละขั้นตอน (How to do) เพื่อสร้างพื้นฐานความเข้าใจการทำงานของหน่วยความจำและ CPU ก่อนขยับไปสู่การวิเคราะห์อัลกอริทึมและ Big-O ในเทอมถัดไป

### [2026-09-04] — Major Redesign v2.0 ➔ v2.1.5: สถาปัตยกรรม Pure Monochrome, คลังโจทย์ 32 ข้อ, SVG Alpha Favicon & Vibe Coding Workflow
- **Major Redesign v2.0 (Lean Architecture & High Performance):**
  - ยกเลิกระบบ Interactive Sandbox / Sucrase ออกจากหน้าเว็บ เพื่อลดขนาด Bundle และทำให้เว็บโหลดเร็วระดับเสี้ยววินาที (<0.1s)
  - แยกเนื้อหาทฤษฎีออกจาก **คลังโจทย์ฝึกฝน 32 ข้อ (`#practice`)** แบ่งตาม 7 บทเรียน พร้อมเกณฑ์ข้อสอบจริง (Situation, Goal, Input/Output Sets, Process, Hint) และเฉลยซ่อนใน `<details>`
  - เพิ่มกล่อง **Gotcha Boxes (จุดระวังในสอบ)** ในทุกบทเรียน รวบรวมกับดักที่เด็กปี 1 มักพลาดบ่อย
- **Pure Monochrome Design System (v2.1):**
  - เปลี่ยนชุดสีทั้งเว็บสู่สไตล์ **Geist / Vercel Minimalist**: พื้นหลัง Pitch Black (`#000000`), การ์ดเรียบหรู (`#121212`), เส้นขอบคมชัด (`#242424`), Accent ขาวบริสุทธิ์
  - ตั้งค่าเริ่มต้นของเว็บไซต์เป็น **Light Mode โทนขาวมินิมอล** พร้อมระบบสลับธีมและบันทึกสถานะลง `localStorage`
- **Full-Width Canvas & 1-Column Responsive Cards (v2.1.2 – v2.1.4):**
  - ปลดล็อกขีดจำกัดความกว้าง 860px ขยาย Layout เต็มจอ PC 100% เพื่อพื้นที่อ่านโค้ดเต็มประสิทธิภาพ
  - จัดการ์ดบทเรียนเป็น 1-Column เรียงลงไป ขยายเต็มความกว้าง อ่านโค้ดสบายตาไม่โดนบีบ
  - ปรับปรุง Responsive รองรับทุกขนาดหน้าจอ (iPad Breakpoint 960px, Mobile Padding 12px บนจอ <= 360px) ไร้ปัญหาข้อความหรือกล่องโค้ดล้นจอ (Zero-Overflow)
- **Official Vector SVG Favicon & Brand Chrome (v2.1.5):**
  - ออกแบบและติดตั้งไอคอนทางการแบบ Vector SVG ([public/favicon.svg](file:///home/kxitta/lernTs/kxittaRoad/CP-Web/public/favicon.svg)) พร้อมระบบ **Alpha Transparency 100%** รอบขอบมน ทำให้บน Tab Browser ทุกโหมดไม่ติดกรอบสี่เหลี่ยมสีขาว
  - ประดับไอคอนแบรนด์ลงบนแถบเมนูด้านบน ([Topbar.ts](file:///home/kxitta/lernTs/kxittaRoad/CP-Web/src/components/Topbar.ts)) และแถบข้าง ([Sidebar.ts](file:///home/kxitta/lernTs/kxittaRoad/CP-Web/src/components/Sidebar.ts))
- **Vibe Coding Engineering Documentation & Architecture Guide:**
  - จัดทำเอกสารสถาปัตยกรรมระบบฉบับเต็มใน [VIBE_CODING_WORKFLOW.md](file:///home/kxitta/lernTs/kxittaRoad/CP-Web/VIBE_CODING_WORKFLOW.md) อธิบายกระบวนการพัฒนา 6 ขั้นตอน, แผนภาพ Mermaid Data Flow และ Developer Extension Playbook
  - ปรับปรุง [README.md](file:///home/kxitta/lernTs/kxittaRoad/CP-Web/README.md) และ [REDESIGN_PLAN_v2.0.md](file:///home/kxitta/lernTs/kxittaRoad/CP-Web/REDESIGN_PLAN_v2.0.md) ยึดมาตรฐาน Strict Zero-Emoji Standard 100%
- **Human-in-the-Loop Content Fine-tuning (ปรับแต่งเนื้อหาด้วยตนเอง):**
  - ปรับปรุงคำบรรยายหน้าหลัก ([Hero.ts](file:///home/kxitta/lernTs/kxittaRoad/CP-Web/src/components/Hero.ts)) ให้ครอบคลุมทั้งเพื่อน ComSci และผู้ที่สนใจศึกษา TypeScript ทั่วไป พร้อมระบุช่องทางแจ้งข้อผิดพลาด (Discord: `.hakuei`) และข้อคิดสร้างกำลังใจในการฝึกโค้ด
  - เสริมคำอธิบาย Data Types ใน [SectionSyntaxDocs.ts](file:///home/kxitta/lernTs/kxittaRoad/CP-Web/src/components/sections/SectionSyntaxDocs.ts) (int vs float, boolean/ตรรกศาสตร์, any, undefined)

### [2026-09-04] — พัฒนา & Deploy เว็บไซต์สรุปเนื้อหาและคลังโจทย์ ComSci // CP Docs (CP-Web v1.0)
- **สร้างเว็บแอปพลิเคชันเพื่อการศึกษา:** พัฒนาโปรเจกต์ `CP-Web` ด้วย Vite + TypeScript + Vanilla CSS สรุปเนื้อหาวิชา Computer Programming (CompPro) ให้เพื่อนๆ CS#20
- **คลังโจทย์และระบบจำลองข้อสอบแล็บ (Exam Spec Format):**
  - ออกแบบแบบฝึกหัด 35 ข้อครบทุกหมวดหมู่ (Data Types, String Methods, Control Statements, Functions, Type/Interface, Modules)
  - พัฒนากล่อง Interactive Sandbox และ WSL Terminal เสมือนบนเบราว์เซอร์ ทดลองรันโค้ดจริงได้ทันที (ใช้ Sucrase transpiler)
  - ระบบเฉลยพร้อม Line-by-Line Code Breakdown และปุ่มดึงโค้ดเฉลยมาทดสอบ
  - ระบบหลอดพลังความคืบหน้า (Progress Counter 0/35) และการติ๊กข้อที่ทำเสร็จ บันทึกลง `localStorage` พร้อมปุ่มรีเซ็ต
- **เจาะลึกเนื้อหา:**
  - เพิ่มเนื้อหาเปรียบเทียบการสร้าง Object ด้วย `type` vs `interface` (Syntax, Optional Property `?`, Intersection `&` vs `extends`)
  - คลังคำสั่งรวม Syntax Docs (Cheat Sheet) พร้อมระบบ Real-time Search กรองคำสั่งทันใจ
  - หมวดเกร็ดความรู้ Dev Mindset และการตั้งชื่อตัวแปรแบบ camelCase
- **ยกเครื่อง Responsive & สถาปัตยกรรม SPA Routing:**
  - ปรับปรุง CSS รองรับทุกหน้าจอ 100% (สมาร์ทโฟน, แท็บเล็ต, เดสก์ท็อป) ไร้ปัญหาจอล้น
  - เปลี่ยนจากเว็บหน้าเดียวยาวเหยียดเป็นระบบ **Multi-page SPA Routing** พร้อมหน้าจอ Loading State (Page Transition Loader) แสดงไอคอนหมุนและชื่อบทเรียนอย่างลื่นไหล
  - เพิ่มระบบพับ/ขยายแถบเมนู (Collapsible Sidebar) รองรับปุ่ม Hamburger และคีย์ลัด **`Ctrl + B`** เพื่อขยายกล่องโค้ดเป็นแบบ Full-width กว้าง คมชัด สบายตา
  - เพิ่มแถบนำทางบทเรียน `← บทก่อนหน้า` | `บทถัดไป →`
- **Deploy ขึ้นระบบ Production:**
  - สร้าง Git Repository, จัดการ `.gitignore` และ Push โค้ดขึ้น GitHub (`kxitta00/CP-Web`)
  - เชื่อมต่อและ Deploy บน **Vercel** สำหรับเปิดออนไลน์ให้เพื่อนร่วมรุ่น CS#20 เข้ามาทบทวนและฝึกทำโจทย์ได้ทุกที่

### [2026-09-02] — เริ่มต้นระบบ Tracking อย่างเป็นทางการ
- ตั้งค่า `MY_AI_PROMPT.md`, `MY_SKILLS_ASSESSMENT.md`, `LEARNING_HISTORY.md`
- AI สัมภาษณ์และประเมินสกิลรอบแรกจากโค้ดจริงทั้งหมดในโปรเจกต์
- **ระดับประเมิน:** Solid Beginner → Junior Developer
- **จุดแข็ง:** Business Logic, Data Aggregation, Problem Breakdown + Flowchart
- **จุดที่ต้องเติม:** Modern Array Methods, String Methods, Error Handling, HTML/CSS Layout

---
*(บันทึกใหม่จะเพิ่มด้านบนบรรทัดนี้เสมอ)*
