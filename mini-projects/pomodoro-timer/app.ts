import { formatTime, toSeconds, adjustMinutes } from "./timer-engine";

// 1. STATE: ตัวแปรเก็บข้อมูลความทรงจำของระบบ [x]
// 2. PURE HELPER: ฟังก์ชันแปลงค่าคำนวณ (แปลงวินาที -> "MM:SS") [x]
// 3. DOM SELECTION: ดึง Element จาก index.html มาเก็บในตัวแปร [x]
// 4. LOGIC & EVENT LISTENERS: ฟังก์ชันสั่งงานและดักการคลิกปุ่ม [x]


let focusMinutes: number = 50;
let breakMinutes: number = 10;

type Mode = "focus" | "break";
let currentMode: Mode = "focus";

let timeLeft: number = toSeconds(focusMinutes);
let isRunning: boolean = false;
let timerInterval: number | null = null;

//alarmSound
const alarmSound = new Audio("./alarmSound.mp3");
//display
const timerDisplay = document.getElementById("timer-display") as HTMLElement;
const labelDisplay = document.getElementById("timer-label") as HTMLElement;
//mode-switch
const focusModeBtn = document.getElementById("focus-mode-btn") as HTMLButtonElement;
const breakModeBtn = document.getElementById("break-mode-btn") as HTMLButtonElement;
//start-reset-btn
const startBtn = document.getElementById("start-btn") as HTMLButtonElement;
const resetBtn = document.getElementById("reset-btn") as HTMLButtonElement;
//stepper-focus
const stepperFocusTime = document.getElementById("focus-time") as HTMLElement;
const focusDecBtn = document.getElementById("focus-dec-btn") as HTMLButtonElement;
const focusIncBtn = document.getElementById("focus-inc-btn") as HTMLButtonElement;
//stepper-break
const stepperBreakTime = document.getElementById("break-time") as HTMLElement;
const breakDecBtn = document.getElementById("break-dec-btn") as HTMLButtonElement;
const breakIncBtn = document.getElementById("break-inc-btn") as HTMLButtonElement;

//ฟังก์ชันอัพเดทหน้า UI ทั้งหมด
function updateUI(): void {
  timerDisplay.textContent = formatTime(timeLeft);
  stepperFocusTime.textContent = String(focusMinutes);
  stepperBreakTime.textContent = String(breakMinutes);
  if (currentMode === "focus") {
    labelDisplay.textContent = "Focus Time"
  } else {
    labelDisplay.textContent = "Break Time"
  }
  focusModeBtn.classList.toggle("active", currentMode === "focus");
  breakModeBtn.classList.toggle("active", currentMode === "break")
  if (isRunning) {
    startBtn.textContent = "PAUSE"
  } else {
    startBtn.textContent = "START"
  }
}

//โซนการ toggle โหมด focus / break
focusModeBtn.addEventListener("click", () => {
  if (!isRunning) {
    currentMode = "focus"
    timeLeft = toSeconds(focusMinutes)
    updateUI()
  }
})
breakModeBtn.addEventListener("click", () => {
  if (!isRunning) {
    currentMode = "break"
    timeLeft = toSeconds(breakMinutes)
    updateUI()
  }
})


//โซนกดปุ่มลดเพิ่มเวลา focus
//เพิ่ม
focusIncBtn.addEventListener("click", () => {
  focusMinutes = adjustMinutes(focusMinutes, 5, 1, 60)
  if (currentMode === "focus" && !isRunning) {
    timeLeft = toSeconds(focusMinutes)
  }
  updateUI()

})
//ลด
focusDecBtn.addEventListener("click", () => {
  focusMinutes = adjustMinutes(focusMinutes, -5, 5, 60)
  if (currentMode === "focus" && !isRunning) {
    timeLeft = toSeconds(focusMinutes)
  }
  updateUI()
})

//โซนกดปุ่มลดเพิ่มเวลา break
//เพิ่ม
breakIncBtn.addEventListener("click", () => {
  breakMinutes = adjustMinutes(breakMinutes, 1, 1, 10)
  if (currentMode === "break" && !isRunning) {
    timeLeft = toSeconds(breakMinutes);
  }
  updateUI()
})
//ลด
breakDecBtn.addEventListener("click", () => {
  breakMinutes = adjustMinutes(breakMinutes, -1, 1, 10)
  if (currentMode === "break" && !isRunning) {
    timeLeft = toSeconds(breakMinutes);
  }
  updateUI()

})

//ปุ่มสตาร์ทและปุ่มหยุด
startBtn.addEventListener("click", () => {
  if (isRunning) {
    stopTimer()
    updateUI()
  } else {
    isRunning = true;
    updateUI()
    timerInterval = window.setInterval(() => {
      timeLeft--;
      updateUI()
      if (timeLeft === 0 && currentMode === "focus") {
        alarmSound.play()
        isRunning = false;
        stopTimer()
        currentMode = "break"
        timeLeft = toSeconds(breakMinutes)
        updateUI()
      }
      if (timeLeft === 0 && currentMode === "break") {
        alarmSound.play()
        currentMode = "focus"
        stopTimer()
        timeLeft = toSeconds(focusMinutes)
        updateUI()
      }
    }, 1000)
  }
})

//ปุ่มรีฌซ็ท
resetBtn.addEventListener("click", () => {
  if (currentMode === "focus") {
    stopTimer()
    timeLeft = toSeconds(focusMinutes)
    updateUI()
  } else {
    stopTimer()
    timeLeft = toSeconds(breakMinutes)
    updateUI()
  }
})

//ฟังก์ชันหยุดเวลา
function stopTimer(): void {
  if (timerInterval !== null) {
    clearInterval(timerInterval)
    timerInterval = null
    isRunning = false;
  }
}
updateUI()