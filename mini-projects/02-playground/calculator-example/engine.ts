
//คิดเลขหลัก
export function calculate(num1: number, num2: number, operator: string): string {
  let result: number = 0;
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