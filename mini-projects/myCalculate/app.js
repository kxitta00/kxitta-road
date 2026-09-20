// engine.ts
function calculate(num1, num2, operator) {
  let result = 0;
  switch (operator) {
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
        return "ERROR";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      return "ERROR";
      break;
  }
  return String(result);
}

// app.ts
var inputEl = document.getElementById("result");
var buttonsEl = document.querySelectorAll("button");
var num01 = "";
var op = "";
var waiting = true;
buttonsEl.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;
    if (btn.classList.contains("number") || btn.classList.contains("decimal")) {
      if (waiting === true) {
        inputEl.value = value;
        waiting = false;
      } else {
        if (btn.classList.contains("decimal") && inputEl.value.includes(".")) {
          return;
        }
        inputEl.value += value;
      }
    } else if (btn.classList.contains("operator")) {
      if (inputEl.value === "") {
        return;
      }
      num01 = inputEl.value;
      op = value;
      waiting = true;
    } else if (btn.classList.contains("equals")) {
      if (num01 === "" || op === "") {
        return;
      }
      const num11 = Number(num01);
      const num22 = Number(inputEl.value);
      inputEl.value = calculate(num11, num22, op);
      num01 = "";
      op = "";
      waiting = true;
    } else if (btn.classList.contains("clear")) {
      inputEl.value = "";
      num01 = "";
      op = "";
      waiting = true;
    }
  });
});
