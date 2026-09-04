const inputHours: number = Number(prompt("")) ?? 0;

function calculateParkingFee(hours: number): number | string {
  if (isNaN(hours) || hours < 0) { return "Error ty again"; }
  let fee: number = Math.ceil(hours);
  let output: number = 0;
  for (let i = 1; i < fee; i++) { output += 20 }
  if (output > 150) { return 150; } else { return output }
}

console.log(calculateParkingFee(inputHours));