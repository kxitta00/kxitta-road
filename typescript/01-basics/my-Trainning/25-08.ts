const inputNum1: number = Number(prompt("ตัวตั้ง: ")) ?? 0;
const inputNum2: number = Number(prompt("ตัวหาร: ")) ?? 0;

function safeDivide(a: number, b: number): string | number {
  if (isNaN(a) || isNaN(b)) {
    return "Error: ข้อมูลต้องเป็นตัวเลขเท่านั้น"
  } else if (a < 0 || b < 0) {
    return "Error: ค่าต้องไม่ติดลบ"
  } else if (b === 0) {
    return "Error: ตัวหารต้องไม่เป็น 0"
  }

  return a / b
}

console.log(safeDivide(inputNum1, inputNum2));