// app.ts
var buttonsEl = document.querySelectorAll("button");
var inputFieldEl = document.getElementById("result");
var firstOperend = "";
var currenOpertor = "";
var waitingForSecond = true;
buttonsEl.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.textContent;
    if (btn.classList.contains("number") || btn.classList.contains("decimal")) {
      if (waitingForSecond === true) {
        inputFieldEl.value = val;
        waitingForSecond = false;
      } else {
        inputFieldEl.value += val;
      }
    } else if (btn.classList.contains("operator")) {
      if (inputFieldEl.value === "") {
        return;
      }
      firstOperend = inputFieldEl.value;
      currenOpertor = val;
      waitingForSecond = true;
    } else if (btn.classList.contains("equals")) {
      if (currenOpertor === "" || firstOperend === "")
        return;
      const num1 = Number(firstOperend);
      const num2 = Number(inputFieldEl.value);
      let result = 0;
      switch (currenOpertor) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "x":
          result = num1 * num2;
          break;
        case "÷":
          if (num2 === 0) {
            inputFieldEl.value = "ERROR";
            firstOperend = "";
            currenOpertor = "";
            return;
          }
          result = num1 / num2;
          break;
        default:
          break;
      }
      inputFieldEl.value = String(result);
      firstOperend = "";
      currenOpertor = "";
      waitingForSecond = true;
    } else if (btn.classList.contains("clear")) {
      firstOperend = "";
      currenOpertor = "";
      waitingForSecond = false;
      inputFieldEl.value = "";
    }
  });
});
