# lernTs

คลังเก็บโค้ดฝึกเขียนโปรแกรมภาษา TypeScript, พื้นฐานเว็บ และมินิโปรเจกต์ของ Krittamet (นักศึกษา Computer Science RUMTI CS#20)

---

## โครงสร้างโฟลเดอร์

```text
lernTs/
├── typescript/        # โค้ดฝึกภาษา TypeScript (พื้นฐาน, ตรรกะฟังก์ชัน, งานในคลาส)
├── html-css/          # 
├── mini-projects/     # มินิโปรเจกต์และระบบจำลองต่างๆ
├── index.ts           # ไฟล์สำหรับทดลองรันโค้ด
└── package.json       # การตั้งค่า Bun Runtime
```

---

## วิธีรันโค้ด

โปรเจกต์นี้ใช้ [Bun](https://bun.sh) เป็น Runtime:

```bash
# ติดตั้ง dependencies (ถ้ามี)
bun install

# ทดลองรันโค้ดใน index.ts
bun run index.ts

# ตัวอย่างการรันไฟล์ในโฟลเดอร์
bun run typescript/02-business-logic/01.ts
```
