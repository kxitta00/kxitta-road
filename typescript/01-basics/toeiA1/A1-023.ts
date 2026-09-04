let inputTemp: number = Number(prompt("temperature: "));
let inputUnit: string = String(prompt("Unit: ")); // C c | F f

let c_temp: number = 0;
let isFound: boolean = false;


if (inputUnit === "C" || inputUnit === "c") {
    c_temp = inputTemp
    isFound = true
} else if (inputUnit === "F" || inputUnit === "f") {
    c_temp = ((inputTemp - 32) * 5) / 9;
    isFound = true
} else {
    console.log("ไม่พบหน่วยอุณหภูมิ!!")
    isFound = isFound
}

if (isFound === true) {
    if (c_temp <= 0) {
        console.log("solid");
    } else if (c_temp >= 100) {
        console.log("gas");
    } else {
        console.log("liquid")
    }
} 
