# Kxitta · Coding & Engineering Journey

คลังบันทึกการเรียนรู้, โจทย์ฝึกฝน และโปรเจกต์ตลอดเส้นทางการพัฒนาสู่ Software Engineer / Intermediate Developer

---

## 🗺️ แผนการและประวัติการเรียนรู้ (Documentation)

<details>
<summary><strong>คลิกเพื่อเปิดดูเอกสาร Roadmap & ประวัติทั้งหมด</strong></summary>

<br />

- [ROADMAP.md](.docs/ROADMAP.md) — แผนที่การพัฒนาสู่ Intermediate Developer ตามปฏิทินจริง
- [LEARNING_HISTORY.md](.docs/LEARNING_HISTORY.md) — บันทึกประวัติและสรุปความก้าวหน้ารายวัน
- [MY_SKILLS_ASSESSMENT.md](.docs/MY_SKILLS_ASSESSMENT.md) — การประเมินจุดแข็งและสิ่งที่ต้องพัฒนาต่อ
- [MY_AI_PROMPT.md](.docs/MY_AI_PROMPT.md) — สรุปแนวทางการใช้ AI เป็นผู้ช่วยทบทวนโค้ด

</details>

---

## 📂 โครงสร้างโฟลเดอร์ในโปรเจกต์ (Folder Architecture)

```text
.
├── 📁 .docs/                         # (ซ่อน) เอกสาร Roadmap, แผนการเรียน และประวัติรายวัน
│   ├── ROADMAP.md
│   ├── LEARNING_HISTORY.md
│   ├── MY_SKILLS_ASSESSMENT.md
│   └── MY_AI_PROMPT.md
│
├── 🟦 typescript/                    # แหล่งรวมการฝึกฝนภาษา TypeScript
│   ├── 01-basics/                    # พื้นฐานตัวแปร, if-else, for-loop, training
│   ├── 02-business-logic/            # แบบฝึกหัดแก้ปัญหาเชิงตรรกะ (โจทย์ 00–54 (พร้อม Flowchart ในบางข้อ))
│   ├── 03-classwork-cp/              # งานประจำสัปดาห์ในคลาส Computer Programming
│   └── 04-daily-practice/           # พื้นที่ฝึกโจทย์ประจำวัน (Daily Challenges)
│
├── 🚀 mini-projects/                 # มินิโปรเจกต์และเกม Terminal
│   ├── student_society_v0.1/
│   └── someMiniProject/
│
├── index.ts                          # สแครตช์แพดทดลองรันโค้ดรวดเร็ว
├── package.json                      # การตั้งค่า Bun & TypeScript Runtime
└── tsconfig.json                     # TypeScript Configuration
```

---

## ⚡ วิธีรันโค้ด (Quick Start)

โปรเจกต์นี้ใช้ [Bun](https://bun.sh) เป็น Runtime หลักเพื่อความเร็วสูง:

```bash
# ติดตั้ง dependencies
bun install

# ทดลองรันโค้ดใน index.ts
bun run index.ts

# ตัวอย่างการรันไฟล์โจทย์
bun run typescript/02-business-logic/01.ts
```

---

## 🎯 กฎเหล็กในการฝึกฝน
1. **Consistency over Cramming:** ฝึกวันละ 1-2 ข้ออย่างสม่ำเสมอ ดีกว่าหักโหมก่อนวันส่งงาน
2. **Fundamentals First:** เข้าใจ Logic และเขียนโค้ดด้วยมือตัวเองก่อนเสมอ
3. **Trace your Code:** หมั่นไล่สายตัวแปรและดูขั้นตอนการทำงานให้เข้าใจลึกซึ้ง
