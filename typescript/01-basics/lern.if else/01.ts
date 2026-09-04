function calculateBMI(weight: number, heightCentimeters: number): number {
    let heightInMeters: number = heightCentimeters / 100;
    let bmi: number = weight / (heightInMeters * heightInMeters);
    return bmi;
}

let infoOne: number = Number(prompt("กรุณากรอกน้ำหนัก: "));
let infoTwo: number = Number(prompt("กรุณากรอกส่วนสูง: "));

let One: number = calculateBMI(infoOne, infoTwo);


console.log(`น้ำหนักของคุณคือ: ${infoOne}`)
console.log(`ส่วนสูงของคุณคือ: ${infoTwo}`)
console.log(`BMI ของคุณคือ: ${One}`)
