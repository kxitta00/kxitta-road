const buttonsEl = document.querySelectorAll<HTMLButtonElement>("button"); //ไปกวาดปุ่มทุกตัวใน html ใช้ <HTMLButtonElement> บอก ts ว่าเป็นปุ่ม
let inputFieldEl = document.getElementById("result") as HTMLInputElement; //วิ่งไปจับช่องแสดงผลตัวเลขมาเก็บไว้ในตัวแปร เพื่อให้เราสามารถอ่านค่าหรือยัดผลลัพธ์ใส่ได้

let firstOperend: string = ""; //ตัวตั้ง
let currenOpertor: string = ""; //จำเครื่องหมาย
let waitingForSecond: boolean = true; //สวิต ถ้าเป็น true ครั้งต่อไปให้ล้างจอขึ้นเลขใหม่ fasle กำลังพิมพ์เลขต่อเนื่อง ให้อาเลขใหม่ไปต่อท้ายเลขเดิม

buttonsEl.forEach((btn) => { //สั่งวนลูปเดินไปหาปุ่มทีละปุ่มทั้ง 17 ปุ่มในกล่อง buttonsEl ทันทีตอนโหลดหน้าเว็บ
  btn.addEventListener("click", () => { //เอาหูฟังไปแปะไว้ที่ตัวปุ่มนั้น (addEventListener) ดักฟังว่าถ้ามีคนคลิกเมื่อไหร่ ให้ตื่นขึ้นมารันโค้ดข้างใน
    const val: string = btn.textContent! //ดึงข้อความตัวหนังสือบนปุ่มที่ถูกกดออกมาเก็บไว้ในตัวแปร เป็นสตริง

    if (btn.classList.contains("number") || btn.classList.contains("decimal")) { //เช็คว่าปุ่มที่กดมีคลาส number หรือ decimal ใช่หรือไม่
      if (waitingForSecond === true) { //ถ้าเป็น true ให้เอาตัวเลขใหม่ไปทับหน้าจอทันที เช่นกดเลข 5 หน้าจะจะเป็น 5
        inputFieldEl.value = val
        waitingForSecond = false //สับเป็น false เข้าสู่โหมดพิมพ์ยาวๆแล้วนะ
      } else {
        inputFieldEl.value += val; //พอเป็น false จะเป็นการเอาเลขมาต่อกัน
      }
    } else if (btn.classList.contains("operator")) { //เช็คว่าปุ่มที่กดเป็นเครื่องหมายหรือมั้ย?
      if (inputFieldEl.value === "") { //ดักถ้ามีคนกดเครื่องหมายโดยยังไม่มีตัวเลขให้หยุดการทำงานด้วย return
        return
      }
      firstOperend = inputFieldEl.value; //เอาตัวเลขที่อยู่บนหน้าจอตอนนี้ไปเก็บไว้ใน firstOperend เป็นตัวตั้ง
      currenOpertor = val //เอาเครื่องหมายที่พึ่งกดไปจำไว้ใน currenOperator
      waitingForSecond = true //ส่งสัญญานไปว่าจำตัวแรกเสร็จแล้ว ถ้ามีคนกดตัวเลขเข้ามาใหม่ให้วาดหน้าจอใหม่
    } else if (btn.classList.contains("equals")) {
      if (currenOpertor === "" || firstOperend === "") return;
      const num1 = Number(firstOperend); //แปลงตัวตั้วตัวแรกให้เป็นตัวเลข
      const num2 = Number(inputFieldEl.value); //แปลงตัวเลขปัจจุบันที่อยู่บนหน้าจอให้เป็น number
      let result: number = 0;
      switch (currenOpertor) {
        case "+":
          result = num1 + num2
          break;
        case "-":
          result = num1 - num2
          break;
        case "x":
          result = num1 * num2
          break;
        case "÷":
          if (num2 === 0) {
            inputFieldEl.value = "ERROR";
            firstOperend = "";
            currenOpertor = "";
            waitingForSecond = true
            return
          }
          result = num1 / num2
          break;
        default:
          break;
      }
      inputFieldEl.value = String(result)
      firstOperend = "";
      currenOpertor = "";
      waitingForSecond = true
    } else if (btn.classList.contains("clear")) {
      firstOperend = "";
      currenOpertor = "";
      waitingForSecond = false;
      inputFieldEl.value = "";

    }
  })
})

