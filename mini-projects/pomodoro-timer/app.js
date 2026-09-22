// timer-engine.ts
function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const minutesStr = String(minutes).padStart(2, "0");
  const secondsStr = String(seconds).padStart(2, "0");
  return `${minutesStr}:${secondsStr}`;
}
function toSeconds(minutes) {
  return minutes * 60;
}
function adjustMinutes(currentMinutes, change, minLimit, maxLimit) {
  const nextValue = currentMinutes + change;
  if (nextValue < minLimit) {
    return minLimit;
  } else if (nextValue > maxLimit) {
    return maxLimit;
  } else {
    return nextValue;
  }
}

// app.ts
var focusMinutes = 50;
var breakMinutes = 10;
var currentMode = "focus";
var timeLeft = toSeconds(focusMinutes);
var isRunning = false;
var timerInterval = null;
var timerDisplay = document.getElementById("timer-display");
var labelDisplay = document.getElementById("timer-label");
var focusModeBtn = document.getElementById("focus-mode-btn");
var breakModeBtn = document.getElementById("break-mode-btn");
var startBtn = document.getElementById("start-btn");
var resetBtn = document.getElementById("reset-btn");
var stepperFocusTime = document.getElementById("focus-time");
var focusDecBtn = document.getElementById("focus-dec-btn");
var focusIncBtn = document.getElementById("focus-inc-btn");
var stepperBreakTime = document.getElementById("break-time");
var breakDecBtn = document.getElementById("break-dec-btn");
var breakIncBtn = document.getElementById("break-inc-btn");
function updateUI() {
  timerDisplay.textContent = formatTime(timeLeft);
  stepperFocusTime.textContent = String(focusMinutes);
  stepperBreakTime.textContent = String(breakMinutes);
  if (currentMode === "focus") {
    labelDisplay.textContent = "Focus Time";
  } else {
    labelDisplay.textContent = "Break Time";
  }
  focusModeBtn.classList.toggle("active", currentMode === "focus");
  breakModeBtn.classList.toggle("active", currentMode === "break");
  if (isRunning) {
    startBtn.textContent = "PAUSE";
  } else {
    startBtn.textContent = "START";
  }
}
focusModeBtn.addEventListener("click", () => {
  if (!isRunning) {
    currentMode = "focus";
    timeLeft = toSeconds(focusMinutes);
    updateUI();
  }
});
breakModeBtn.addEventListener("click", () => {
  if (!isRunning) {
    currentMode = "break";
    timeLeft = toSeconds(breakMinutes);
    updateUI();
  }
});
focusIncBtn.addEventListener("click", () => {
  focusMinutes = adjustMinutes(focusMinutes, 5, 1, 60);
  if (currentMode === "focus" && !isRunning) {
    timeLeft = toSeconds(focusMinutes);
  }
  updateUI();
});
focusDecBtn.addEventListener("click", () => {
  focusMinutes = adjustMinutes(focusMinutes, -5, 5, 60);
  if (currentMode === "focus" && !isRunning) {
    timeLeft = toSeconds(focusMinutes);
  }
  updateUI();
});
breakIncBtn.addEventListener("click", () => {
  breakMinutes = adjustMinutes(breakMinutes, 1, 1, 10);
  if (currentMode === "break" && !isRunning) {
    timeLeft = toSeconds(breakMinutes);
  }
  updateUI();
});
breakDecBtn.addEventListener("click", () => {
  breakMinutes = adjustMinutes(breakMinutes, -1, 1, 10);
  if (currentMode === "break" && !isRunning) {
    timeLeft = toSeconds(breakMinutes);
  }
  updateUI();
});
startBtn.addEventListener("click", () => {
  if (isRunning) {
    stopTimer();
    updateUI();
  } else {
    isRunning = true;
    updateUI();
    timerInterval = window.setInterval(() => {
      timeLeft--;
      updateUI();
      if (timeLeft === 0 && currentMode === "focus") {
        isRunning = false;
        stopTimer();
        currentMode = "break";
        timeLeft = toSeconds(breakMinutes);
        updateUI();
      }
      if (timeLeft === 0 && currentMode === "break") {
        currentMode = "focus";
        stopTimer();
        timeLeft = toSeconds(focusMinutes);
        updateUI();
      }
    }, 1000);
  }
});
resetBtn.addEventListener("click", () => {
  if (currentMode === "focus") {
    stopTimer();
    timeLeft = toSeconds(focusMinutes);
    updateUI();
  } else {
    stopTimer();
    timeLeft = toSeconds(breakMinutes);
    updateUI();
  }
});
function stopTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
    isRunning = false;
  }
}
updateUI();
