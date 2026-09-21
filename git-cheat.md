# สรุปคำสั่ง Git ฉบับวิศวกรซอฟต์แวร์ (Git Cheat Sheet)

คู่มืออ้างอิงคำสั่ง Git ที่ใช้บ่อย พร้อม Mental Model และตัวอย่างการใช้งานจริงในชีวิตประจำวัน

---

## 1. แผนผังวงจรชีวิตของไฟล์ใน Git (4 States Mental Model)

เข้าใจ 4 สถานะนี้ก่อนพิมพ์คำสั่ง แล้วจะไม่หลงทาง:

```text
[ Working Directory ]  -- (ไฟล์ที่กำลังพิมพ์แก้ในเครื่อง)
        │
        ▼  git add <file>
[ Staging Area ]       -- (พื้นที่เตรียมของลงกล่อง ก่อนบันทึก)
        │
        ▼  git commit -m "..."
[ Local Repository ]   -- (บันทึกประวัติศาสตร์ลงกล่องในเครื่องเรียบร้อย)
        │
        ▼  git push origin <branch>
[ Remote Repository ]  -- (ส่งขึ้นเซิร์ฟเวอร์ เช่น GitHub / GitLab)
```

---

## 2. คำสั่งพื้นฐานที่ใช้ประจำวัน (Daily Core Workflow - 90% ของการทำงาน)

### 2.1 ตรวจสอบสถานะ
```bash
# ตรวจสอบดูว่ามีไฟล์ไหนถูกแก้ไข, ไฟล์ไหนรอ commit, หรือไฟล์ไหนยังไม่ถูก track
git status
```

### 2.2 นำไฟล์เข้า Staging Area
```bash
# นำเฉพาะไฟล์ที่ระบุเข้า staging
git add mini-projects/pomodoro-timer/index.html

# นำการเปลี่ยนแปลงทั้งหมดในโฟลเดอร์ปัจจุบันและโฟลเดอร์ย่อยเข้า staging
git add .
```

### 2.3 บันทึกประวัติศาสตร์ (Commit)
```bash
# บันทึกพร้อมระบุข้อความอธิบายการเปลี่ยนแปลง
git commit -m "feat(pomodoro): create html skeleton for timer card"
```

### 2.4 ส่งและดึงข้อมูลกับเซิร์ฟเวอร์ (Push / Pull)
```bash
# ส่งประวัติศาสตร์ขึ้น remote branch (เช่น origin/main)
git push origin main

# ดึงประวัติศาสตร์ล่าสุดจาก remote ลงมาอัปเดตเครื่องตัวเอง
git pull origin main
```

---

## 3. การตรวจสอบการเปลี่ยนแปลงและประวัติศาสตร์ (Inspection & Diff)

### 3.1 ตรวจสอบความแตกต่างของโค้ด
```bash
# ดูความแตกต่างระหว่างไฟล์ในเครื่องกับ commit ล่าสุด (ก่อนกด git add)
git diff

# ดูความแตกต่างของไฟล์ที่อยู่ใน Staging Area เทียบกับ commit ล่าสุด (หลังกด git add)
git diff --staged

# ดูความต่างเฉพาะไฟล์ที่ต้องการ
git diff path/to/file.ts
```

### 3.2 ดูประวัติการ Commit
```bash
# ดูประวัติแบบบรรทัดเดียว สั้นกระชับ อ่านง่าย
git log --oneline

# ดูประวัติ 5 รายการล่าสุด
git log --oneline -n 5

# ดูประวัติแบบแผนภูมิกิ่งก้านสาขา
git log --oneline --graph --decorate --all
```

---

## 4. การจัดการกิ่งก้าน (Branching & Switching)

ใช้เมื่อต้องการแยกไปทำฟีเจอร์ใหม่โดยไม่กระทบโค้ดหลัก

