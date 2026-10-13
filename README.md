# kxitta-road (Frontend & TypeScript Learning)

เป็นคลังเก็บโค้ดฝึกเขียนเว็บและภาษา TypeScript ของ นายกฤตเมธ (คอม) ปัจจุบันกำลังศึกษาอยู่ที่ RMUTI (มทร.อีสาน นครราชสีมา) สาขา Computer Science ชั้นปีที่ 1

**เป้าหมายของ Repo นี้:**
- ฝึกพื้นฐานการเขียนโปรแกรม (Programming Fundamentals) และการคิดเชิงตรรกะ (Logic & Problem Solving) 
- ฝึกพื้นฐาน Web Core (HTML5, Modern CSS, TypeScript) และ DOM ให้เข้าใจ

---

## รายละเอียดโครงสร้างโฟลเดอร์

```text
kxitta-road/
├── .agents/              # กฎการสอนของ AI และคู่มือการถาม/แก้ปัญหา (Tutor Mode, How to Ask)
├── roadmap-4weeks/       # แผนฝึก Frontend (HTML5, CSS, TS) และ Workshop 4 สัปดาห์ช่วงปิดเทอมเล็กปี 1 เทอม 1
├── typescript/           # รวมโค้ดภาษา TypeScript (ทั้งงานในคลาสและโจทย์ฝึกเล่น)
├── html-css/             # ฝึกจัดหน้าเว็บ แกะ Box Model และฝึกทำ UI Components
└── mini-projects/        # มินิโปรเจกต์เว็บทดลองสร้างจริง
```


## เครื่องมือที่ใช้ (Tech Stack & Tooling)

- **Runtime:** [Bun](https://bun.sh) (ใช้รัน TypeScript ได้ทันทีโดยไม่ต้องผ่านคอมไพเลอร์แยก)
- **Languages:** TypeScript, HTML5, CSS3
- **Dev Tooling:** Vite, Git, GitHub

---

## วิธีการรันโค้ด

```bash
# ติดตั้ง dependencies (ถ้ามี)
bun install

# ตัวอย่างการรันไฟล์ TypeScript ด้วย Bun
bun run roadmap-4weeks/week2/logic-arena-02/index.ts
bun run typescript/02-business-logic/01.ts

# รัน Dev Server สำหรับเปิดหน้าเว็บ
bun run dev
```
