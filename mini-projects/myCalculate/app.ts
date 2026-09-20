import { calculate } from "./engine";

const inputEl = document.getElementById("result") as HTMLInputElement; //ช่องแสดงหลัก
const buttonsEl = document.querySelectorAll<HTMLButtonElement>("button"); //จับปุ่มทุกอันมา

let num01: string = "";
let op: string = "";
let waiting: boolean = true;

buttonsEl.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value: string = btn.textContent!;

    //ส่วนแสดงผลตัวเลขกับ . 
    if (btn.classList.contains("number") || btn.classList.contains("decimal")) {
      if (waiting === true) {
        inputEl.value = value
        waiting = false;
      } else {
        if (btn.classList.contains("decimal") && inputEl.value.includes(".")) {
          return;
        }
        inputEl.value += value
      }

    } else if (btn.classList.contains("operator")) {
      if (inputEl.value === "") {
        return
      }
      num01 = inputEl.value; //เก็บตัวเลขล่าสุด
      op = value  //เก็บเครื่องหมาย
      waiting = true //กลับไปเก็บเลขอีกชุด
    } else if (btn.classList.contains("equals")) {
      if (num01 === "" || op === "") {
        return
      }
      const num11: number = Number(num01)
      const num22: number = Number(inputEl.value)
      inputEl.value = calculate(num11, num22, op)
      num01 = "";
      op = "";
      waiting = true
    } else if (btn.classList.contains("clear")) {
      inputEl.value = "";
      num01 = "";
      op = "";
      waiting = true;
    }
  })
})