```bash
# ดูรายชื่อ branch ทั้งหมดที่มีในเครื่อง (* คือ branch ปัจจุบัน)
git branch

# สร้าง branch ใหม่และสลับไปที่ branch นั้นทันที (แนะนำ)
git switch -c feature/timer-stepper
# หรือคำสั่งดั้งเดิม:
git checkout -b feature/timer-stepper

# สลับกลับไปยัง branch ที่มีอยู่แล้ว
git switch main
# หรือคำสั่งดั้งเดิม:
git checkout main

# รวมโค้ดจาก branch อื่นเข้ามายัง branch ปัจจุบัน (ต้อง switch มาที่ตัวรับก่อน เช่น main)
git merge feature/timer-stepper

# ลบ branch ที่รวมเสร็จแล้วทิ้ง
git branch -d feature/timer-stepper
```

---

## 5. คู่มือกู้ชีพเมื่อทำพลาด (Undo & Rescue Operations)

### กรณีที่ 1: แก้ไฟล์เละ อยากยกเลิกการแก้ไขกลับไปเหมือน commit ล่าสุด
```bash
# ยกเลิกการแก้ไขเฉพาะไฟล์นั้น (ย้อนกลับสู่สภาพเดิม)
git restore path/to/file.ts

# ยกเลิกการแก้ไขทุกไฟล์ในโปรเจกต์
git restore .
```

### กรณีที่ 2: เผลอกด `git add` ไปแล้ว อยากเอาออกจาก Staging
```bash
# ดึงไฟล์ออกจาก staging โดยที่โค้ดยังอยู่เหมือนเดิม ไม่หาย
git restore --staged path/to/file.ts
```

### กรณีที่ 3: พิมพ์ Commit Message ผิด หรือลืมใส่บางไฟล์ใน Commit ล่าสุด
```bash
# แก้ไขข้อความ commit ล่าสุด
git commit --amend -m "fix(calc): guard against duplicate decimal point"

# ถ้าลืมใส่ไฟล์ ให้ add ไฟล์ก่อน แล้วใช้ --no-edit เพื่อรวมเข้า commit ล่าสุด
git add forgotten-file.ts
git commit --amend --no-edit
```

### กรณีที่ 4: งานยังไม่เสร็จ แต่อยากสลับ branch ด่วน (เก็บของชั่วคราว)
```bash
# กวาดของที่ยังทำค้างอยู่ไปซ่อนไว้ในลิ้นชัก
git stash

# ดูรายการ stash ทั้งหมด
git stash list

# ดึงของล่าสุดในลิ้นชักกลับมาทำต่อ
git stash pop
```

---

## 6. มาตรฐานการเขียน Commit Message สไตล์วิศวกร (Conventional Commits)

โครงสร้างมาตรฐาน: `<type>(<scope>): <subject>`

| Type | หน้าที่ | ตัวอย่าง |
| :--- | :--- | :--- |
| `feat` | เพิ่มฟีเจอร์ใหม่ให้กับระบบ | `feat(timer): implement countdown logic in engine` |
| `fix` | แก้ไขข้อผิดพลาด / บั๊ก | `fix(calc): prevent division by zero error` |
| `refactor` | ปรับโครงสร้างโค้ดให้สะอาดขึ้น โดยผลลัพธ์การทำงานเหมือนเดิม | `refactor(engine): separate pure logic from dom controller` |
| `style` | ปรับปรุงการจัดหน้า, ลบช่องว่าง, CSS โดยไม่กระทบตรรกะ | `style(pomodoro): adjust card padding and button colors` |
| `docs` | เพิ่มหรือแก้ไขเอกสาร | `docs: update how-to-ask guide and git cheat sheet` |
| `chore` | งานระบบทั่วไป เช่น อัปเดต config, build script, package | `chore: configure bun build script for pomodoro` |

---

## 7. ลำดับขั้นตอนแบบแผนมาตรฐานในการทำงาน 1 รอบ (Standard Loop)

```bash
# 1. เช็กสถานะก่อนเริ่ม
git status

# 2. แก้โค้ดเสร็จ ตรวจดูความถูกต้อง
git diff

# 3. นำไฟล์ที่แก้เข้า staging
git add .

# 4. บันทึกพร้อมระบุเหตุผล
git commit -m "feat(pomodoro): add stepper controls for focus and break"

# 5. ส่งขึ้น remote
git push origin main
```
