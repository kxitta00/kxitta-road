# Pomodoro Timer (Study Project)
## 1. วัตถุประสงค์ของโปรเจกต์
```text
โปรเจกต์นี้ผมทำขึ้นมาเพื่อฝึกเขียนเว็บด้วย TypeScript, HTML CSS และการเชื่อม DOM
โดยเน้นทำความเข้าใจตั้งแต่การวางโครงสร้างไปจนถึง Logic เบื้องหลัง 

ผมใช้ AI ทำหน้าที่เหมือน "รุ่นพี่ Senior (Tutor)" คอยช่วยแนะแนวคิด ชี้ทาง และตั้งคำถามกระตุ้น ส่วนโค้ดทุกบรรทัดผมเป็นคนวิเคราะห์และลงมือพิมพ์ด้วยตัวเองทั้งหมด
และทุกครั้งที่เจอคำสั่ง ฟังก์ชัน หรือตรรกะคณิตศาสตร์ใหม่ๆ ที่เพิ่งเคยเจอ
จะนำมาจดสรุปด้วยภาษาและความเข้าใจของตัวเองไว้ใน README นี้ เพื่อให้มั่นใจว่าเข้าใจคอนเซ็ปต์ของมันจริงๆ ครับ
```

## 2. โครงสร้างไฟล์ (Architecture)
```text
pomodoro-timer/
├── index.html        # Skeleton: โครงสร้าง UI และปุ่มทั้งหมด
├── style.css         # Skin: ตกแต่ง Dark Theme และ Layout ด้วย Flexbox
├── alarmSound.mp3    # alarmSound
├── timer-engine.ts   # Brain (Pure Logic): ฟังก์ชันคำนวณเวลาเพียวๆ ไม่ยุ่งกับ DOM
├── app.js            # Bun Compile | DOM
├── app.ts            # TS
├── ui-mockup.jpg     # Mockup: ภาพต้นแบบ UI ที่ให้ AI เจน เพื่อนำมาฝึกแกะกล่องทำเป็น HTML/CSS 
└── README.md         # เอกสารสรุปสิ่งที่ได้เรียนรู้และหลักการทำงานของระบบ
```


## 3. บันทึกความรู้และสรุปรายฟังก์ชัน (Knowledge Base)
```text
Function formatTime ./timer-engine.ts
1. การแปลงวินาทีเป็นนาทีโดยการนำวินาทีมาหาร 60 แล้วปัดเศษด้วย Math.floor | EX 120 / 60 = 2m
2. การหาเศษวินาทีโดยนำวินาทีทั้งหมดไปหาร 60 โดยใช้ modula เพื่อเศษมาเป็นวินาที  |EX 125 % 60 = 5s
.padStart(targetLength, padString)  | EX ("5".padStart(2, "0")) = "05"
เป็น string method ช่วยเสริมตัวอักษร 


Function toSeconds ./timer-engine.ts
รับนาทีเข้ามาแล้ว * 60 EX 50*60 = 3000 วินาที

Function adjustMinutes //ฟังก์ชันเพิ่มลดเวลาโดยมีการกำหนดขอบเขตต่ำสุดและมากสุด ./timer-engine.ts 
input รับ เวลาปัจจุบัน, เวลาที่การเพิ่มลด, เวลาต่ำสุดที่ใส่ได้,เวลาสูงสุดที่ใส่ได้
เงื่อนไข : ถ้า เวลาที่เพิ่มเข้ามาเอาไปบวกหรือลบเวลาปัจบันแล้วน้อยกว่าหรือมากกว่าขอบเขตให้ return เวลาตามขอบเขตออกไป |
EX เวลาปัจจุบัน 50 เพิ่มมา 15 ต่ำสุดได้1 ขึ้นไปและมากสุดได้ไม่เกิน 60 ฟังก์ชันก็จะ return 60 ออกไปเพราะนำเวลาปัจจุบันมาบวกเพิ่มเวลาแล้วมันทลุขอบเขต

DOM Syntax W TypeScript
document.getElementById //ไปดึง ID มากจาก html โดยใช้ id ที่ระบุไว้กับแท็ก //แท็กใน HTML	Type ที่ต้องใส่ใน TypeScript	ตัวอย่างการใช้งานเฉพาะ
<button>	HTMLButtonElement	สั่ง .disabled = true, เช็คการคลิก
<input>	HTMLInputElement	ดึงค่า .value, เช็ค .checked
<div>	HTMLDivElement (หรือ HTMLElement)	เปลี่ยนตัวเลข, เปลี่ยนข้อความ
<span>	HTMLSpanElement (หรือ HTMLElement)	เปลี่ยนข้อความกำกับ
<h2>, <h1>	HTMLHeadingElement (หรือ HTMLElement)	แสดงตัวเลขเวลา

.textContent คือการเอาข้อความ string ไปเขียนทับใหม่ใน element นั้นต้องเป็น string เท่านั้น EX element.textContent = String(text) | ${text}

.classList.toggle(class, เงื่อนไข) 
- ถ้าเงื่อนไขเป็น true -> บังคับใส่ class (เหมือน .add)
- ถ้าเงื่อนไขเป็น false -> บังคับลบ class (เหมือน .remove)
คือการไปเพิ่มหรือลบคลาสออกโดยทำก็ต่อเมื่อเงื่อนไขเป็น true EX element.classList.toggle("active", currentMode === "focus") ถ้าเงื่อไขเป็นจริงแล้วใน class นั้นไม่มี active ก็จะทำการเพิ่ม active เข้าไป แต่ถ้ามีอยุ่แล้วจะเป็นการเอาออก
element.classList.toggle("active") สลับสถานะถ้าไม่มีให้เพิ่ม มีแล้วให้ลบ
element.classList.remove() อีกสองตัวที่ใช้ได้เหมือนกัน
element.classList.add()

addEventListener คือฟังก์ชันดักจับเหตุการณ์ (Event) ที่เกิดขึ้นกับ element นั้นๆ เมื่อเกิดเหตุการณ์ตรงกับที่ระบุ จะสั่งให้ฟังก์ชัน (Callback) ด้านในทำงานทันที
EX element.addEventListener("click", () => { }) //ดักการคลิก
EX element.addEventListener("keydown", (e) => { ... }) // ดักจับการกดแป้นพิมพ์

### setInterval && clearInterval (การสั่งงานวนลูปโดยที่หน่วงเวลา)
syntax
const timerId = window.setInterval(callbackFunction, delayInMilliseconds);
clearInterval(timerId)
- **callbackFunction:** โค้ดที่จะให้ทำงานซ้ำๆ
- **delayInMilliseconds:** เวลาหน่วงในหน่วยมิลลิวินาที (1000 ms = 1 วินาที)
- **คืนค่าเป็น (Returns):** `number` (Timer ID เอาไว้ใช้สั่งหยุด)

EX
// 1. ประกาศตัวแปรเก็บ Timer ID (เริ่มต้นเป็น null เพราะยังไม่รัน)
let timerId: number | null = null;
// 2. สั่งเริ่มนับเวลา (ทุกๆ 1 วินาที)
timerId = window.setInterval(() => {
  console.log("ผ่านไป 1 วินาที");
}, 1000);
// 3. ฟังก์ชันสำหรับหยุดเวลา 
function stopTimer(): void {
  if (timerId !== null) {
    clearInterval(timerId); // สั่งยกเลิกการวนลูป
    timerId = null;         // เคลียร์ค่ากลับเป็น null
  }
}
```